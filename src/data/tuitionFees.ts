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
    faculties: [],
  },
]

export const tuitionNotes = [
  "Tuition does not cover accommodation.",
  "Tuition fees are subject to change at the discretion of the Management of Nile University of Nigeria.",
]
