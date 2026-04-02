// State management
let notes = JSON.parse(localStorage.getItem('voiceNotes')) || [];
let currentView = 'label'; // 'label' or 'detail' for Canadian colleges
let currentCanadianSubTab = 'canadian-all';

// DOM Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const subTabBtns = document.querySelectorAll('.sub-tab-btn');
const subTabLists = document.querySelectorAll('.sub-tab-list');
const viewBtns = document.querySelectorAll('.view-btn');
const appDetailModal = document.getElementById('appDetailModal');
const appDetailTitle = document.getElementById('appDetailTitle');
const appDetailBody = document.getElementById('appDetailBody');
const closeAppModal = document.getElementById('closeAppModal');
const canadianDetailModal = document.getElementById('canadianDetailModal');
const canadianDetailTitle = document.getElementById('canadianDetailTitle');
const canadianDetailBody = document.getElementById('canadianDetailBody');
const closeCanadianModal = document.getElementById('closeCanadianModal');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeCollegeApps();
    populateCalendar();
    populateCanadianColleges();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    // Sub-tab switching
    subTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchCanadianSubTab(btn.dataset.subtab);
        });
    });

    // View toggle for Canadian colleges
    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.closest('.sub-tab-list');
            const view = e.target.dataset.view;
            switchCanadianView(container, view);
        });
    });

    // Modal close
    closeAppModal.addEventListener('click', closeAppDetailModal);
    closeCanadianModal.addEventListener('click', closeCanadianDetailModal);

    appDetailModal.addEventListener('click', (e) => {
        if (e.target === appDetailModal) {
            closeAppDetailModal();
        }
    });

    canadianDetailModal.addEventListener('click', (e) => {
        if (e.target === canadianDetailModal) {
            closeCanadianDetailModal();
        }
    });
}

// Switch calendar tab
function switchTab(tabName) {
    // Update tab buttons
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });

    // Update tab content
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Show correct tab
    const activeTab = document.getElementById(`${tabName}Dates`) ||
                     document.getElementById(`${tabName}Tab`);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Scroll to top
    document.querySelector('.calendar-content').scrollTop = 0;
}

// Switch Canadian sub-tab
function switchCanadianSubTab(subTabName) {
    currentCanadianSubTab = subTabName;

    // Update sub-tab buttons
    subTabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.subtab === subTabName) {
            btn.classList.add('active');
        }
    });

    // Update sub-tab content
    subTabLists.forEach(list => {
        list.classList.remove('active');
    });

    const activeList = document.getElementById(subTabName);
    if (activeList) {
        activeList.classList.add('active');
    }

    // Reset view to label
    const viewBtns = activeList.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === 'label') {
            btn.classList.add('active');
        }
    });

    // Repopulate with label view
    populateCanadianCollegeList(subTabName, 'label');
}

// Switch Canadian view (label/detail)
function switchCanadianView(container, view) {
    currentView = view;

    // Update view buttons
    const viewBtns = container.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });

    // Get current sub-tab
    const subTabId = container.id;

    // Repopulate with selected view
    populateCanadianCollegeList(subTabId, view);
}

