// IB Diploma Programme - May 2027 Final Examination Schedule
// Source: Official IB Exam Schedule (Final Version, All Zones A/B/C)
// Hong Kong is in Zone A (UTC+8): Morning start 10:00, Afternoon start 14:00

const IBExamSchedule = {
    title: "IB May 2027 Final Exams",
    subtitle: "IB Diploma Programme & IB Career-related Programme",
    zone: "Zone A (Hong Kong)",
    zoneNote: "Morning: 10:00 | Afternoon: 14:00",
    source: "Official IB Assessment Division",

    weeks: [
        {
            label: "Pre-Exams",
            startDate: "2027-04-23",
            endDate: "2027-04-23",
            days: [
                {
                    date: "2027-04-23",
                    dayName: "Friday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "School-based Syllabus", level: "SL", paper: "Paper 1", duration: "1h 30m" },
                                { subject: "Language & Culture (Non-English/French/Spanish)", level: "SL", paper: "Paper 1", duration: "1h 30m" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "Week 1",
            startDate: "2027-04-26",
            endDate: "2027-05-02",
            days: [
                {
                    date: "2027-04-26",
                    dayName: "Monday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Language A Literature", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "Language A Literature", level: "SL", paper: "Paper 1", duration: "1h 15m" },
                                { subject: "Language A Language & Literature", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "Language A Language & Literature", level: "SL", paper: "Paper 1", duration: "1h 15m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Language & Culture (Non-English/French/Spanish)", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-04-27",
                    dayName: "Tuesday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Language A Literature", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "Language A Language & Literature", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Business Management", level: "HL/SL", paper: "Paper 1", duration: "1h 30m" },
                                { subject: "Business Management", level: "HL", paper: "Paper 3", duration: "1h 15m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-04-28",
                    dayName: "Wednesday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Business Management", level: "HL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "Business Management", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Physics", level: "HL", paper: "Paper 1 (1a & 1b)", duration: "2h" },
                                { subject: "Physics", level: "SL", paper: "Paper 1 (1a & 1b)", duration: "1h 30m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-04-29",
                    dayName: "Thursday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Physics", level: "HL", paper: "Paper 2", duration: "2h 30m" },
                                { subject: "Physics", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Sports, Exercise & Health Science", level: "HL", paper: "Paper 1 (1a & 1b)", duration: "1h 45m" },
                                { subject: "Sports, Exercise & Health Science", level: "SL", paper: "Paper 1 (1a & 1b)", duration: "1h 30m" },
                                { subject: "Sports, Exercise & Health Science", level: "HL", paper: "Paper 2", duration: "2h 30m" },
                                { subject: "Sports, Exercise & Health Science", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-04-30",
                    dayName: "Friday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Psychology", level: "HL/SL", paper: "Paper 1", duration: "1h 30m" },
                                { subject: "Psychology", level: "HL/SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Psychology", level: "HL", paper: "Paper 3", duration: "1h 45m" },
                                { subject: "Computer Science", level: "HL", paper: "Paper 1", duration: "2h" },
                                { subject: "Computer Science", level: "SL", paper: "Paper 1", duration: "1h 15m" },
                                { subject: "Environmental Systems & Societies", level: "HL", paper: "Paper 1", duration: "2h" },
                                { subject: "Environmental Systems & Societies", level: "SL", paper: "Paper 1", duration: "1h" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-02",
                    dayName: "Saturday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Computer Science", level: "HL", paper: "Paper 2", duration: "2h" },
                                { subject: "Computer Science", level: "SL", paper: "Paper 2", duration: "1h 15m" },
                                { subject: "History", level: "HL/SL", paper: "Paper 1", duration: "1h" },
                                { subject: "History", level: "HL/SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Environmental Systems & Societies", level: "HL", paper: "Paper 2", duration: "2h 30m" },
                                { subject: "Environmental Systems & Societies", level: "SL", paper: "Paper 2", duration: "2h" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "Week 2",
            startDate: "2027-05-03",
            endDate: "2027-05-08",
            days: [
                {
                    date: "2027-05-03",
                    dayName: "Monday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Language B (Non-English/French/Spanish)", level: "HL", paper: "Papers 1 & 2 (Reading)", duration: "1h 30m" },
                                { subject: "Language B (Non-English/French/Spanish)", level: "SL", paper: "Papers 1 & 2 (Reading)", duration: "1h" },
                                { subject: "Language ab initio (Non-English/French/Spanish)", level: "SL", paper: "Papers 1 & 2 (Reading)", duration: "1h 15m" },
                                { subject: "Latin", level: "HL", paper: "Paper 1", duration: "2h" },
                                { subject: "Latin", level: "SL", paper: "Paper 1", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Language B (Non-English/French/Spanish)", level: "HL", paper: "Paper 2 (Listening)", duration: "1h" },
                                { subject: "Language B (Non-English/French/Spanish)", level: "SL", paper: "Paper 2 (Listening)", duration: "45m" },
                                { subject: "Language ab initio (Non-English/French/Spanish)", level: "SL", paper: "Paper 2 (Listening)", duration: "45m" },
                                { subject: "Latin", level: "HL", paper: "Paper 2", duration: "1h 30m" },
                                { subject: "Latin", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-04",
                    dayName: "Tuesday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Chemistry", level: "HL", paper: "Paper 1 (1a & 1b)", duration: "2h" },
                                { subject: "Chemistry", level: "SL", paper: "Paper 1 (1a & 1b)", duration: "1h 30m" },
                                { subject: "Design Technology", level: "HL", paper: "Paper 1", duration: "1h 30m" },
                                { subject: "Design Technology", level: "SL", paper: "Paper 1", duration: "1h" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Chemistry", level: "HL", paper: "Paper 2", duration: "2h 30m" },
                                { subject: "Chemistry", level: "SL", paper: "Paper 2", duration: "1h 30m" },
                                { subject: "Design Technology", level: "HL", paper: "Paper 2", duration: "2h 30m" },
                                { subject: "Design Technology", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-05",
                    dayName: "Wednesday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "English A Literature", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "English A Literature", level: "SL", paper: "Paper 1", duration: "1h 15m" },
                                { subject: "English A Language & Literature", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "English A Language & Literature", level: "SL", paper: "Paper 1", duration: "1h 15m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "English A Literature", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "English A Language & Literature", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "English B", level: "HL", paper: "Papers 1 & 2 (Reading)", duration: "1h 30m" },
                                { subject: "English B", level: "SL", paper: "Papers 1 & 2 (Reading)", duration: "1h 15m" },
                                { subject: "English ab initio", level: "SL", paper: "Papers 1 & 2 (Reading)", duration: "1h" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-06",
                    dayName: "Thursday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Geography", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "Geography", level: "SL", paper: "Paper 1", duration: "1h 30m" },
                                { subject: "Philosophy", level: "HL", paper: "Paper 1", duration: "2h 30m" },
                                { subject: "Philosophy", level: "SL", paper: "Paper 1", duration: "1h 45m" },
                                { subject: "Social & Cultural Anthropology", level: "HL", paper: "Paper 1", duration: "2h" },
                                { subject: "Social & Cultural Anthropology", level: "SL", paper: "Paper 1", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "English B", level: "HL", paper: "Paper 2 (Listening)", duration: "1h" },
                                { subject: "English B", level: "SL", paper: "Paper 2 (Listening)", duration: "45m" },
                                { subject: "English ab initio", level: "SL", paper: "Paper 2 (Listening)", duration: "45m" },
                                { subject: "Literature & Performance", level: "SL", paper: "Paper 1", duration: "1h 45m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-07",
                    dayName: "Friday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Geography", level: "HL/SL", paper: "Paper 2", duration: "1h 15m" },
                                { subject: "Geography", level: "HL", paper: "Paper 3", duration: "1h" },
                                { subject: "Philosophy", level: "HL/SL", paper: "Paper 2", duration: "1h" },
                                { subject: "Philosophy", level: "HL", paper: "Paper 3", duration: "1h 15m" },
                                { subject: "Social & Cultural Anthropology", level: "HL", paper: "Paper 2", duration: "2h 30m" },
                                { subject: "Social & Cultural Anthropology", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "Week 3",
            startDate: "2027-05-10",
            endDate: "2027-05-14",
            days: [
                {
                    date: "2027-05-10",
                    dayName: "Monday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Biology", level: "HL", paper: "Paper 1 (1a & 1b)", duration: "2h" },
                                { subject: "Biology", level: "SL", paper: "Paper 1 (1a & 1b)", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Biology", level: "HL", paper: "Paper 2", duration: "2h 30m" },
                                { subject: "Biology", level: "SL", paper: "Paper 2", duration: "1h 30m" },
                                { subject: "Economics", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "World Religions", level: "SL", paper: "Paper 1", duration: "1h 15m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-11",
                    dayName: "Tuesday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Economics", level: "HL", paper: "Paper 1", duration: "1h 15m" },
                                { subject: "Economics", level: "HL", paper: "Paper 3", duration: "1h 45m" },
                                { subject: "Economics", level: "SL", paper: "Paper 1", duration: "1h 15m" },
                                { subject: "World Religions", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-12",
                    dayName: "Wednesday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Classical Greek", level: "HL", paper: "Paper 1", duration: "2h" },
                                { subject: "Classical Greek", level: "SL", paper: "Paper 1", duration: "1h 30m" },
                                { subject: "Spanish A Literature", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "Spanish A Literature", level: "SL", paper: "Paper 1", duration: "1h 15m" },
                                { subject: "Spanish A Language & Literature", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "Spanish A Language & Literature", level: "SL", paper: "Paper 1", duration: "1h 15m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Classical Greek", level: "HL", paper: "Paper 2", duration: "1h 30m" },
                                { subject: "Classical Greek", level: "SL", paper: "Paper 2", duration: "1h 30m" },
                                { subject: "Spanish A Literature", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "Spanish A Language & Literature", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "Spanish B", level: "HL", paper: "Papers 1 & 2 (Reading)", duration: "1h 30m" },
                                { subject: "Spanish B", level: "SL", paper: "Papers 1 & 2 (Reading)", duration: "1h 15m" },
                                { subject: "Spanish ab initio", level: "SL", paper: "Papers 1 & 2 (Reading)", duration: "1h" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-13",
                    dayName: "Thursday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Spanish B", level: "HL", paper: "Paper 2 (Listening)", duration: "1h" },
                                { subject: "Spanish B", level: "SL", paper: "Paper 2 (Listening)", duration: "45m" },
                                { subject: "Spanish ab initio", level: "SL", paper: "Paper 2 (Listening)", duration: "45m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Mathematics: Analysis & Approaches", level: "HL", paper: "Paper 1", duration: "2h" },
                                { subject: "Mathematics: Analysis & Approaches", level: "SL", paper: "Paper 1", duration: "1h 30m" },
                                { subject: "Mathematics: Applications & Interpretation", level: "HL", paper: "Paper 1", duration: "2h" },
                                { subject: "Mathematics: Applications & Interpretation", level: "SL", paper: "Paper 1", duration: "1h 30m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-14",
                    dayName: "Friday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Mathematics: Analysis & Approaches", level: "HL", paper: "Paper 2", duration: "2h" },
                                { subject: "Mathematics: Analysis & Approaches", level: "SL", paper: "Paper 2", duration: "1h 30m" },
                                { subject: "Mathematics: Applications & Interpretation", level: "HL", paper: "Paper 2", duration: "2h" },
                                { subject: "Mathematics: Applications & Interpretation", level: "SL", paper: "Paper 2", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "Digital Society", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "Digital Society", level: "SL", paper: "Paper 1", duration: "1h 30m" },
                                { subject: "Global Politics", level: "HL/SL", paper: "Paper 1", duration: "1h 15m" },
                                { subject: "Global Politics", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "Week 4",
            startDate: "2027-05-17",
            endDate: "2027-05-18",
            days: [
                {
                    date: "2027-05-17",
                    dayName: "Monday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "Digital Society", level: "HL/SL", paper: "Paper 2", duration: "1h 15m" },
                                { subject: "Digital Society", level: "HL", paper: "Paper 3", duration: "1h 15m" },
                                { subject: "Global Politics", level: "HL", paper: "Paper 3", duration: "1h 30m" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "French A Literature", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "French A Literature", level: "SL", paper: "Paper 1", duration: "1h 15m" },
                                { subject: "French A Language & Literature", level: "HL", paper: "Paper 1", duration: "2h 15m" },
                                { subject: "French A Language & Literature", level: "SL", paper: "Paper 1", duration: "1h 15m" }
                            ]
                        }
                    ]
                },
                {
                    date: "2027-05-18",
                    dayName: "Tuesday",
                    sessions: [
                        {
                            period: "Morning",
                            time: "10:00",
                            exams: [
                                { subject: "French A Literature", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "French A Language & Literature", level: "HL/SL", paper: "Paper 2", duration: "1h 45m" },
                                { subject: "French B", level: "HL", paper: "Papers 1 & 2 (Reading)", duration: "1h 30m" },
                                { subject: "French B", level: "SL", paper: "Papers 1 & 2 (Reading)", duration: "1h 15m" },
                                { subject: "French ab initio", level: "SL", paper: "Papers 1 & 2 (Reading)", duration: "1h" }
                            ]
                        },
                        {
                            period: "Afternoon",
                            time: "14:00",
                            exams: [
                                { subject: "French B", level: "HL", paper: "Paper 2 (Listening)", duration: "1h" },
                                { subject: "French B", level: "SL", paper: "Paper 2 (Listening)", duration: "45m" },
                                { subject: "French ab initio", level: "SL", paper: "Paper 2 (Listening)", duration: "45m" },
                                { subject: "Mathematics: Analysis & Approaches", level: "HL", paper: "Paper 3", duration: "1h 15m" },
                                { subject: "Mathematics: Applications & Interpretation", level: "HL", paper: "Paper 3", duration: "1h 15m" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
