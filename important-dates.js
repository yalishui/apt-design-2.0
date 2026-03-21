// Important dates data
const importantDates = {
    // Hong Kong 2026 Public Holidays
    hkHolidays: [
        { name: "New Year's Day", date: "2026-01-01", day: "Thursday" },
        { name: "Lunar New Year's Day", date: "2026-02-17", day: "Tuesday" },
        { name: "Second Day of Lunar New Year", date: "2026-02-18", day: "Wednesday" },
        { name: "Third Day of Lunar New Year", date: "2026-02-19", day: "Thursday" },
        { name: "Ching Ming Festival", date: "2026-04-05", day: "Sunday" },
        { name: "Easter Monday", date: "2026-04-06", day: "Monday" },
        { name: "Labour Day", date: "2026-05-01", day: "Friday" },
        { name: "Buddha's Birthday", date: "2026-05-24", day: "Sunday" },
        { name: "Tuen Ng Festival (Dragon Boat Festival)", date: "2026-06-19", day: "Friday" },
        { name: "Hong Kong Special Administrative Region Establishment Day", date: "2026-07-01", day: "Wednesday" },
        { name: "Day Following Mid-Autumn Festival", date: "2026-09-26", day: "Saturday" },
        { name: "National Day", date: "2026-10-01", day: "Thursday" },
        { name: "Chung Yeung Festival", date: "2026-10-18", day: "Sunday" },
        { name: "Winter Solstice", date: "2026-12-22", day: "Tuesday" },
        { name: "Boxing Day", date: "2026-12-26", day: "Saturday" }
    ],

    // Family Birthdays (placeholder - user can add their own)
    familyBirthdays: [
        // Add family birthdays here
        // { name: "Mom's Birthday", date: "YYYY-MM-DD" },
        // { name: "Dad's Birthday", date: "YYYY-MM-DD" },
        // { name: "Sibling's Birthday", date: "YYYY-MM-DD" }
    ],

    // 2026 UCAT Key Dates (UK time)
    ucatDates: [
        { name: "UCAT 2026 Registration Opens", date: "2026-05-12", time: "09:30", note: "Bursary & Access Arrangements also open", link: "https://www.ucat.ac.uk/ucat/ucat-registration/", priority: "high" },
        { name: "UCAT Booking Opens", date: "2026-06-23", time: "06:00", note: "Book your test slot", link: "https://www.ucat.ac.uk/ucat/ucat-booking/", priority: "high" },
        { name: "UCAT Testing Period Begins", date: "2026-07-13", note: "First test date", link: "https://www.ucat.ac.uk/ucat/ucat-test-dates/", priority: "normal" },
        { name: "Access Arrangements Deadline", date: "2026-09-10", time: "15:00", note: "Special exam arrangements deadline", link: "https://www.ucat.ac.uk/ucat/access-arrangements/", priority: "high" },
        { name: "UCAT Registration Deadline", date: "2026-09-16", time: "15:00", note: "Last day to register", link: "https://www.ucat.ac.uk/ucat/ucat-registration/", priority: "critical" },
        { name: "UCAT Booking Deadline", date: "2026-09-16", time: "15:00", note: "Last day to book test", link: "https://www.ucat.ac.uk/ucat/ucat-booking/", priority: "critical" },
        { name: "UCAS Application Deadline", date: "2026-10-15", note: "For Medicine/Dentistry 2027 entry", link: "https://www.ucas.com/undergraduate/apply-and-track/when-apply", priority: "critical" },
        { name: "UCAT Results Delivered to Universities", date: "2026-11-01", note: "Early November", link: "https://www.ucat.ac.uk/ucat/ucat-results/", priority: "normal" }
    ],

    // UCAT Information and Resources
    ucatInfo: {
        overview: "The University Clinical Aptitude Test (UCAT) is a required entrance exam for most medical and dental schools in the UK, Australia, and New Zealand.",
        structure: [
            { section: "Verbal Reasoning", time: "21 mins", questions: "44 questions", description: "Assesses ability to critically evaluate written information" },
            { section: "Decision Making", time: "31 mins", questions: "29 questions", description: "Evaluates logic and problem-solving skills using text, diagrams, and tables" },
            { section: "Quantitative Reasoning", time: "24 mins", questions: "36 questions", description: "Tests numerical reasoning and problem-solving with math concepts" },
            { section: "Abstract Reasoning", time: "12 mins", questions: "55 questions", description: "Assesses ability to identify patterns and relationships in shapes" },
            { section: "Situational Judgment", time: "26 mins", questions: "69 questions", description: "Evaluates understanding of real-world medical scenarios and professionalism" }
        ],
        fees: [
            { category: "Standard UK/EU Fee", amount: "£75", note: "For tests taken in the UK or EU" },
            { category: "Standard International Fee", amount: "£120", note: "For tests taken outside the UK/EU" },
            { category: "Bursary", amount: "Free", note: "For eligible students with financial need", link: "https://www.ucat.ac.uk/ucat/ucat-bursary/" }
        ],
        resources: [
            { name: "Official UCAT Website", url: "https://www.ucat.ac.uk/", description: "Official information, registration, and test booking" },
            { name: "UCAT Practice Tests", url: "https://www.ucat.ac.uk/ucat/practice-tests/", description: "Free official practice tests and question banks" },
            { name: "UCAT Preparation Guide", url: "https://www.ucat.ac.uk/ucat/ucat-preparation/", description: "Official preparation materials and tips" },
            { name: "UCAT Bursary Scheme", url: "https://www.ucat.ac.uk/ucat/ucat-bursary/", description: "Financial support for eligible students" },
            { name: "UCAT Access Arrangements", url: "https://www.ucat.ac.uk/ucat/access-arrangements/", description: "Special accommodations for disabilities" }
        ],
        testCenters: [
            "Hong Kong - British Council",
            "Singapore - IDP Education",
            "Multiple centers across UK",
            "International centers available worldwide"
        ],
        tips: [
            "Start preparing at least 4-6 weeks before your test date",
            "Take full-length practice tests under timed conditions",
            "Focus on your weakest sections first",
            "Learn time management strategies for each section",
            "Review official practice materials thoroughly",
            "Book early to secure your preferred date and location"
        ]
    },

    // 2026 SAT Test Dates (US Eastern Time)
    satDates: [
        { name: "SAT Test: March 14", date: "2026-03-14", regularDeadline: "2026-02-27", lateDeadline: "2026-03-03" },
        { name: "SAT Test: May 2", date: "2026-05-02", regularDeadline: "2026-04-17", lateDeadline: "2026-04-21" },
        { name: "SAT Test: June 6", date: "2026-06-06", regularDeadline: "2026-05-22", lateDeadline: "2026-05-26" },
        { name: "SAT Test: August 15", date: "2026-08-15", regularDeadline: "2026-07-31", lateDeadline: "2026-08-04", note: "Predicted date" },
        { name: "SAT Test: September 12", date: "2026-09-12", regularDeadline: "2026-08-28", lateDeadline: "2026-09-01", note: "Predicted date" },
        { name: "SAT Test: October 3", date: "2026-10-03", regularDeadline: "2026-09-18", lateDeadline: "2026-09-22", note: "Predicted date" },
        { name: "SAT Test: November 7", date: "2026-11-07", regularDeadline: "2026-10-23", lateDeadline: "2026-10-27", note: "Predicted date" },
        { name: "SAT Test: December 5", date: "2026-12-05", regularDeadline: "2026-11-20", lateDeadline: "2026-11-24", note: "Predicted date" }
    ],

    // 2026 IELTS Test Dates (Academic & General Training - Hong Kong)
    ieltsDates: [
        { name: "IELTS Test: January 10", date: "2026-01-10", note: "Paper-based & Computer-delivered" },
        { name: "IELTS Test: January 17", date: "2026-01-17", note: "Computer-delivered only" },
        { name: "IELTS Test: January 24", date: "2026-01-24", note: "Paper-based" },
        { name: "IELTS Test: February 7", date: "2026-02-07", note: "Paper-based" },
        { name: "IELTS Test: February 14", date: "2026-02-14", note: "Computer-delivered only" },
        { name: "IELTS Test: February 21", date: "2026-02-21", note: "Paper-based" },
        { name: "IELTS Test: February 28", date: "2026-02-28", note: "Computer-delivered only" },
        { name: "IELTS Test: March 7", date: "2026-03-07", note: "Paper-based" },
        { name: "IELTS Test: March 14", date: "2026-03-14", note: "Computer-delivered only" },
        { name: "IELTS Test: March 21", date: "2026-03-21", note: "Paper-based" },
        { name: "IELTS Test: March 28", date: "2026-03-28", note: "Computer-delivered only" },
        { name: "IELTS Test: April 4", date: "2026-04-04", note: "Paper-based" },
        { name: "IELTS Test: April 11", date: "2026-04-11", note: "Computer-delivered only" },
        { name: "IELTS Test: April 18", date: "2026-04-18", note: "Paper-based" },
        { name: "IELTS Test: April 25", date: "2026-04-25", note: "Computer-delivered only" },
        { name: "IELTS Test: May 2", date: "2026-05-02", note: "Paper-based" },
        { name: "IELTS Test: May 9", date: "2026-05-09", note: "Computer-delivered only" },
        { name: "IELTS Test: May 16", date: "2026-05-16", note: "Paper-based" },
        { name: "IELTS Test: May 23", date: "2026-05-23", note: "Computer-delivered only" },
        { name: "IELTS Test: May 30", date: "2026-05-30", note: "Paper-based" },
        { name: "IELTS Test: June 6", date: "2026-06-06", note: "Computer-delivered only" },
        { name: "IELTS Test: June 13", date: "2026-06-13", note: "Paper-based" },
        { name: "IELTS Test: June 20", date: "2026-06-20", note: "Computer-delivered only" },
        { name: "IELTS Test: June 27", date: "2026-06-27", note: "Paper-based" },
        { name: "IELTS Test: July 4", date: "2026-07-04", note: "Computer-delivered only" },
        { name: "IELTS Test: July 11", date: "2026-07-11", note: "Paper-based" },
        { name: "IELTS Test: July 18", date: "2026-07-18", note: "Computer-delivered only" },
        { name: "IELTS Test: July 25", date: "2026-07-25", note: "Paper-based" },
        { name: "IELTS Test: August 1", date: "2026-08-01", note: "Computer-delivered only" },
        { name: "IELTS Test: August 8", date: "2026-08-08", note: "Paper-based" },
        { name: "IELTS Test: August 15", date: "2026-08-15", note: "Computer-delivered only" },
        { name: "IELTS Test: August 22", date: "2026-08-22", note: "Paper-based" },
        { name: "IELTS Test: August 29", date: "2026-08-29", note: "Computer-delivered only" },
        { name: "IELTS Test: September 5", date: "2026-09-05", note: "Paper-based" },
        { name: "IELTS Test: September 12", date: "2026-09-12", note: "Computer-delivered only" },
        { name: "IELTS Test: September 19", date: "2026-09-19", note: "Paper-based" },
        { name: "IELTS Test: September 26", date: "2026-09-26", note: "Computer-delivered only" },
        { name: "IELTS Test: October 3", date: "2026-10-03", note: "Paper-based" },
        { name: "IELTS Test: October 10", date: "2026-10-10", note: "Computer-delivered only" },
        { name: "IELTS Test: October 17", date: "2026-10-17", note: "Paper-based" },
        { name: "IELTS Test: October 24", date: "2026-10-24", note: "Computer-delivered only" },
        { name: "IELTS Test: October 31", date: "2026-10-31", note: "Paper-based" },
        { name: "IELTS Test: November 7", date: "2026-11-07", note: "Computer-delivered only" },
        { name: "IELTS Test: November 14", date: "2026-11-14", note: "Paper-based" },
        { name: "IELTS Test: November 21", date: "2026-11-21", note: "Computer-delivered only" },
        { name: "IELTS Test: November 28", date: "2026-11-28", note: "Paper-based" },
        { name: "IELTS Test: December 5", date: "2026-12-05", note: "Computer-delivered only" },
        { name: "IELTS Test: December 12", date: "2026-12-12", note: "Paper-based" }
    ]
};