// Populate calendar with dates
function populateCalendar() {
    // Clear all lists
    document.getElementById('allDatesList').innerHTML = '';
    document.getElementById('holidaysList').innerHTML = '';
    document.getElementById('ucatList').innerHTML = '';
    document.getElementById('satList').innerHTML = '';
    document.getElementById('ieltsList').innerHTML = '';
    document.getElementById('birthdaysList').innerHTML = '';

    // Get upcoming dates from all categories
    const holidays = getUpcomingDates('hkHolidays', 20);
    const ucatDates = getUpcomingDates('ucatDates', 20);
    const satDates = getUpcomingDates('satDates', 20);
    const ieltsDates = getUpcomingDates('ieltsDates', 20);
    const birthdays = notes
        .filter(n => n.category === 'birthday')
        .map(n => ({
            name: n.content.replace(/🎂|'s Birthday|days away|.*?\(|\)/g, '').trim(),
            date: n.date,
            daysLeft: daysUntil(n.date)
        }))
        .sort((a, b) => a.daysLeft - b.daysLeft);

    // Populate all dates tab (excluding Canadian colleges)
    const allDates = [
        ...holidays,
        ...ucatDates,
        ...satDates,
        ...ieltsDates,
        ...birthdays
    ].sort((a, b) => a.daysLeft - b.daysLeft);

    if (allDates.length === 0) {
        document.getElementById('allDatesList').innerHTML = '<div class="calendar-empty">No upcoming dates in the near future.</div>';
    } else {
        allDates.forEach(item => {
            const category = item.category || 'holiday';
            document.getElementById('allDatesList').appendChild(createDateCard(item, category));
        });
    }

    // Populate holidays tab
    if (holidays.length === 0) {
        document.getElementById('holidaysList').innerHTML = '<div class="calendar-empty">No upcoming Hong Kong holidays.</div>';
    } else {
        holidays.forEach(holiday => {
            document.getElementById('holidaysList').appendChild(createDateCard(holiday, 'holiday'));
        });
    }

    // Populate UCAT tab
    if (ucatDates.length === 0) {
        document.getElementById('ucatList').innerHTML = '<div class="calendar-empty">No upcoming UCAT dates.</div>';
    } else {
        ucatDates.forEach(date => {
            document.getElementById('ucatList').appendChild(createDateCard(date, 'ucat'));
        });
    }

    // Populate SAT tab
    if (satDates.length === 0) {
        document.getElementById('satList').innerHTML = '<div class="calendar-empty">No upcoming SAT dates.</div>';
    } else {
        satDates.forEach(date => {
            document.getElementById('satList').appendChild(createDateCard(date, 'sat'));
        });
    }

    // Populate IELTS tab
    if (ieltsDates.length === 0) {
        document.getElementById('ieltsList').innerHTML = '<div class="calendar-empty">No upcoming IELTS dates.</div>';
    } else {
        ieltsDates.forEach(date => {
            document.getElementById('ieltsList').appendChild(createDateCard(date, 'ielts'));
        });
    }

    // Populate birthdays tab
    if (birthdays.length === 0) {
        document.getElementById('birthdaysList').innerHTML = '<div class="calendar-empty">No birthdays added yet.</div>';
    } else {
        birthdays.forEach(birthday => {
            document.getElementById('birthdaysList').appendChild(createDateCard(birthday, 'birthday'));
        });
    }
}

// Populate Canadian colleges
function populateCanadianColleges() {
    populateCanadianCollegeList('canadian-all', 'label');
    populateCanadianCollegeList('canadian-ubc', 'label');
    populateCanadianCollegeList('canadian-mcgill', 'label');
    populateCanadianCollegeList('canadian-uoft', 'label');
    populateCanadianCollegeList('canadian-waterloo', 'label');
}

// Populate Canadian college list for specific sub-tab
function populateCanadianCollegeList(subTabId, view) {
    // Map sub-tab ID to the actual list container ID
    const listIdMap = {
        'canadian-all': 'canadianAllList',
        'canadian-ubc': 'canadianUBCList',
        'canadian-mcgill': 'canadianMcGillList',
        'canadian-uoft': 'canadianUofTList',
        'canadian-waterloo': 'canadianWaterlooList',
        'canadian-queens': 'canadianQueensList',
        'canadian-mcmaster': 'canadianMcMasterList'
    };

    const listContainer = document.getElementById(listIdMap[subTabId]);
    if (!listContainer) return;

    listContainer.innerHTML = '';

    let universities = [];

    if (subTabId === 'canadian-all') {
        universities = CanadianUniversities.universities;
    } else if (subTabId === 'canadian-ubc') {
        universities = CanadianUniversities.universities.filter(u => u.id === 'can-ubc');
    } else if (subTabId === 'canadian-mcgill') {
        universities = CanadianUniversities.universities.filter(u => u.id === 'can-mcgill');
    } else if (subTabId === 'canadian-uoft') {
        universities = CanadianUniversities.universities.filter(u => u.id === 'can-uoft');
    } else if (subTabId === 'canadian-waterloo') {
        universities = CanadianUniversities.universities.filter(u => u.id === 'can-waterloo');
    } else if (subTabId === 'canadian-queens') {
        universities = CanadianUniversities.universities.filter(u => u.id === 'can-queens');
    } else if (subTabId === 'canadian-mcmaster') {
        universities = CanadianUniversities.universities.filter(u => u.id === 'can-mcmaster');
    }

    if (universities.length === 0) {
        listContainer.innerHTML = '<div class="calendar-empty">No information available.</div>';
        return;
    }

    if (view === 'label') {
        universities.forEach(university => {
            const dates = getUpcomingDatesForUniversity(university);
            dates.forEach(date => {
                listContainer.appendChild(createLabelCard(university, date));
            });
        });

        if (listContainer.children.length === 0) {
            listContainer.innerHTML = '<div class="calendar-empty">No upcoming dates.</div>';
        }
    } else {
        universities.forEach(university => {
            listContainer.appendChild(createUniversityDetailCard(university));
        });
    }
}

// Get upcoming dates for a university
function getUpcomingDatesForUniversity(university) {
    const today = new Date();
    return university.keyDates
        .filter(date => {
            const dateObj = new Date(date.date);
            return dateObj >= today;
        })
        .map(date => ({
            ...date,
            daysLeft: daysUntil(date.date),
            universityId: university.id
        }))
        .sort((a, b) => a.daysLeft - b.daysLeft);
}

// Get all Canadian college dates for "All" tab
function getCanadianCollegeDates() {
    const allDates = [];
    CanadianUniversities.universities.forEach(university => {
        const dates = getUpcomingDatesForUniversity(university);
        dates.forEach(date => {
            allDates.push({
                name: `${university.name} - ${date.event}`,
                date: date.date,
                daysLeft: date.daysLeft,
                category: 'canadian-college',
                importance: date.importance
            });
        });
    });
    return allDates;
}

// Create label card for Canadian college dates
function createLabelCard(university, date) {
    const card = document.createElement('div');
    const importanceClass = date.importance === 'critical' ? 'critical' :
                          date.importance === 'high' ? 'important' : 'normal';
    const urgencyClass = date.daysLeft <= 7 ? 'urgent' :
                          date.daysLeft <= 30 ? 'soon' : 'normal';

    card.className = `label-item ${importanceClass}`;
    card.innerHTML = `
        <div class="label-event">
            <div class="label-event-name">${date.event}</div>
            <div class="label-event-date">${formatDate(date.date)}${date.time ? ' at ' + date.time : ''}</div>
        </div>
        <div class="label-days ${urgencyClass}">
            ${date.daysLeft} days
        </div>
    `;

    card.addEventListener('click', () => showCanadianCollegeDetail(university.id, date.date));

    return card;
}

// Create university detail card for detail view
function createUniversityDetailCard(university) {
    const card = document.createElement('div');
    card.className = 'app-card';

    const upcomingDates = getUpcomingDatesForUniversity(university).slice(0, 3);

    card.innerHTML = `
        <div class="app-header">
            <div>
                <div class="app-university">${university.name}</div>
                <div class="app-program">${university.program}</div>
                <div class="app-program" style="color: var(--text-secondary); font-size: 0.9rem;">
                    ${university.location} • ${university.applicationMethod}
                </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.4rem;">
                <span class="app-status status-in-progress">Sep 2027 Entry</span>
                <span style="font-size:0.78rem;color:var(--text-secondary);">Cycle 2026-2027</span>
            </div>
        </div>

        <div style="margin: 1rem 0;">
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                Upcoming Deadlines:
            </div>
            ${upcomingDates.length > 0 ? upcomingDates.map(date => `
                <div style="display: flex; justify-content: space-between; align-items: center;
                           padding: 0.5rem; background: var(--bg-secondary); border-radius: 6px; margin-bottom: 0.5rem;
                           border-left: 3px solid ${date.importance === 'critical' ? 'var(--danger)' :
                                                date.importance === 'high' ? 'var(--accent)' : 'var(--success)'};">
                    <div>
                        <div style="font-weight: 500; font-size: 0.9rem;">${date.event}</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">
                            ${formatDate(date.date)}${date.time ? ' at ' + date.time : ''}
                        </div>
                    </div>
                    <div style="color: ${date.daysLeft <= 7 ? 'var(--danger)' :
                                       date.daysLeft <= 30 ? 'var(--accent)' : 'var(--success)'};
                           font-weight: 600; font-size: 0.9rem;">
                        ${date.daysLeft}d
                    </div>
                </div>
            `).join('') : '<div style="font-size:0.9rem;color:var(--text-secondary);padding:0.5rem;">Application cycle opens Oct 2026. Check back then!</div>'}
        </div>

        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            ${university.links.official ? `
                <a href="${university.links.official}" target="_blank" class="quick-link external">
                    Official Site
                </a>
            ` : ''}
            ${university.links.application ? `
                <a href="${university.links.application}" target="_blank" class="quick-link external">
                    Apply Now
                </a>
            ` : ''}
        </div>
    `;

    card.addEventListener('click', () => showCanadianCollegeDetail(university.id));

    return card;
}

