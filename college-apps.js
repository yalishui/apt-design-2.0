// Steve's College Application Data

// College applications data structure
let collegeApplications = JSON.parse(localStorage.getItem('collegeApplications')) || [];

// Default/initial data
const initialCollegeApps = [
    {
        id: 'app-1',
        university: 'University of Hong Kong (HKU)',
        program: 'Bachelor of Medicine',
        applicationDeadline: '2026-03-15',
        submissionTime: '23:59',
        status: 'In Progress',
        tasks: [
            { id: 'task-1-1', title: 'Complete personal statement', completed: true, deadline: '2026-02-28' },
            { id: 'task-1-2', title: 'Upload academic transcripts', completed: true, deadline: '2026-03-01' },
            { id: 'task-1-3', title: 'Submit recommendation letters', completed: false, deadline: '2026-03-10' },
            { id: 'task-1-4', title: 'Complete interview preparation', completed: false, deadline: '2026-03-12' }
        ],
        documents: [
            { id: 'doc-1-1', name: 'Personal Statement.pdf', submitted: true },
            { id: 'doc-1-2', name: 'Academic Transcripts.pdf', submitted: true },
            { id: 'doc-1-3', name: 'Recommendation Letters.pdf', submitted: false }
        ],
        interview: {
            date: '2026-03-20',
            time: '14:00',
            location: 'HKU Medical Campus, Room 301'
        },
        notes: 'Need to practice interview questions and prepare portfolio'
    },
    {
        id: 'app-2',
        university: 'Chinese University of Hong Kong (CUHK)',
        program: 'Medicine & Surgery',
        applicationDeadline: '2026-03-18',
        submissionTime: '23:59',
        status: 'In Progress',
        tasks: [
            { id: 'task-2-1', title: 'Write personal statement', completed: true, deadline: '2026-02-25' },
            { id: 'task-2-2', title: 'Gather reference letters', completed: true, deadline: '2026-03-05' },
            { id: 'task-2-3', title: 'Submit online application', completed: false, deadline: '2026-03-18' },
            { id: 'task-2-4', title: 'Prepare for interview', completed: false, deadline: '2026-03-22' }
        ],
        documents: [
            { id: 'doc-2-1', name: 'Personal Statement.pdf', submitted: true },
            { id: 'doc-2-2', name: 'Reference Letters.pdf', submitted: true },
            { id: 'doc-2-3', name: 'Application Form.pdf', submitted: false }
        ],
        interview: {
            date: '2026-03-25',
            time: '10:30',
            location: 'CUHK Medical Building, Room 205'
        },
        notes: 'Interview format includes multiple mini-stations'
    },
    {
        id: 'app-3',
        university: 'University of Oxford',
        program: 'Medicine',
        applicationDeadline: '2026-04-15',
        submissionTime: '18:00 (UK time)',
        status: 'Not Started',
        tasks: [
            { id: 'task-3-1', title: 'Complete UCAS application', completed: false, deadline: '2026-03-31' },
            { id: 'task-3-2', title: 'Write UK personal statement', completed: false, deadline: '2026-04-05' },
            { id: 'task-3-3', title: 'Prepare for BMAT exam', completed: false, deadline: '2026-04-01' },
            { id: 'task-3-4', title: 'Submit teacher references', completed: false, deadline: '2026-04-10' }
        ],
        documents: [
            { id: 'doc-3-1', name: 'UCAS Personal Statement.pdf', submitted: false },
            { id: 'doc-3-2', name: 'Academic Record.pdf', submitted: false },
            { id: 'doc-3-3', name: 'Teacher References.pdf', submitted: false },
            { id: 'doc-3-4', name: 'BMAT Results.pdf', submitted: false }
        ],
        interview: {
            date: null,
            time: null,
            location: null
        },
        notes: 'Need to complete BMAT exam by March'
    },
    {
        id: 'app-4',
        university: 'University of Cambridge',
        program: 'Natural Sciences (Medical Track)',
        applicationDeadline: '2026-04-15',
        submissionTime: '18:00 (UK time)',
        status: 'Not Started',
        tasks: [
            { id: 'task-4-1', title: 'Complete UCAS application', completed: false, deadline: '2026-03-31' },
            { id: 'task-4-2', title: 'Write personal statement', completed: false, deadline: '2026-04-05' },
            { id: 'task-4-3', title: 'Prepare for written assessment', completed: false, deadline: '2026-04-02' },
            { id: 'task-4-4', title: 'Submit college choice preferences', completed: false, deadline: '2026-04-12' }
        ],
        documents: [
            { id: 'doc-4-1', name: 'UCAS Application.pdf', submitted: false },
            { id: 'doc-4-2', name: 'Personal Statement.pdf', submitted: false },
            { id: 'doc-4-3', name: 'Written Assessment Materials.pdf', submitted: false },
            { id: 'doc-4-4', name: 'Academic Record.pdf', submitted: false }
        ],
        interview: {
            date: null,
            time: null,
            location: null
        },
        notes: 'Considering applying to specific college within Cambridge'
    }
];

