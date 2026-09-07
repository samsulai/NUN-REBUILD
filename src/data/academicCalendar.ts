export type CalendarTag = "Registration" | "Lectures" | "Exams" | "Holiday"

export type CalendarEvent = {
  date: string
  iso: string
  label: string
  tag?: CalendarTag
}

export type CalendarMonth = {
  month: string
  events: CalendarEvent[]
}

export type CalendarSemester = {
  heading: string
  months: CalendarMonth[]
}

export const academicCalendar: CalendarSemester[] = [
  {
    heading: "First Semester 2025 – 2026",
    months: [
      {
        month: "September 2025",
        events: [
          { date: "15th", iso: "2025-09-15", label: "Course Registration Begins (All Students – PG & UG)", tag: "Registration" },
          { date: "25th", iso: "2025-09-25", label: "Senate Meeting" },
          { date: "29th", iso: "2025-09-29", label: "Resumption for 2025-2026 Academic Session" },
        ],
      },
      {
        month: "October 2025",
        events: [
          { date: "6th", iso: "2025-10-06", label: "Lecture Begins (All Students – PG & UG)", tag: "Lectures" },
          { date: "20th – 24th", iso: "2025-10-20", label: "Freshers Orientation Week" },
          { date: "27th", iso: "2025-10-27", label: "Add and Drop Week / Late Registration Begins (All Students – PG & UG)", tag: "Registration" },
        ],
      },
      {
        month: "November 2025",
        events: [
          { date: "7th", iso: "2025-11-07", label: "Late Registration Ends (All Students – PG & UG)", tag: "Registration" },
          { date: "13th", iso: "2025-11-13", label: "Senate Meeting" },
          { date: "18th – 20th", iso: "2025-11-18", label: "Convocation Ceremony" },
          { date: "24th", iso: "2025-11-24", label: "Midterm Examination Begins (PG & UG) (8th & 9th Week)", tag: "Exams" },
        ],
      },
      {
        month: "December 2025",
        events: [
          { date: "5th", iso: "2025-12-05", label: "Midterm Examination Begins (PG & UG) (8th & 9th Week)", tag: "Exams" },
          { date: "14th", iso: "2025-12-14", label: "Deadline for C.A Upload (All Students – PG & UG)", tag: "Exams" },
          { date: "19th", iso: "2025-12-19", label: "Examination Timetable to be Published (PG & UG)", tag: "Exams" },
        ],
      },
      {
        month: "January 2026",
        events: [
          { date: "5th", iso: "2026-01-05", label: "Resumption from End of Year Break" },
          { date: "30th", iso: "2026-01-30", label: "Lecture Ends (All Students – PG & UG) – 15 weeks", tag: "Lectures" },
        ],
      },
      {
        month: "February 2026",
        events: [
          { date: "2nd – 13th", iso: "2026-02-02", label: "Final Examination (All Students – PG & UG)", tag: "Exams" },
          { date: "16th", iso: "2026-02-16", label: "Semester Holiday (All Students – PG & UG): 2 weeks", tag: "Holiday" },
        ],
      },
    ],
  },
  {
    heading: "Second Semester 2025 – 2026",
    months: [
      {
        month: "January 2026",
        events: [{ date: "26th", iso: "2026-01-26", label: "Matriculation" }],
      },
      {
        month: "February 2026",
        events: [
          { date: "16th", iso: "2026-02-16", label: "Course Registration Begins (PG & UG)", tag: "Registration" },
          { date: "27th", iso: "2026-02-27", label: "Deadline for Final Examination Upload (PG & UG)", tag: "Exams" },
        ],
      },
      {
        month: "March 2026",
        events: [
          { date: "2nd", iso: "2026-03-02", label: "Lecture Begins", tag: "Lectures" },
          { date: "16th – 20th", iso: "2026-03-16", label: "Add and Drop / Late Registration Week (PG & UG)", tag: "Registration" },
          { date: "19th", iso: "2026-03-19", label: "Deadline for Deferment (PG & UG)", tag: "Registration" },
        ],
      },
      {
        month: "April 2026",
        events: [{ date: "13th – 24th", iso: "2026-04-13", label: "Midterm Examination (7th & 8th Week)", tag: "Exams" }],
      },
      {
        month: "May 2026",
        events: [
          { date: "8th", iso: "2026-05-08", label: "Deadline for C.A Upload", tag: "Exams" },
          { date: "11th", iso: "2026-05-11", label: "Examination Timetable to be Published (PG & UG)", tag: "Exams" },
        ],
      },
      {
        month: "June 2026",
        events: [
          { date: "11th", iso: "2026-06-11", label: "Lecture Ends (All Students – PG & UG) – 15 weeks", tag: "Lectures" },
          { date: "15th – 26th", iso: "2026-06-15", label: "Final Examinations (PG & UG)", tag: "Exams" },
          { date: "28th", iso: "2026-06-28", label: "Summer Holiday Begins (PG & UG)", tag: "Holiday" },
          { date: "29th", iso: "2026-06-29", label: "Second Intake – Second Semester / LVS Registration Begins", tag: "Registration" },
        ],
      },
      {
        month: "July 2026",
        events: [
          { date: "10th", iso: "2026-07-10", label: "Deadline for Final Examination Upload (PG & UG)", tag: "Exams" },
          { date: "13th", iso: "2026-07-13", label: "Second Intake Lectures Begins", tag: "Lectures" },
          { date: "17th", iso: "2026-07-17", label: "Second Intake – Second Semester / LVS Registration Ends", tag: "Registration" },
          { date: "20th", iso: "2026-07-20", label: "Long Vacation School (LVS) Lecture Begins", tag: "Lectures" },
          { date: "23rd", iso: "2026-07-23", label: "Senate Meeting" },
        ],
      },
      {
        month: "September 2026",
        events: [
          { date: "11th", iso: "2026-09-11", label: "Long Vacation School (LVS) Ends", tag: "Lectures" },
          { date: "14th – 18th", iso: "2026-09-14", label: "Long Vacation School (LVS) Examination (1 Week)", tag: "Exams" },
        ],
      },
      {
        month: "October 2026",
        events: [
          { date: "9th", iso: "2026-10-09", label: "Second Intake Lectures Ends – 15 Weeks", tag: "Lectures" },
          { date: "12th – 16th", iso: "2026-10-12", label: "Second Intake Examination (1 Week)", tag: "Exams" },
        ],
      },
    ],
  },
]
