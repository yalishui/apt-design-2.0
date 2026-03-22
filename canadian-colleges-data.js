// Canadian Universities Life Science/Undergraduate Application Data
// UBC, McGill, University of Toronto, University of Waterloo
// Data collected on March 21, 2026
// Focus: Undergraduate Life Science Programs (Bachelor's Degree)
// Target Admission: September 2027 Entry
// Major Application Period: Q3-Q4 2026
// Auto-update frequency: Weekly check recommended

const CanadianUniversities = {
    lastUpdated: '2026-03-21',
    updateFrequency: 'weekly',
    admissionYear: 2027,
    applicationPeriod: 'Q3-Q4 2026',
    programStart: 'September 2027',

    // 2027 Admission Timeline Overview
    admissionTimeline: {
        overview: 'Canadian university applications for September 2027 entry typically begin in Q3 2026 and extend through Q4 2026, with most deadlines between January-March 2027. This timeline focuses on the key periods for major Canadian universities.',
        phases: [
            {
                period: 'Q3 2026 (July-September)',
                phase: 'Preparation Phase',
                activities: [
                    'Research universities and programs',
                    'Review admission requirements',
                    'Prepare application materials',
                    'Take standardized tests (IELTS, UCAT, SAT)',
                    'Gather transcripts and references'
                ],
                importance: 'high'
            },
            {
                period: 'October 2026',
                phase: 'Application Opening',
                activities: [
                    'UBC application system opens (Oct 1)',
                    'McGill application system opens (Oct 1)',
                    'OUAC application system opens (Oct 1)',
                    'University of Waterloo applications open',
                    'Start submitting applications'
                ],
                importance: 'critical',
                note: 'Most applications open on October 1, 2026'
            },
            {
                period: 'November 2026 - December 2026',
                phase: 'Early Application & Scholarship Phase',
                activities: [
                    'Submit early applications (recommended for international students)',
                    'UBC International Scholars deadline (Nov 17)',
                    'University of Toronto early deadline (Nov 7)',
                    'Scholarship applications (various deadlines in Dec)',
                    'Submit supporting documents'
                ],
                importance: 'high',
                note: 'Early submission strongly recommended for international applicants'
            },
            {
                period: 'January 2027 - February 2027',
                phase: 'Main Application Phase',
                activities: [
                    'UBC Vancouver deadline (Jan 15) - CRITICAL',
                    'University of Toronto main deadline',
                    'McGill main deadline (Feb 1)',
                    'University of Waterloo main deadline (Feb 1)',
                    'Ensure all documents submitted'
                ],
                importance: 'critical',
                note: 'Most regular deadlines fall in January-February 2027'
            },
            {
                period: 'March 2027 - May 2027',
                phase: 'Review & Decision Phase',
                activities: [
                    'Applications reviewed by universities',
                    'Admission decisions released',
                    'Scholarship offers sent',
                    'Respond to offers by deadline'
                ],
                importance: 'high'
            },
            {
                period: 'June 2027 - August 2027',
                phase: 'Preparation Phase',
                activities: [
                    'Accept admission offers',
                    'Apply for student visa (if international)',
                    'Arrange housing',
                    'Complete enrollment',
                    'Prepare for September start'
                ],
                importance: 'medium'
            },
            {
                period: 'September 2027',
                phase: 'Program Start',
                activities: [
                    'Programs begin',
                    'Orientation activities',
                    'Classes start'
                ],
                importance: 'critical'
            }
        ]
    },
    dataSources: {
        ubc: {
            name: 'University of British Columbia',
            officialUrl: 'https://you.ubc.ca/applying-ubc/dates-deadlines/',
            checkUrl: 'https://you.ubc.ca/applying-ubc/dates-deadlines/',
            updateFrequency: 'weekly'
        },
        mcgill: {
            name: 'McGill University',
            officialUrl: 'https://www.mcgill.ca/undergraduate-admissions/apply',
            checkUrl: 'https://www.mcgill.ca/undergraduate-admissions/apply',
            updateFrequency: 'weekly'
        },
        uoft: {
            name: 'University of Toronto',
            officialUrl: 'https://future.utoronto.ca/deadlines',
            checkUrl: 'https://www.ouac.on.ca/guide/undergrad-dates/',
            updateFrequency: 'weekly'
        },
        waterloo: {
            name: 'University of Waterloo',
            officialUrl: 'https://uwaterloo.ca/undergraduate-admissions/admissions',
            checkUrl: 'https://uwaterloo.ca/undergraduate-admissions/important-dates',
            updateFrequency: 'weekly'
        }
    },
    universities: [
        {
            id: 'can-ubc',
            name: 'University of British Columbia (UBC)',
            location: 'Vancouver, British Columbia',
            type: 'Undergraduate Program',
            program: 'Bachelor of Science (BSc) - Life Sciences',
            targetEntry: 'September 2027',
            applicationCycle: '2026-2027',
            applicationMethod: 'Direct (UBC Portal)',

            // Website Links
            links: {
                official: 'https://you.ubc.ca/applying-ubc/',
                application: 'https://you.ubc.ca/applying-ubc/how-to-apply/',
                deadlines: 'https://you.ubc.ca/applying-ubc/dates-deadlines/',
                requirements: 'https://you.ubc.ca/applying-ubc/requirements/',
                science: 'https://science.ubc.ca/future-students/undergraduate/bachelor-science',
                tuition: 'https://you.ubc.ca/tuition-awards-and-fees/',
                housing: 'https://housing.ubc.ca/'
            },

            // Key Dates for September 2027 Entry
            keyDates: [
                {
                    event: 'Application System Opens',
                    date: '2026-10-01',
                    time: null,
                    timezone: 'Pacific Time (PT)',
                    importance: 'high',
                    notes: 'Online application system becomes available for September 2027 entry',
                    actionLink: 'https://you.ubc.ca/'
                },
                {
                    event: 'International Scholarship Deadline',
                    date: '2026-11-17',
                    time: '11:59 PM',
                    timezone: 'Pacific Time (PT)',
                    importance: 'high',
                    notes: 'UBC International Scholars Program application deadline - APPLY EARLY!'
                },
                {
                    event: 'Scholarship Application Deadline',
                    date: '2026-12-01',
                    time: '11:59 PM',
                    timezone: 'Pacific Time (PT)',
                    importance: 'high',
                    notes: 'Deadline for Presidential Scholars, Major Entrance Awards, etc.'
                },
                {
                    event: 'Main Application Deadline (Vancouver)',
                    date: '2027-01-15',
                    time: '11:59 PM',
                    timezone: 'Pacific Time (PT)',
                    importance: 'critical',
                    notes: 'Winter term application deadline - Vancouver campus - DO NOT MISS',
                    actionLink: 'https://you.ubc.ca/applying-ubc/how-to-apply/'
                },
                {
                    event: 'Main Application Deadline (Okanagan)',
                    date: '2027-03-31',
                    time: '11:59 PM',
                    timezone: 'Pacific Time (PT)',
                    importance: 'critical',
                    notes: 'Winter term application deadline - Okanagan campus (except Nursing)'
                },
                {
                    event: 'English Language Proficiency Deadline',
                    date: '2027-02-15',
                    time: '11:59 PM',
                    timezone: 'Pacific Time (PT)',
                    importance: 'critical',
                    notes: 'Submit IELTS, TOEFL, or other English test scores',
                    actionLink: 'https://you.ubc.ca/applying-ubc/requirements/english-language-competency/'
                },
                {
                    event: 'International Documents Deadline',
                    date: '2027-03-15',
                    time: '11:59 PM',
                    timezone: 'Pacific Time (PT)',
                    importance: 'critical',
                    notes: 'Submit required documents for international high school applicants',
                    actionLink: 'https://you.ubc.ca/applying-ubc/how-to-apply/after-you-apply/checklist/'
                },
                {
                    event: 'High School Course Completion',
                    date: '2027-06-30',
                    time: null,
                    timezone: 'Pacific Time (PT)',
                    importance: 'critical',
                    notes: 'Canadian high school students must complete all courses'
                },
                {
                    event: 'Accept Offer Deadline',
                    date: '2027-05-01',
                    time: '11:59 PM',
                    timezone: 'Pacific Time (PT)',
                    importance: 'critical',
                    notes: 'Accept admission offer and pay deposit (check offer letter for exact date)'
                },
                {
                    event: 'Housing Application Deadline',
                    date: '2027-05-01',
                    time: '11:59 PM',
                    timezone: 'Pacific Time (PT)',
                    importance: 'high',
                    notes: 'First-year housing guarantee application deadline',
                    actionLink: 'https://housing.ubc.ca/first-year/applying/'
                },
                {
                    event: 'Program Start',
                    date: '2027-09-01',
                    time: null,
                    timezone: 'Pacific Time (PT)',
                    importance: 'high',
                    notes: 'Fall semester begins - early September 2027'
                }
            ],

            // Application Steps
            applicationSteps: [
                {
                    step: 1,
                    title: 'Research Programs & Prepare',
                    timeline: 'July - September 2026',
                    details: [
                        'Explore UBC Science programs',
                        'Review admission requirements',
                        'Prepare personal profile',
                        'Gather transcripts'
                    ],
                    actionItems: [
                        'Browse UBC Science programs',
                        'Check admission requirements for your education background',
                        'Start drafting personal profile essays',
                        'Order transcripts from high school'
                    ]
                },
                {
                    step: 2,
                    title: 'Submit Application',
                    timeline: 'October 1, 2026 - January 15, 2027',
                    details: [
                        'Create UBC applicant account',
                        'Complete online application',
                        'Pay application fee',
                        'Upload personal profile',
                        'Select program choices'
                    ],
                    actionItems: [
                        'Submit application by January 15, 2027 11:59 PM PT',
                        'Pay application fee (~$120 CAD)',
                        'Complete personal profile',
                        'Select Science program and specializations',
                        'Submit English test scores (if required)'
                    ]
                },
                {
                    step: 3,
                    title: 'Submit Supporting Documents',
                    timeline: 'By February 15, 2027',
                    details: [
                        'Submit English language test scores',
                        'Submit international transcripts',
                        'Verify document receipt in portal'
                    ],
                    actionItems: [
                        'Submit IELTS/TOEFL scores by February 15, 2027',
                        'Submit international transcripts by March 15, 2027',
                        'Check document status in Applicant Service Centre',
                        'Ensure all requirements are complete'
                    ]
                },
                {
                    step: 4,
                    title: 'Wait for Application Review',
                    timeline: 'January - April 2027',
                    details: [
                        'Application materials reviewed',
                        'Academic assessment',
                        'Personal profile evaluation'
                    ],
                    actionItems: [
                        'Check application status regularly',
                        'Monitor Applicant Service Centre',
                        'Prepare for potential admission offers'
                    ]
                },
                {
                    step: 5,
                    title: 'Complete High School Requirements',
                    timeline: 'By June 30, 2027',
                    details: [
                        'Complete all required courses',
                        'Maintain strong grades',
                        'Submit final transcripts'
                    ],
                    actionItems: [
                        'Finish all high school coursework',
                        'Maintain competitive grades',
                        'Submit final transcripts',
                        'Meet conditional offer requirements'
                    ]
                },
                {
                    step: 6,
                    title: 'Receive & Accept Admission Decision',
                    timeline: 'April - May 2027',
                    details: [
                        'Receive admission decision',
                        'Review offer details',
                        'Accept offer by deadline',
                        'Apply for housing'
                    ],
                    actionItems: [
                        'Monitor portal for admission decision',
                        'Review offer letter and conditions',
                        'Accept offer and pay deposit by May 1, 2027',
                        'Apply for first-year housing'
                    ]
                },
                {
                    step: 7,
                    title: 'Prepare for Enrollment',
                    timeline: 'June - August 2027',
                    details: [
                        'Register for courses',
                        'Complete orientation',
                        'Pay tuition'
                    ],
                    actionItems: [
                        'Register for first-year courses (June 2027)',
                        'Complete orientation program',
                        'Pay first installment of tuition (September 2027)',
                        'Prepare for move-in'
                    ]
                }
            ],

            // Requirements
            requirements: {
                academic: [
                    'High school graduation',
                    'GPA: Competitive (typically 85%+ for Science)',
                    'English 12 or equivalent',
                    'Pre-calculus 12 or equivalent',
                    'Two of: Biology 12, Chemistry 12, Physics 12 (varies by specialization)'
                ],
                tests: [
                    'English proficiency: IELTS 7.0, TOEFL 100 (if international applicant)',
                    'No MCAT required for undergraduate programs'
                ],
                documents: [
                    'Official high school transcripts',
                    'Personal profile',
                    'English language test scores (if applicable)'
                ],
                other: [
                    'Application fee: ~$120 CAD',
                    'No reference letters required for Science (unless applying for scholarships)'
                ]
            },

            // Contact Information
            contact: {
                admissionsOffice: 'Undergraduate Admissions - Science',
                email: 'science.undergraduate@ubc.ca',
                phone: '+1-604-822-4112',
                address: '6350 Stores Road, Vancouver, BC V6T 1Z4'
            },

            // Notes
            notes: [
                'Apply directly through UBC application portal',
                'Personal profile is required for all applicants',
                'Deadlines are strictly enforced',
                'Housing guarantee if apply by May 1',
                'Science has many specializations: Biology, Chemistry, Physics, etc.',
                'Review UBC Applicant Guide for detailed requirements',
                'Different campus options: Vancouver (main) and Okanagan'
            ]
        },

        {
            id: 'can-mcgill',
            name: 'McGill University',
            location: 'Montreal, Quebec',
            type: 'Undergraduate Program',
            program: 'Bachelor of Science (BSc) - Life Sciences',
            targetEntry: 'September 2027',
            applicationCycle: '2026-2027',
            applicationMethod: 'Direct (McGill Portal)',

            // Website Links
            links: {
                official: 'https://www.mcgill.ca/undergraduate-admissions/',
                application: 'https://www.mcgill.ca/undergraduate-admissions/apply',
                deadlines: 'https://www.mcgill.ca/undergraduate-admissions/apply/deadlines',
                requirements: 'https://www.mcgill.ca/undergraduate-admissions/apply/requirements',
                lifeSciences: 'https://www.mcgill.ca/undergraduate-admissions/program/life-sciences',
                tuition: 'https://www.mcgill.ca/student-accounts/tuition-fee-schedules',
                housing: 'https://www.mcgill.ca/residences/'
            },

            // Key Dates for September 2027 Entry
            keyDates: [
                {
                    event: 'Application System Opens',
                    date: '2026-10-01',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Online application system becomes available for September 2027 entry',
                    actionLink: 'https://www.mcgill.ca/undergraduate-admissions/apply'
                },
                {
                    event: 'Early Application Deadline (International)',
                    date: '2027-01-15',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Recommended deadline for international applicants - APPLY EARLY!',
                    actionLink: 'https://www.mcgill.ca/undergraduate-admissions/apply'
                },
                {
                    event: 'Main Application Deadline (Most Programs)',
                    date: '2027-02-01',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Application deadline for most undergraduate programs',
                    actionLink: 'https://www.mcgill.ca/undergraduate-admissions/apply'
                },
                {
                    event: 'Scholarship Application Deadline',
                    date: '2027-02-15',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Major entrance scholarship application deadline'
                },
                {
                    event: 'Supporting Documents Deadline',
                    date: '2027-03-15',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Submit all required documents (transcripts, test scores, etc.)',
                    actionLink: 'https://www.mcgill.ca/undergraduate-admissions/apply/how-apply-mcgill/minerva'
                },
                {
                    event: 'Admission Decisions Begin',
                    date: '2027-03-01',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Early admission decisions start rolling out'
                },
                {
                    event: 'Final Admission Decisions',
                    date: '2027-05-15',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Most admission decisions released'
                },
                {
                    event: 'Accept Offer Deadline',
                    date: '2027-06-01',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Accept admission offer by this date'
                },
                {
                    event: 'Program Start',
                    date: '2027-09-01',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Fall semester begins - September 2027'
                }
            ],

            // Application Steps
            applicationSteps: [
                {
                    step: 1,
                    title: 'Determine Eligibility & Prepare',
                    timeline: 'July - September 2026',
                    details: [
                        'Identify your education background',
                        'Review program requirements',
                        'Check prerequisite courses',
                        'Prepare application materials'
                    ],
                    actionItems: [
                        'Determine your applicant category (Canadian, US, International, etc.)',
                        'Review Life Sciences program requirements',
                        'Check prerequisite courses for your education system',
                        'Start gathering transcripts'
                    ]
                },
                {
                    step: 2,
                    title: 'Submit Application',
                    timeline: 'October 1, 2026 - February 1, 2027',
                    details: [
                        'Create McGill applicant account',
                        'Complete online application',
                        'Pay application fee',
                        'Select program choices'
                    ],
                    actionItems: [
                        'Submit application by February 1, 2027 11:59 PM ET',
                        'Pay application fee ($136.08 CAD for first program)',
                        'Select Life Sciences program',
                        'Submit second program choice for free (if applicable)'
                    ]
                },
                {
                    step: 3,
                    title: 'Submit Supporting Documents',
                    timeline: 'By March 15, 2027',
                    details: [
                        'Submit official transcripts',
                        'Submit English test scores',
                        'Submit any required supplementary materials'
                    ],
                    actionItems: [
                        'Submit official high school transcripts',
                        'Submit IELTS/TOEFL scores (if international)',
                        'Submit any program-specific requirements',
                        'Check Minerva portal for document receipt'
                    ]
                },
                {
                    step: 4,
                    title: 'Apply for Scholarships (Optional)',
                    timeline: 'By February 15, 2027',
                    details: [
                        'Submit scholarship application',
                        'Submit required essays/letters'
                    ],
                    actionItems: [
                        'Apply for major entrance scholarships by February 15, 2027',
                        'Submit scholarship essays',
                        'Request reference letters (if required)'
                    ]
                },
                {
                    step: 5,
                    title: 'Application Review',
                    timeline: 'February - May 2027',
                    details: [
                        'Applications reviewed',
                        'Academic assessment',
                        'Admission decisions made'
                    ],
                    actionItems: [
                        'Monitor Minerva portal for updates',
                        'Check application status regularly',
                        'Prepare for admission decision'
                    ]
                },
                {
                    step: 6,
                    title: 'Receive & Accept Admission Decision',
                    timeline: 'March - June 2027',
                    details: [
                        'Receive admission offer',
                        'Review offer details',
                        'Accept offer by deadline',
                        'Apply for housing'
                    ],
                    actionItems: [
                        'Monitor Minerva for admission decision',
                        'Review offer letter and conditions',
                        'Accept offer by June 1, 2027 deadline',
                        'Apply for on-campus housing'
                    ]
                },
                {
                    step: 7,
                    title: 'Prepare for Enrollment',
                    timeline: 'June - August 2027',
                    details: [
                        'Register for courses',
                        'Complete orientation',
                        'Pay tuition'
                    ],
                    actionItems: [
                        'Register for courses (opens summer 2027)',
                        'Complete orientation program',
                        'Pay tuition deposit',
                        'Prepare for move-in'
                    ]
                }
            ],

            // Requirements
            requirements: {
                academic: [
                    'High school graduation',
                    'GPA: Competitive (varies by education system)',
                    'English: Prerequisite for most programs',
                    'Math: Pre-calculus or calculus required',
                    'Sciences: Biology and Chemistry prerequisites for Life Sciences',
                    'Minimum 5 academic courses in final year'
                ],
                tests: [
                    'English proficiency: IELTS 7.0, TOEFL 100 (if international)',
                    'No MCAT required for undergraduate programs'
                ],
                documents: [
                    'Official high school transcripts',
                    'English language test scores (if applicable)',
                    'Supplementary materials for certain programs'
                ],
                other: [
                    'Application fee: $136.08 CAD (first program)',
                    'Free second program application',
                    'No reference letters for most programs (unless applying for scholarships)'
                ]
            },

            // Contact Information
            contact: {
                admissionsOffice: 'Undergraduate Admissions',
                email: 'admissions@mcgill.ca',
                phone: '+1-514-398-4455',
                address: 'James Administration Building, 845 Sherbrooke Street West, Montreal, QC H3A 0G4'
            },

            // Notes
            notes: [
                'Apply directly through McGill Minerva portal',
                'Application deadline varies by education background',
                'International students should apply early (by January 15)',
                'Second program application is free (same term, same level)',
                'Some programs require supplementary applications',
                'Check specific requirements for your education system',
                'English proficiency required for non-anglophone applicants'
            ]
        },

        {
            id: 'can-uoft',
            name: 'University of Toronto (UofT)',
            location: 'Toronto, Ontario',
            type: 'Undergraduate Program',
            program: 'Bachelor of Science (HBSc) - Life Sciences',
            targetEntry: 'September 2027',
            applicationCycle: '2026-2027',
            applicationMethod: 'OUAC (Ontario Universities\' Application Centre)',

            // Website Links
            links: {
                official: 'https://future.utoronto.ca/',
                application: 'https://www.ouac.on.ca/',
                deadlines: 'https://future.utoronto.ca/deadlines',
                requirements: 'https://future.utoronto.ca/apply/admission-requirements',
                lifeSciences: 'https://www.artsci.utoronto.ca/future/ready-apply/admission-categories/life-sciences',
                tuition: 'https://future.utoronto.ca/finances/tuition-fees',
                housing: 'https://www.studentlife.utoronto.ca/housing',
                ouac: 'https://www.ouac.on.ca/guide/undergrad-dates/'
            },

            // Key Dates for September 2027 Entry (via OUAC)
            keyDates: [
                {
                    event: 'OUAC Application Opens',
                    date: '2026-10-01',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'OUAC 101 and 105 applications become available for September 2027 entry',
                    actionLink: 'https://www.ouac.on.ca/'
                },
                {
                    event: 'Early Application Deadline',
                    date: '2026-11-07',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Recommended deadline for early admission consideration - APPLY EARLY!',
                    actionLink: 'https://www.ouac.on.ca/'
                },
                {
                    event: 'Early Supporting Documents Deadline',
                    date: '2026-12-02',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Submit supporting documents for early consideration',
                    actionLink: 'https://future.utoronto.ca/apply'
                },
                {
                    event: 'OUAC 101 Application Deadline',
                    date: '2027-01-15',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Deadline for Ontario high school students (OUAC 101)',
                    actionLink: 'https://www.ouac.on.ca/guide/undergrad-dates/'
                },
                {
                    event: 'Life Sciences Application Deadline (St. George)',
                    date: '2027-02-02',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Life Sciences admission category deadline - St. George campus',
                    actionLink: 'https://www.artsci.utoronto.ca/future/ready-apply/admission-categories/life-sciences'
                },
                {
                    event: 'Life Sciences Application Deadline (U of T Scarborough)',
                    date: '2027-03-30',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Life Sciences deadline - Scarborough campus'
                },
                {
                    event: 'First Round Offers Begin',
                    date: '2027-03-01',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Early admission offers begin to be released'
                },
                {
                    event: 'Admission Decisions Released',
                    date: '2027-05-28',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'OUAC deadline for admission decisions'
                },
                {
                    event: 'Earliest Response Deadline',
                    date: '2027-06-01',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Universities cannot require acceptance before this date'
                },
                {
                    event: 'Program Start',
                    date: '2027-09-01',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Fall semester begins - September 2027'
                }
            ],

            // Application Steps
            applicationSteps: [
                {
                    step: 1,
                    title: 'Research Programs & Create OUAC Account',
                    timeline: 'July - September 2026',
                    details: [
                        'Explore UofT Life Sciences programs',
                        'Review admission requirements',
                        'Create OUAC account',
                        'Start preparing application materials'
                    ],
                    actionItems: [
                        'Research Life Sciences admission category',
                        'Review OUAC application guide',
                        'Create OUAC 101 or 105 account',
                        'Gather high school transcripts'
                    ]
                },
                {
                    step: 2,
                    title: 'Submit OUAC Application',
                    timeline: 'October 1, 2026 - January 15, 2027',
                    details: [
                        'Complete OUAC application',
                        'Select University of Toronto',
                        'Choose Life Sciences admission category (TLG)',
                        'Pay application fee'
                    ],
                    actionItems: [
                        'Submit application by January 15, 2027 deadline',
                        'Select University of Toronto - St. George campus',
                        'Choose Life Sciences admission category (OUAC code: TLG)',
                        'Pay OUAC application fee (~$156 CAD)',
                        'Submit early by November 7, 2026 for consideration'
                    ]
                },
                {
                    step: 3,
                    title: 'Submit Supporting Documents',
                    timeline: 'By February 2027',
                    details: [
                        'Submit transcripts',
                        'Submit English test scores (if required)',
                        'Verify document receipt'
                    ],
                    actionItems: [
                        'Ensure high school submits transcripts to OUAC',
                        'Submit English proficiency test (if required)',
                        'Check Join U of T portal for document tracking',
                        'Submit documents by program-specific deadlines'
                    ]
                },
                {
                    step: 4,
                    title: 'Application Review',
                    timeline: 'January - May 2027',
                    details: [
                        'Applications reviewed',
                        'Academic assessment',
                        'Admission decisions made'
                    ],
                    actionItems: [
                        'Monitor Join U of T portal',
                        'Check application status regularly',
                        'Prepare for admission decisions'
                    ]
                },
                {
                    step: 5,
                    title: 'Receive & Accept Admission Decision',
                    timeline: 'March - June 2027',
                    details: [
                        'Receive admission offer',
                        'Review offer details',
                        'Accept offer by deadline',
                        'Apply for residence'
                    ],
                    actionItems: [
                        'Monitor Join U of T for admission decision',
                        'Review offer letter and conditions',
                        'Accept offer through OUAC by deadline',
                        'Apply for on-campus residence'
                    ]
                },
                {
                    step: 6,
                    title: 'Complete First Year & Choose Program',
                    timeline: 'September 2027 - May 2028',
                    details: [
                        'Complete first-year Life Sciences courses',
                        'Explore different subjects',
                        'Apply to specific program in second year'
                    ],
                    actionItems: [
                        'Complete first-year requirements',
                        'Maintain strong GPA for program selection',
                        'Explore Biology, Chemistry, Psychology, etc.',
                        'Apply to specific program in second year (POSt)'
                    ]
                }
            ],

            // Requirements
            requirements: {
                academic: [
                    'High school graduation',
                    'GPA: Competitive (mid to high 80s)',
                    'English (ENG4U or equivalent)',
                    'Calculus and Vectors (MCV4U)',
                    'Two of: Biology (SBI4U), Chemistry (SCH4U), Physics (SPH4U)',
                    'Prerequisites vary by specific second-year program'
                ],
                tests: [
                    'English proficiency: IELTS 6.5, TOEFL 100 (if international)',
                    'No MCAT required for undergraduate programs'
                ],
                documents: [
                    'High school transcripts (submitted to OUAC)',
                    'English language test scores (if required)',
                    'No supplementary application for Life Sciences category'
                ],
                other: [
                    'OUAC application fee: ~$156 CAD',
                    'Apply through OUAC 101 (Ontario) or 105 (International/Other)',
                    'Life Sciences admission category code: TLG',
                    'No reference letters required for Life Sciences'
                ]
            },

            // Contact Information
            contact: {
                admissionsOffice: 'Enrolment Services - Arts & Science',
                email: 'ask.utoronto@utoronto.ca',
                phone: '+1-416-978-2190',
                address: '172 St. George Street, Toronto, ON M5R 0A3',
                ouacContact: 'OUAC: 519-823-1940'
            },

            // Notes
            notes: [
                'Apply through OUAC (centralized Ontario system)',
                'Life Sciences is an admission category, not a specific program',
                'First year is exploratory - choose specific program in second year',
                'Many second-year programs require specific high school prerequisites',
                'Psychology requires Biology; Biochemistry requires Bio and Chemistry',
                'Review program-specific prerequisites before choosing courses',
                'Check Join U of T portal for application status',
                'Apply early (November 7) for better consideration',
                'Three campuses: St. George (downtown), Scarborough, Mississauga'
            ]
        },
        {
            id: 'can-waterloo',
            name: 'University of Waterloo',
            location: 'Waterloo, Ontario',
            type: 'Undergraduate Program',
            program: 'Bachelor of Science (BSc) - Life Sciences',
            targetEntry: 'September 2027',
            applicationCycle: '2026-2027',
            applicationMethod: 'OUAC (101/105)',

            // Website Links
            links: {
                official: 'https://uwaterloo.ca/undergraduate-admissions/',
                application: 'https://uwaterloo.ca/undergraduate-admissions/apply',
                deadlines: 'https://uwaterloo.ca/undergraduate-admissions/important-dates',
                requirements: 'https://uwaterloo.ca/undergraduate-admissions/admission-requirements',
                science: 'https://uwaterloo.ca/science/life-sciences',
                tuition: 'https://uwaterloo.ca/finance/tuition',
                housing: 'https://uwaterloo.ca/housing/'
            },

            // Key Dates for September 2027 Entry
            keyDates: [
                {
                    event: 'Application System Opens',
                    date: '2026-10-01',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'OUAC application system opens for September 2027 admission',
                    actionLink: 'https://www.ouac.on.ca/'
                },
                {
                    event: 'Scholarship Application Deadline',
                    date: '2026-12-15',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'President\'s Scholarship and other entrance scholarship applications - APPLY EARLY!',
                    actionLink: 'https://uwaterloo.ca/undergraduate-admissions/scholarships-awards'
                },
                {
                    event: 'Main Application Deadline',
                    date: '2027-02-01',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Recommended deadline for best consideration - Life Sciences',
                    actionLink: 'https://uwaterloo.ca/undergraduate-admissions/apply'
                },
                {
                    event: 'Application Deadline (Late)',
                    date: '2027-04-01',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Late application deadline - space permitting',
                    actionLink: 'https://uwaterloo.ca/undergraduate-admissions/apply'
                },
                {
                    event: 'English Language Proficiency Deadline',
                    date: '2027-02-15',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Submit IELTS, TOEFL, or other English test scores',
                    actionLink: 'https://uwaterloo.ca/undergraduate-admissions/admission-requirements/english-language-requirements'
                },
                {
                    event: 'Document Submission Deadline',
                    date: '2027-04-15',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Submit all required transcripts and documents',
                    actionLink: 'https://uwaterloo.ca/undergraduate-admissions/apply/submit-documents'
                },
                {
                    event: 'Admission Offers Begin',
                    date: '2027-02-15',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'normal',
                    notes: 'Admission decisions begin to be released'
                },
                {
                    event: 'Accept Offer Deadline',
                    date: '2027-06-01',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'critical',
                    notes: 'Accept admission offer by this date (check offer letter for exact deadline)',
                    actionLink: 'https://uwaterloo.ca/undergraduate-admissions/accept-offer'
                },
                {
                    event: 'Housing Application Deadline',
                    date: '2027-06-15',
                    time: '11:59 PM',
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'First-year residence application deadline',
                    actionLink: 'https://uwaterloo.ca/housing/'
                },
                {
                    event: 'Program Start',
                    date: '2027-09-01',
                    time: null,
                    timezone: 'Eastern Time (ET)',
                    importance: 'high',
                    notes: 'Fall semester begins - September 2027'
                }
            ],

            // Application Steps
            applicationSteps: [
                {
                    step: 1,
                    title: 'Research Programs & Prepare',
                    timeline: 'July - September 2026',
                    details: [
                        'Explore Waterloo Life Sciences programs',
                        'Review admission requirements',
                        'Prepare for supplementary application',
                        'Gather transcripts and test scores'
                    ],
                    actionItems: [
                        'Browse Life Sciences program options',
                        'Check admission requirements for your education background',
                        'Prepare for Admission Information Form (AIF)',
                        'Order transcripts from high school'
                    ]
                },
                {
                    step: 2,
                    title: 'Submit Application',
                    timeline: 'October 1, 2026 - February 1, 2027',
                    details: [
                        'Create OUAC account',
                        'Complete online application',
                        'Pay application fee',
                        'Select Waterloo and program choice'
                    ],
                    actionItems: [
                        'Submit OUAC application by February 1, 2027',
                        'Pay application fee (~$156 CAD)',
                        'Select Life Sciences program (program code)',
                        'Submit English test scores (if required)',
                        'Complete Admission Information Form (AIF)'
                    ]
                },
                {
                    step: 3,
                    title: 'Submit Supporting Documents',
                    timeline: 'By April 15, 2027',
                    details: [
                        'Submit English language test scores',
                        'Submit transcripts',
                        'Complete Admission Information Form',
                        'Verify document receipt'
                    ],
                    actionItems: [
                        'Submit IELTS/TOEFL scores by February 15, 2027',
                        'Submit transcripts by April 15, 2027',
                        'Complete AIF with details about activities and achievements',
                        'Check document status in Quest portal'
                    ]
                },
                {
                    step: 4,
                    title: 'Wait for Decision',
                    timeline: 'February - May 2027',
                    details: [
                        'Admission decisions released from mid-February',
                        'Check Quest portal for updates',
                        'Receive admission offer or letter of refusal'
                    ],
                    actionItems: [
                        'Monitor Quest portal regularly',
                        'Read all admission communications carefully',
                        'Prepare for possible interview or additional requirements'
                    ]
                },
                {
                    step: 5,
                    title: 'Accept Offer',
                    timeline: 'By June 1, 2027',
                    details: [
                        'Review admission offer',
                        'Accept offer in OUAC system',
                        'Pay deposit if required',
                        'Accept scholarship if offered'
                    ],
                    actionItems: [
                        'Accept offer by deadline (check offer letter)',
                        'Decline other offers',
                        'Pay acceptance deposit (if required)',
                        'Accept scholarship offer (if applicable)'
                    ]
                },
                {
                    step: 6,
                    title: 'Apply for Housing',
                    timeline: 'By June 15, 2027',
                    details: [
                        'Complete residence application',
                        'Select preferences',
                        'Pay housing deposit',
                        'Review housing options'
                    ],
                    actionItems: [
                        'Apply for residence by June 15, 2027',
                        'Complete housing preference questionnaire',
                        'Pay housing deposit (~$600 CAD)',
                        'Research residence options and communities'
                    ]
                },
                {
                    step: 7,
                    title: 'Prepare for Enrollment',
                    timeline: 'June - August 2027',
                    details: [
                        'Submit final transcripts',
                        'Complete enrollment steps',
                        'Register for courses',
                        'Attend orientation'
                    ],
                    actionItems: [
                        'Submit final high school transcripts by August 2027',
                        'Complete Quest enrollment checklist',
                        'Register for Fall courses',
                        'Sign up for orientation and Welcome Week'
                    ]
                },
                {
                    step: 8,
                    title: 'Start Program',
                    timeline: 'September 2027',
                    details: [
                        'Move to Waterloo',
                        'Attend orientation',
                        'Begin classes',
                        'Get student ID card'
                    ],
                    actionItems: [
                        'Move into residence or off-campus housing',
                        'Attend orientation events',
                        'Pick up student ID card (WatCard)',
                        'Start classes on September 1'
                    ]
                }
            ],

            // Requirements
            requirements: {
                academic: [
                    'High school diploma or equivalent',
                    'English (Grade 12 or equivalent): 70% minimum',
                    'Advanced Functions (MHF4U): 80% minimum recommended',
                    'Biology (SBI4U): 80% minimum recommended',
                    'Chemistry (SCH4U): 80% minimum recommended',
                    'One additional Grade 12 U/M course',
                    'Competitive admission range: mid-80s to low-90s'
                ],
                tests: [
                    'English proficiency: IELTS 7.0 (6.5 writing/speaking), TOEFL 90 (25 writing/speaking) if international',
                    'No MCAT or additional standardized tests required'
                ],
                documents: [
                    'High school transcripts (submitted to OUAC)',
                    'English language test scores (if required)',
                    'Admission Information Form (AIF) - required',
                    'Course descriptions for international courses (if applicable)'
                ],
                other: [
                    'OUAC application fee: ~$156 CAD',
                    'Apply through OUAC 101 (Ontario) or 105 (International/Other)',
                    'Complete Admission Information Form (AIF)',
                    'Supplementary evaluation of extracurricular activities',
                    'Waterloo places high value on AIF and overall profile'
                ]
            },

            // Contact Information
            contact: {
                admissionsOffice: 'Undergraduate Admissions',
                email: 'uwaterloo.ca/undergraduate-admissions/contact',
                phone: '+1-519-888-4567 ext. 3614',
                address: '200 University Avenue West, Waterloo, ON N2L 3G1',
                ouacContact: 'OUAC: 519-823-1940'
            },

            // Notes
            notes: [
                'Apply through OUAC (centralized Ontario system)',
                'Life Sciences is a competitive program',
                'Complete Admission Information Form (AIF) - very important for admission',
                'Waterloo places high value on extracurricular activities and leadership',
                'Strong math and science background is essential',
                'Co-op program available (apply through Life Sciences, indicate interest)',
                'Admission is competitive: mid-80s to low-90s range',
                'Quest portal for application status and documents',
                'Apply by February 1 for best consideration',
                'Housing guarantee for first-year students who apply by deadline'
            ]
        }
    ]
};

// Export for use in application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CanadianUniversities;
}