// Helper function to format date for display
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
}

// Helper function to calculate days until a date
function daysUntil(dateStr) {
    const target = new Date(dateStr);
    const today = new Date();
    const diff = target - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Helper function to get upcoming dates from a category
function getUpcomingDates(category, limit = 5) {
    if (!importantDates[category]) return [];

    const today = new Date();
    const upcoming = importantDates[category]
        .map(item => ({
            ...item,
            daysLeft: daysUntil(item.date)
        }))
        .filter(item => item.daysLeft >= 0)
        .sort((a, b) => a.daysLeft - b.daysLeft)
        .slice(0, limit);

    return upcoming;
}

// Helper function to add important dates as notes
function addImportantDatesToNotes() {
    const today = new Date();
    const addedCount = { hkHolidays: 0, ucatDates: 0, satDates: 0, ieltsDates: 0 };

    // Add HK holidays
    importantDates.hkHolidays.forEach(holiday => {
        const days = daysUntil(holiday.date);
        if (days >= 0 && days <= 60) { // Only add holidays within next 60 days
            const note = {
                id: Date.now() + Math.random(),
                content: `🏙️ HK Holiday: ${holiday.name} on ${formatDate(holiday.date)} (${days} days away)`,
                type: 'reminder',
                category: 'hkHoliday',
                date: holiday.date,
                createdAt: new Date().toISOString()
            };
            notes.unshift(note);
            addedCount.hkHolidays++;
        }
    });

    // Add UCAT dates
    importantDates.ucatDates.forEach(date => {
        const days = daysUntil(date.date);
        if (days >= 0 && days <= 180) { // Add UCAT dates within 6 months
            let content = `📚 UCAT: ${date.name} - ${formatDate(date.date)}`;
            if (date.time) content += ` at ${date.time}`;
            if (date.note) content += ` (${date.note})`;
            content += ` (${days} days away)`;

            const note = {
                id: Date.now() + Math.random(),
                content: content,
                type: 'reminder',
                category: 'ucat',
                date: date.date,
                createdAt: new Date().toISOString()
            };
            notes.unshift(note);
            addedCount.ucatDates++;
        }
    });

    // Add SAT dates
    importantDates.satDates.forEach(date => {
        const days = daysUntil(date.date);
        if (days >= 0 && days <= 180) { // Add SAT dates within 6 months
            let content = `✍️ SAT: ${date.name} - ${formatDate(date.date)}`;
            if (date.regularDeadline) {
                const deadlineDays = daysUntil(date.regularDeadline);
                content += `\nRegistration deadline: ${date.regularDeadline} (${deadlineDays} days away)`;
            }
            content += ` (${days} days away)`;

            const note = {
                id: Date.now() + Math.random(),
                content: content,
                type: 'reminder',
                category: 'sat',
                date: date.date,
                createdAt: new Date().toISOString()
            };
            notes.unshift(note);
            addedCount.satDates++;
        }
    });

    // Add IELTS dates
    importantDates.ieltsDates.forEach(date => {
        const days = daysUntil(date.date);
        if (days >= 0 && days <= 180) { // Add IELTS dates within 6 months
            let content = `🌍 IELTS: ${date.name} - ${formatDate(date.date)}`;
            if (date.note) content += ` (${date.note})`;
            content += ` (${days} days away)`;

            const note = {
                id: Date.now() + Math.random(),
                content: content,
                type: 'reminder',
                category: 'ielts',
                date: date.date,
                createdAt: new Date().toISOString()
            };
            notes.unshift(note);
            addedCount.ieltsDates++;
        }
    });

    saveNotes();
    return addedCount;
}
