export type TuitionCourse = {
  course: string
  duration: string
  perSemester: string
  perSession: string
  totalProgramFee?: string
}

export type TuitionFaculty = {
  faculty: string
  courses: TuitionCourse[]
}

export type TuitionLevel = {
  level: string
  showTotal?: boolean
  faculties: TuitionFaculty[]
}

const s4 = "8 semesters / 4 years"
const s5 = "10 semesters / 5 years"
const s6 = "12 semesters / 6 years"

export const tuitionFees: TuitionLevel[] = [
  {
    level: "Undergraduate Fees",
    faculties: [
      {
        faculty: "College of Health Sciences",
        courses: [
          { course: "Medicine & Surgery", duration: s6, perSemester: "₦3,575,000", perSession: "₦7,150,000" },
          { course: "Human Anatomy", duration: s4, perSemester: "₦1,875,000", perSession: "₦3,750,000" },
          { course: "Human Physiology", duration: s4, perSemester: "₦1,875,000", perSession: "₦3,750,000" },
          { course: "Public Health", duration: s4, perSemester: "₦2,000,000", perSession: "₦4,000,000" },
          { course: "Medical Laboratory Science", duration: s5, perSemester: "₦1,750,000", perSession: "₦3,500,000" },
          { course: "Nursing Sciences", duration: s5, perSemester: "₦1,750,000", perSession: "₦3,500,000" },
        ],
      },
      {
        faculty: "Faculty of Law",
        courses: [
          { course: "Law", duration: s5, perSemester: "₦2,275,000", perSession: "₦4,550,000" },
        ],
      },
      {
        faculty: "Faculty of Engineering",
        courses: [
          { course: "Civil Engineering", duration: s5, perSemester: "₦1,975,000", perSession: "₦3,950,000" },
          { course: "Computer Engineering", duration: s5, perSemester: "₦1,975,000", perSession: "₦3,950,000" },
          { course: "Electrical & Electronics Engineering", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Mechanical Engineering", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Petroleum & Gas Engineering", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Mechatronics", duration: s5, perSemester: "₦1,975,000", perSession: "₦3,950,000" },
          { course: "Chemical Engineering", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Information & Communication Engineering", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
        ],
      },
      {
        faculty: "Faculty of Environmental Sciences",
        courses: [
          { course: "Architecture", duration: s4, perSemester: "₦1,975,000", perSession: "₦3,950,000" },
          { course: "Urban & Regional Planning", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Quantity Surveying", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Building", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Estate Management", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Geo-Informatics & Surveying", duration: s5, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
        ],
      },
      {
        faculty: "Faculty of Science",
        courses: [
          { course: "Biochemistry", duration: s4, perSemester: "₦1,500,000", perSession: "₦3,000,000" },
          { course: "Microbiology", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Biotechnology", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Industrial Chemistry", duration: s4, perSemester: "₦1,500,000", perSession: "₦3,000,000" },
          { course: "Biology", duration: s4, perSemester: "₦1,500,000", perSession: "₦3,000,000" },
          { course: "Science Laboratory Technology (options in Biotechnology and Microbiology)", duration: s5, perSemester: "₦1,500,000", perSession: "₦3,000,000" },
        ],
      },
      {
        faculty: "Faculty of Computing Studies",
        courses: [
          { course: "Software Engineering", duration: s4, perSemester: "₦1,975,000", perSession: "₦3,950,000" },
          { course: "Computer Science", duration: s4, perSemester: "₦1,875,000", perSession: "₦3,750,000" },
          { course: "Information Technology", duration: s4, perSemester: "₦1,875,000", perSession: "₦3,750,000" },
          { course: "Cyber Security", duration: s4, perSemester: "₦1,975,000", perSession: "₦3,950,000" },
          { course: "Data Science", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Information System", duration: s4, perSemester: "₦1,875,000", perSession: "₦3,750,000" },
        ],
      },
      {
        faculty: "Faculty of Management Sciences",
        courses: [
          { course: "Accounting", duration: s4, perSemester: "₦1,725,000", perSession: "₦3,450,000" },
          { course: "Banking and Finance", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Business Administration", duration: s4, perSemester: "₦1,725,000", perSession: "₦3,450,000" },
          { course: "Public Administration", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Marketing", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Entrepreneurship", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Logistics & Supply Chain Management", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
        ],
      },
      {
        faculty: "Faculty of Arts & Social Sciences",
        courses: [
          { course: "Criminology & Security Studies", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Economics", duration: s4, perSemester: "₦1,725,000", perSession: "₦3,450,000" },
          { course: "Petroleum Economics and Policy Studies", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Mass Communication", duration: s4, perSemester: "₦1,775,000", perSession: "₦3,550,000" },
          { course: "Political Science & International Relations", duration: s4, perSemester: "₦1,875,000", perSession: "₦3,750,000" },
          { course: "Broadcasting", duration: s4, perSemester: "₦1,675,000", perSession: "₦3,350,000" },
          { course: "Film & Multimedia Studies", duration: s4, perSemester: "₦1,675,000", perSession: "₦3,350,000" },
          { course: "Psychology", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Sociology", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
          { course: "Peace Studies & Conflict Resolution", duration: s4, perSemester: "₦1,600,000", perSession: "₦3,200,000" },
        ],
      },
      {
        faculty: "School of Preliminary Studies (SPS)",
        courses: [
          { course: "School of Preliminary Studies (SPS)", duration: "1 year", perSemester: "₦1,375,000", perSession: "₦2,750,000" },
        ],
      },
    ],
  },
  {
    level: "Postgraduate Fees",
    showTotal: true,
    faculties: [
      {
        faculty: "College of Health Sciences",
        courses: [
          { course: "(MPH) Public Health", duration: "3 semesters/ 1.5 years", perSemester: "₦1,200,000", perSession: "₦2,400,000", totalProgramFee: "₦3,600,000" },
        ],
      },
      {
        faculty: "Faculty of Law",
        courses: [
          { course: "(PGD) Law", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(LLM) Law", duration: "2 semesters/ 1 year", perSemester: "₦1,000,000", perSession: "₦2,000,000", totalProgramFee: "₦2,000,000" },
          { course: "(PhD) Law", duration: "6 semesters/ 3 years", perSemester: "₦1,000,000", perSession: "₦2,000,000", totalProgramFee: "₦6,000,000" },
        ],
      },
      {
        faculty: "Faculty of Engineering",
        courses: [
          { course: "(PGD) Civil Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,950,000" },
          { course: "(M.Eng.) Civil Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦1,000,000", perSession: "₦2,000,000", totalProgramFee: "₦3,000,000" },
          { course: "(PhD) Civil Engineering", duration: "6 semesters/ 3 years", perSemester: "₦1,000,000", perSession: "₦2,000,000", totalProgramFee: "₦6,000,000" },
          { course: "(PGD) Computer Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,950,000" },
          { course: "(M.Eng.) Computer Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(PhD) Computer Engineering", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(PGD) Electrical & Electronics Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,950,000" },
          { course: "(M.Eng.) Electrical & Electronics Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦1,000,000", perSession: "₦2,000,000", totalProgramFee: "₦3,000,000" },
          { course: "(PhD) Electrical & Electronics Engineering", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(PGD) Petroleum & Gas Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,950,000" },
          { course: "(M.Eng.) Petroleum & Gas Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(M.Sc.) Oil and Gas Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(PhD) Petroleum and Gas Engineering", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(PGD) Mechanical Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,950,000" },
          { course: "(M.Eng.) Mechanical Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(PhD) Mechanical Engineering", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
        ],
      },
      {
        faculty: "Faculty of Science",
        courses: [
          { course: "(PGD) Biology", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Biology", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(M.Sc.) Biotechnology", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(M.Sc.) Biochemistry", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(M.Sc.) Microbiology", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(M.Sc.) Industrial Chemistry (Petroleum Chemistry)", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(PhD) Industrial Chemistry", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
        ],
      },
      {
        faculty: "Faculty of Computing Studies",
        courses: [
          { course: "(PGD) Computer Science", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Computer Science", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(PhD) Computer Science", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(PGD) Software Engineering", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Software Engineering", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
          { course: "(PGD) Information Technology", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Information Technology", duration: "3 semesters/ 1.5 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦2,700,000" },
        ],
      },
      {
        faculty: "Faculty of Management Sciences",
        courses: [
          { course: "Master of Business Administration (MBA)", duration: "4 semesters/ 2 years", perSemester: "₦1,000,000", perSession: "₦2,000,000", totalProgramFee: "₦4,000,000" },
          { course: "(PGD) Management", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Management", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(MPhil) Management", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(PhD) Management", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(PGD) Accounting", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Accounting", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(PhD) Accounting", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(M.Sc.) Auditing / Forensic Management", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(MAF) Accounting and Finance", duration: "4 semesters/ 2 years", perSemester: "₦950,000", perSession: "₦1,900,000", totalProgramFee: "₦3,800,000" },
        ],
      },
      {
        faculty: "Faculty of Arts & Social Sciences",
        courses: [
          { course: "(PGD) Economics", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Economics", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(MPhil) Economics", duration: "2 semesters/ 1 year", perSemester: "₦700,000", perSession: "₦1,400,000", totalProgramFee: "₦1,400,000" },
          { course: "(PhD) Economics", duration: "6 semesters/ 3 years", perSemester: "₦1,000,000", perSession: "₦2,000,000", totalProgramFee: "₦6,000,000" },
          { course: "(M.Sc.) Financial Economics", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(MFE) Financial Economics", duration: "2 semesters/ 1 year", perSemester: "₦950,000", perSession: "₦1,900,000", totalProgramFee: "₦1,900,000" },
          { course: "(PGD) International Relations and Diplomacy", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) International Relations and Diplomacy", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(MPhil) Int'l Rel. and Diplomacy", duration: "2 semesters/ 1 year", perSemester: "₦800,000", perSession: "₦1,600,000", totalProgramFee: "₦1,600,000" },
          { course: "(PhD) International Relations and Diplomacy", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(MIR) International Relations", duration: "4 semesters/ 2 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦3,600,000" },
          { course: "(PGD) Peace, Conflict and Strategic Studies", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Peace, Conflict and Strategic Studies", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(MPhil) Peace, Conflict and Strategic Studies", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(PhD) Peace, Conflict and Strategic Studies", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(PGD) Political Science", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Political Science", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(MPhil) Political Science", duration: "2 semesters/ 1 year", perSemester: "₦700,000", perSession: "₦1,400,000", totalProgramFee: "₦1,400,000" },
          { course: "(PhD) Political Science", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
          { course: "(PGD) Mass Communication", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Mass Communication", duration: "4 semesters/ 2 years", perSemester: "₦850,000", perSession: "₦1,700,000", totalProgramFee: "₦3,400,000" },
          { course: "(PhD) Mass Communication", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
        ],
      },
      {
        faculty: "Faculty of Environmental Sciences",
        courses: [
          { course: "(PGD) Landscape & Architecture", duration: "2 semesters/ 1 year", perSemester: "₦650,000", perSession: "₦1,300,000", totalProgramFee: "₦1,300,000" },
          { course: "(M.Sc.) Architecture", duration: "4 semesters/ 2 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦1,800,000" },
          { course: "(PhD) Architecture", duration: "6 semesters/ 3 years", perSemester: "₦900,000", perSession: "₦1,800,000", totalProgramFee: "₦5,400,000" },
        ],
      },
    ],
  },
]

export const tuitionNotes = [
  "Tuition does not cover accommodation.",
  "Tuition fees are subject to change at the discretion of the Management of Nile University of Nigeria.",
]
