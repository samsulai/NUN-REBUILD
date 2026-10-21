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
    heading: "First Semester 2026 – 2027",
    months: [
      {
        month: "September 2026",
        events: [
          { date: "14th", iso: "2026-09-14", label: "First Semester Course Registration Begins for 2026-2027 Academic Session (All Students – PG & UG)", tag: "Registration" },
          { date: "22nd", iso: "2026-09-22", label: "Committee of Provost, Deans and Directors Meeting (COPDD)" },
          { date: "24th", iso: "2026-09-24", label: "Senate Meeting" },
          { date: "28th", iso: "2026-09-28", label: "Resumption for 2026-2027 Academic Session" },
        ],
      },
      {
        month: "October 2026",
        events: [
          { date: "5th", iso: "2026-10-05", label: "First Semester Lectures Begin (All Students – PG & UG)", tag: "Lectures" },
          { date: "19th – 23rd", iso: "2026-10-19", label: "Freshers Orientation Week" },
          { date: "26th", iso: "2026-10-26", label: "Add and Drop Week / Late Registration Begins (All Students – PG & UG)", tag: "Registration" },
        ],
      },
      {
        month: "November 2026",
        events: [
          { date: "6th", iso: "2026-11-06", label: "Late Registration Ends (All Students – PG & UG)", tag: "Registration" },
          { date: "10th", iso: "2026-11-10", label: "Committee of Provost, Deans and Directors Meeting (COPDD)" },
          { date: "12th", iso: "2026-11-12", label: "Senate Meeting" },
          { date: "17th – 19th", iso: "2026-11-17", label: "Convocation Ceremony" },
          { date: "23rd", iso: "2026-11-23", label: "Midterm Examination Begins (PG & UG)", tag: "Exams" },
        ],
      },
      {
        month: "December 2026",
        events: [
          { date: "4th", iso: "2026-12-04", label: "Midterm Examination Ends (PG & UG)", tag: "Exams" },
          { date: "18th", iso: "2026-12-18", label: "Deadline for Upload of Midterm Examination Grades (All Students – PG & UG)", tag: "Exams" },
          { date: "18th", iso: "2026-12-18", label: "Examination Timetable to be Published (PG & UG)", tag: "Exams" },
          { date: "19th", iso: "2026-12-19", label: "End of Year Break", tag: "Holiday" },
        ],
      },
      {
        month: "January 2027",
        events: [
          { date: "18th", iso: "2027-01-18", label: "Resumption from End of Year Break" },
          { date: "19th", iso: "2027-01-19", label: "Committee of Provost, Deans and Directors Meeting (COPDD)" },
          { date: "26th", iso: "2027-01-26", label: "Matriculation for 2026-2027 Intake" },
        ],
      },
      {
        month: "February 2027",
        events: [
          { date: "5th", iso: "2027-02-05", label: "First Semester Lectures End (All Students – PG & UG)", tag: "Lectures" },
          { date: "8th – 19th", iso: "2027-02-08", label: "First Semester Final Examinations (All Students – PG & UG)", tag: "Exams" },
          { date: "22nd Feb – 5th Mar", iso: "2027-02-22", label: "Mid Semester Break (All Students – PG & UG)", tag: "Holiday" },
        ],
      },
    ],
  },
  {
    heading: "Second Semester 2026 – 2027",
    months: [
      {
        month: "February 2027",
        events: [
          { date: "22nd", iso: "2027-02-22", label: "Second Semester Course Registration Begins (PG & UG)", tag: "Registration" },
        ],
      },
      {
        month: "March 2027",
        events: [
          { date: "8th", iso: "2027-03-08", label: "Second Semester Lecture Begins", tag: "Lectures" },
          { date: "12th", iso: "2027-03-12", label: "Deadline for First Semester Final Examination Grade Upload (PG & UG)", tag: "Exams" },
          { date: "22nd – 26th", iso: "2027-03-22", label: "Add and Drop / Late Registration Week (PG & UG)", tag: "Registration" },
          { date: "26th", iso: "2027-03-26", label: "Deadline for Deferment (PG & UG)", tag: "Registration" },
        ],
      },
      {
        month: "April 2027",
        events: [
          { date: "26th Apr – 7th May", iso: "2027-04-26", label: "Second Semester Midterm Examinations", tag: "Exams" },
        ],
      },
      {
        month: "May 2027",
        events: [
          { date: "21st", iso: "2027-05-21", label: "Deadline for Upload of Midterm Examination Grades (All Students – PG & UG)", tag: "Exams" },
          { date: "24th", iso: "2027-05-24", label: "Examination Timetable to be Published (PG & UG)", tag: "Exams" },
        ],
      },
      {
        month: "June 2027",
        events: [
          { date: "25th", iso: "2027-06-25", label: "Second Semester Lectures End (All Students – PG & UG)", tag: "Lectures" },
          { date: "28th Jun – 9th Jul", iso: "2027-06-28", label: "Second Semester Final Examinations (PG & UG)", tag: "Exams" },
        ],
      },
      {
        month: "July 2027",
        events: [
          { date: "9th", iso: "2027-07-09", label: "Second Semester Final Examinations End (PG & UG)", tag: "Exams" },
          { date: "12th", iso: "2027-07-12", label: "Summer Holiday Begins (PG & UG)", tag: "Holiday" },
          { date: "12th", iso: "2027-07-12", label: "Postgraduate (Second Intake) Second Semester / Long Vacation Studies (LVS) Registration Begins", tag: "Registration" },
          { date: "23rd", iso: "2027-07-23", label: "Deadline for Final Examination Upload (PG & UG)", tag: "Exams" },
          { date: "26th", iso: "2027-07-26", label: "Postgraduate Second Intake Lecture Begins", tag: "Lectures" },
          { date: "26th", iso: "2027-07-26", label: "LVS Lectures Begin", tag: "Lectures" },
          { date: "27th", iso: "2027-07-27", label: "Committee of Provost, Deans and Directors Meeting (COPDD)" },
          { date: "29th", iso: "2027-07-29", label: "Senate Meeting" },
          { date: "30th", iso: "2027-07-30", label: "Postgraduate Second Intake / LVS Registration Ends", tag: "Registration" },
        ],
      },
      {
        month: "September 2027",
        events: [
          { date: "24th", iso: "2027-09-24", label: "LVS Lectures End", tag: "Lectures" },
          // Source document says "27th - (1st August)" — August is before September/July, which
          // can't be right given LVS lectures run July 26 - Sept 24. Best guess is "October" was
          // misread/mistyped as "August"; using 27th Sep - 1st Oct until the university confirms.
          { date: "27th Sep – 1st Oct", iso: "2027-09-27", label: "LVS Examinations (date range unconfirmed — source document lists \"1st August\", likely a typo for \"1st October\")", tag: "Exams" },
        ],
      },
      {
        month: "October 2027",
        events: [
          { date: "22nd", iso: "2027-10-22", label: "Postgraduate Second Intake Lectures End", tag: "Lectures" },
          { date: "25th – 29th", iso: "2027-10-25", label: "Postgraduate Second Intake Examinations", tag: "Exams" },
        ],
      },
    ],
  },
]