// Initialize college applications if empty
function initializeCollegeApps() {
    if (collegeApplications.length === 0) {
        collegeApplications = initialCollegeApps;
        saveCollegeApps();
    }
}

// Save college applications to localStorage
function saveCollegeApps() {
    localStorage.setItem('collegeApplications', JSON.stringify(collegeApplications));
}

// Get upcoming college applications
function getUpcomingCollegeApps(limit = 10) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return collegeApplications
        .map(app => ({
            ...app,
            daysUntilDeadline: Math.ceil((new Date(app.applicationDeadline) - today) / (1000 * 60 * 60 * 24))
        }))
        .filter(app => app.daysUntilDeadline >= 0)
        .sort((a, b) => a.daysUntilDeadline - b.daysUntilDeadline)
        .slice(0, limit);
}

// Get college applications by status
function getCollegeAppsByStatus(status) {
    return collegeApplications.filter(app => app.status === status);
}

// Calculate task completion percentage
function getTaskProgress(app) {
    if (!app.tasks || app.tasks.length === 0) return 0;
    const completed = app.tasks.filter(task => task.completed).length;
    return Math.round((completed / app.tasks.length) * 100);
}

// Get upcoming tasks across all applications
function getUpcomingTasks(limit = 10) {
    const allTasks = [];
    const today = new Date();

    collegeApplications.forEach(app => {
        app.tasks.forEach(task => {
            if (!task.completed) {
                const taskDate = new Date(task.deadline);
                const daysUntil = Math.ceil((taskDate - today) / (1000 * 60 * 60 * 24));
                allTasks.push({
                    ...task,
                    university: app.university,
                    program: app.program,
                    appId: app.id,
                    daysUntilTask: daysUntil
                });
            }
        });
    });

    return allTasks
        .filter(task => task.daysUntilTask >= 0)
        .sort((a, b) => a.daysUntilTask - b.daysUntilTask)
        .slice(0, limit);
}

// Get upcoming interviews
function getUpcomingInterviews() {
    const interviews = [];
    const today = new Date();

    collegeApplications.forEach(app => {
        if (app.interview && app.interview.date) {
            const interviewDate = new Date(app.interview.date);
            const daysUntil = Math.ceil((interviewDate - today) / (1000 * 60 * 60 * 24));
            interviews.push({
                university: app.university,
                program: app.program,
                date: app.interview.date,
                time: app.interview.time,
                location: app.interview.location,
                daysUntilInterview: daysUntil,
                appId: app.id
            });
        }
    });

    return interviews
        .filter(int => int.daysUntilInterview >= 0)
        .sort((a, b) => a.daysUntilInterview - b.daysUntilInterview);
}

// Initialize on load
initializeCollegeApps();