// Show Canadian college detail modal
function showCanadianCollegeDetail(universityId, specificDate = null) {
    const university = CanadianUniversities.universities.find(u => u.id === universityId);
    if (!university) return;

    canadianDetailTitle.textContent = university.name;
    canadianDetailBody.innerHTML = `
        <div class="modal-section">
            <div class="modal-section-title">Quick Links</div>
            <div class="modal-quick-links">
                ${university.links.official ? `
                    <a href="${university.links.official}" target="_blank" class="quick-link external">
                        🏫 Official Website
                    </a>
                ` : ''}
                ${university.links.application ? `
                    <a href="${university.links.application}" target="_blank" class="quick-link external">
                        📝 Application Portal
                    </a>
                ` : ''}
                ${university.links.deadlines ? `
                    <a href="${university.links.deadlines}" target="_blank" class="quick-link external">
                        📅 Deadlines
                    </a>
                ` : ''}
                ${university.links.requirements ? `
                    <a href="${university.links.requirements}" target="_blank" class="quick-link external">
                        ✅ Requirements
                    </a>
                ` : ''}
                ${university.links.tuition ? `
                    <a href="${university.links.tuition}" target="_blank" class="quick-link external">
                        💰 Tuition
                    </a>
                ` : ''}
                ${university.links.housing ? `
                    <a href="${university.links.housing}" target="_blank" class="quick-link external">
                        🏠 Housing
                    </a>
                ` : ''}
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Program Overview</div>
            <div style="display: grid; gap: 0.5rem; font-size: 0.95rem;">
                <div><strong>Program:</strong> ${university.program}</div>
                <div><strong>Location:</strong> ${university.location}</div>
                <div><strong>Entry Term:</strong> ${university.targetEntry}</div>
                <div><strong>Application Method:</strong> ${university.applicationMethod}</div>
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Upcoming Deadlines</div>
            <div class="task-list">
                ${getUpcomingDatesForUniversity(university).slice(0, 8).map(date => {
                    const urgencyClass = date.daysLeft <= 7 ? 'urgent' :
                                          date.daysLeft <= 30 ? 'soon' : 'normal';
                    const importanceBorder = date.importance === 'critical' ? 'var(--danger)' :
                                            date.importance === 'high' ? 'var(--accent)' : 'var(--success)';
                    return `
                        <div class="task-item" style="border-left: 4px solid ${importanceBorder};">
                            <div style="flex: 1;">
                                <div class="task-text">${date.event}</div>
                                <div class="task-deadline">
                                    ${formatDate(date.date)}${date.time ? ' at ' + date.time : ''} (${date.timezone || ''})
                                </div>
                                ${date.notes ? `<div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">${date.notes}</div>` : ''}
                            </div>
                            <div class="date-days ${urgencyClass}" style="font-weight: 600;">
                                ${date.daysLeft}d
                            </div>
                            ${date.actionLink ? `
                                <a href="${date.actionLink}" target="_blank" class="quick-link external" style="margin-left: 0.5rem; font-size: 0.8rem;">
                                    Link
                                </a>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Application Steps</div>
            <div class="app-steps">
                ${university.applicationSteps.map(step => `
                    <div class="app-step">
                        <div class="app-step-title">
                            <span class="app-step-number">${step.step}</span>
                            ${step.title}
                        </div>
                        <div class="app-step-timeline">📅 ${step.timeline}</div>
                        <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                            ${step.details.join(' • ')}
                        </div>
                        <div class="app-step-actions">
                            ${step.actionItems.map(action => `
                                <span class="app-step-action">${action}</span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Requirements</div>
            <div class="requirements-list">
                <div class="requirement-category">
                    <div class="requirement-category-title">Academic</div>
                    <div class="requirement-items">
                        ${university.requirements.academic.map(req => `
                            <span class="requirement-item">${req}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="requirement-category">
                    <div class="requirement-category-title">Tests</div>
                    <div class="requirement-items">
                        ${university.requirements.tests.map(req => `
                            <span class="requirement-item">${req}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="requirement-category">
                    <div class="requirement-category-title">Documents</div>
                    <div class="requirement-items">
                        ${university.requirements.documents.map(req => `
                            <span class="requirement-item">${req}</span>
                        `).join('')}
                    </div>
                </div>
                ${university.requirements.other ? `
                    <div class="requirement-category">
                        <div class="requirement-category-title">Other</div>
                        <div class="requirement-items">
                            ${university.requirements.other.map(req => `
                                <span class="requirement-item">${req}</span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Contact Information</div>
            <div style="display: grid; gap: 0.5rem; font-size: 0.95rem;">
                ${university.contact.email ? `<div><strong>📧 Email:</strong> <a href="mailto:${university.contact.email}" style="color: var(--primary);">${university.contact.email}</a></div>` : ''}
                ${university.contact.phone ? `<div><strong>📞 Phone:</strong> ${university.contact.phone}</div>` : ''}
                ${university.contact.address ? `<div><strong>📍 Address:</strong> ${university.contact.address}</div>` : ''}
            </div>
        </div>

        ${university.notes && university.notes.length > 0 ? `
            <div class="modal-section">
                <div class="modal-section-title">Important Notes</div>
                <div class="app-notes">
                    <ul style="list-style: none; padding: 0;">
                        ${university.notes.map(note => `
                            <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                                <span style="position: absolute; left: 0; color: var(--accent);">⚠️</span>
                                ${note}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        ` : ''}
    `;

    canadianDetailModal.style.display = 'flex';
}

// Close Canadian college detail modal
function closeCanadianDetailModal() {
    canadianDetailModal.style.display = 'none';
}

// Create a date card element
function createDateCard(item, category) {
    const card = document.createElement('div');
    card.className = `date-card ${category}`;

    if (item.daysLeft <= 7) {
        card.classList.add('urgent');
    }

    const urgencyClass = item.daysLeft <= 7 ? 'urgent' : (item.daysLeft <= 30 ? 'soon' : 'normal');

    let details = '';
    if (item.time) details += `<div class="date-row"><span class="date-label">Time:</span><span>${item.time}</span></div>`;
    if (item.day) details += `<div class="date-row"><span class="date-label">Day:</span><span>${item.day}</span></div>`;
    if (item.note) details += `<div class="date-note">${item.note}</div>`;
    if (item.regularDeadline) {
        const deadlineDays = daysUntil(item.regularDeadline);
        details += `<div class="date-row"><span class="date-label">Regular deadline:</span><span>${item.regularDeadline} (${deadlineDays} days)</span></div>`;
    }
    if (item.lateDeadline) {
        const lateDays = daysUntil(item.lateDeadline);
        details += `<div class="date-row"><span class="date-label">Late deadline:</span><span>${item.lateDeadline} (${lateDays} days)</span></div>`;
    }
    if (item.link) {
        details += `<div class="date-row"><a href="${item.link}" target="_blank" class="date-link">🔗 More Information →</a></div>`;
    }

    const categoryBadge = {
        holiday: '🏙️ HK Holiday',
        ucat: '📚 UCAT',
        sat: '✍️ SAT',
        ielts: '🌍 IELTS',
        birthday: '🎂 Birthday',
        note: '📝 Note',
        reminder: '⏰ Reminder',
        'college-app': '🎓 College App',
        'canadian-college': '🇨🇦 Canadian'
    }[category] || '📌 Event';

    card.innerHTML = `
        <span class="category-badge ${category}">${categoryBadge}</span>
        <div class="date-header">
            <div class="date-title">${item.name}</div>
            <div class="date-days ${urgencyClass}">${item.daysLeft} days</div>
        </div>
        <div class="date-details">
            <div class="date-row"><span class="date-label">Date:</span><span>${formatDate(item.date)}</span></div>
            ${details}
        </div>
    `;

    return card;
}

// Create a college application card
function createApplicationCard(app) {
    const card = document.createElement('div');
    const statusClass = app.status.toLowerCase().replace(' ', '-');
    card.className = `app-card status-${statusClass}`;

    const urgencyClass = app.daysUntilDeadline <= 7 ? 'urgent' : '';

    const progress = getTaskProgress(app);
    const completedTasks = app.tasks.filter(t => t.completed).length;
    const pendingTasks = app.tasks.length - completedTasks;

    card.innerHTML = `
        <div class="app-header">
            <div>
                <div class="app-university">${app.university}</div>
                <div class="app-program">${app.program}</div>
            </div>
            <span class="app-status ${statusClass}">${app.status}</span>
        </div>

        <div class="app-deadline ${urgencyClass}">
            📅 Deadline: ${formatDate(app.applicationDeadline)} at ${app.submissionTime}
            <span class="date-days ${urgencyClass}" style="margin-left: auto;">${app.daysUntilDeadline} days left</span>
        </div>

        <div class="app-progress">
            <div class="app-progress-bar">
                <div class="app-progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="app-progress-text">${progress}% complete (${completedTasks}/${app.tasks.length} tasks)</div>
        </div>

        <div class="app-tasks-summary">
            <span class="completed">✓ ${completedTasks} completed</span>
            <span>•</span>
            <span class="pending">${pendingTasks} pending</span>
        </div>

        ${app.interview && app.interview.date ? `
            <div class="app-interview-info">
                🎤 Interview: ${formatDate(app.interview.date)} at ${app.interview.time}
                <span style="margin-left: auto;">${daysUntil(app.interview.date)} days</span>
            </div>
        ` : ''}
    `;

    card.addEventListener('click', () => showApplicationDetails(app.id));

    return card;
}

// Show application details modal
function showApplicationDetails(appId) {
    const app = collegeApplications.find(a => a.id === appId);
    if (!app) return;

    const statusClass = app.status.toLowerCase().replace(' ', '-');
    appDetailTitle.textContent = `${app.university}`;
    appDetailBody.innerHTML = `
        <div class="modal-section">
            <div class="modal-section-title">Program</div>
            <div style="font-size: 1.1rem; color: var(--text); font-weight: 600;">${app.program}</div>
            <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span class="app-status ${statusClass}">${app.status}</span>
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Application Deadline</div>
            <div style="color: var(--text); font-size: 0.95rem;">
                📅 ${formatDate(app.applicationDeadline)} at ${app.submissionTime}
                <span style="margin-left: 0.5rem; color: ${app.daysUntilDeadline <= 7 ? 'var(--danger)' : 'var(--text-secondary)'};">
                    (${app.daysUntilDeadline} days left)
                </span>
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Tasks (${getTaskProgress(app)}%)</div>
            <div class="task-list">
                ${app.tasks.map(task => `
                    <div class="task-item" onclick="toggleTaskStatus('${app.id}', '${task.id}')">
                        <div class="task-checkbox ${task.completed ? 'checked' : ''}">
                            ${task.completed ? '✓' : ''}
                        </div>
                        <div>
                            <div class="task-text ${task.completed ? 'completed' : ''}">${task.title}</div>
                            <div class="task-deadline">Due: ${formatDate(task.deadline)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Documents</div>
            <div class="document-list">
                ${app.documents.map(doc => `
                    <div class="document-item">
                        <div class="document-status ${doc.submitted ? 'submitted' : 'not-submitted'}"></div>
                        <div class="document-name">${doc.name}</div>
                        <span class="document-label ${doc.submitted ? 'submitted' : 'not-submitted'}">
                            ${doc.submitted ? 'Submitted' : 'Pending'}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>

        ${app.interview && app.interview.date ? `
            <div class="modal-section">
                <div class="modal-section-title">Interview</div>
                <div class="app-interview-info">
                    <div>📅 Date: ${formatDate(app.interview.date)}</div>
                    <div>⏰ Time: ${app.interview.time}</div>
                    <div>📍 Location: ${app.interview.location}</div>
                </div>
            </div>
        ` : ''}

        <div class="modal-section">
            <div class="modal-section-title">Notes</div>
            <div class="app-notes">${app.notes || 'No notes added.'}</div>
        </div>
    `;

    appDetailModal.style.display = 'flex';
}

// Close application detail modal
function closeAppDetailModal() {
    appDetailModal.style.display = 'none';
}

// Toggle task status
function toggleTaskStatus(appId, taskId) {
    const app = collegeApplications.find(a => a.id === appId);
    if (!app) return;

    const task = app.tasks.find(t => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;
    saveCollegeApps();
    populateCalendar();
    showApplicationDetails(appId);
}

// Utility: Calculate days until date
function daysUntil(dateString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const targetDate = new Date(dateString);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Utility: Format date string
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

// Utility: Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make functions globally available
window.toggleTaskStatus = toggleTaskStatus;
