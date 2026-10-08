export type Service = {
  title: string
  paragraphs: string[]
  list?: { heading: string; items: string[]; columns?: boolean }
  closing?: string
  to: string | null
  linkHeading?: string
  linkLabel?: string
  details?: {
    note?: string
    location?: string
    email?: string
    emailLabel?: string
    hours?: string
  }
}

export const services: Service[] = [
  {
    title: "Student Experience",
    paragraphs: [
      "At Nile University of Nigeria, learning extends beyond the classroom. Student Services creates opportunities for students to engage, connect, lead and grow through programmes, facilities and support services designed to enhance university life.",
      "Whether seeking guidance, leadership opportunities, extracurricular involvement or personal support, students can access services and opportunities that help them make the most of their university experience.",
    ],
    details: {
      location: "Student Services Centre",
      email: "affairs@nileuniversity.edu.ng",
      hours: "Monday to Friday, 8:30 AM – 4:00 PM",
    },
    to: null,
  },
  {
    title: "Facilities",
    paragraphs: [
      "Nile University of Nigeria provides modern facilities that encourage collaboration, leadership development, creativity and active student engagement.",
    ],
    list: {
      heading: "Highlights",
      items: [
        "Amphitheatre for student events, performances and public lectures.",
        "Conference and meeting rooms for training sessions, workshops, club activities and student-led initiatives.",
        "Collaborative spaces that support innovation, peer learning and teamwork.",
      ],
    },
    closing:
      "These facilities contribute to a vibrant campus environment that supports students’ holistic development.",
    to: null,
  },
  {
    title: "Clubs and Student Activities",
    paragraphs: [
      "Student life at Nile University of Nigeria is enriched through participation in clubs, events, competitions and extracurricular activities. The Clubs and Student Activities Unit provides opportunities for students to develop leadership skills, explore their interests, build lasting friendships and contribute to the University community.",
      "Students can participate in signature events such as Nile Fashion Week, talent showcases, cultural nights, workshops and community initiatives that encourage creativity, collaboration and personal growth.",
    ],
    list: {
      heading: "Student Clubs",
      columns: true,
      items: [
        "Business Club",
        "Charity Club",
        "Games Club",
        "Nile Launchpad Club",
        "Collective Lab Builders Club",
        "Women in Tech Club",
        "Toastmasters Club",
        "Model United Nations (MUN) Club",
        "Business Consulting Club",
        "Climate Initiative Club",
        "Photography Club",
        "TEDx Club",
        "Debate Club",
        "Creative Arts Club",
        "Book Club",
        "Investment and Finance Club",
      ],
    },
    details: {
      note: "To join a club, visit the Nile Student Centre, Room 101, or contact us at:",
      email: "clubs@nileuniversity.edu.ng",
      hours: "Monday to Friday, 8:30 AM – 4:00 PM",
    },
    to: null,
  },
  {
    title: "Honoris Collective Lab",
    paragraphs: [
      "The Honoris Collective Lab is Nile University of Nigeria’s innovation and entrepreneurship hub, designed to empower students to transform ideas into impactful solutions, sustainable ventures and successful careers.",
      "The hub provides students with practical learning experiences, access to mentors, business development support, industry connections and opportunities to engage with real-world challenges.",
    ],
    list: {
      heading: "Opportunities Available",
      items: [
        "Entrepreneurship and innovation training",
        "Start-up support programmes",
        "Expert mentorship and coaching",
        "Innovation challenges and hackathons",
        "Incubation and acceleration programmes",
        "Industry partnerships",
        "Networking events",
        "Access to collaborative innovation spaces",
        "Investor engagement opportunities",
      ],
    },
    closing:
      "By fostering creativity, problem-solving and entrepreneurial thinking, the Collective Lab helps students develop the skills and mindset needed to create value and drive impact.",
    details: {
      location: "Student Services Centre, Collective Lab",
      email: "collectivelab@nileuniversity.edu.ng",
      hours: "Monday to Friday, 8:30 AM – 4:00 PM",
    },
    to: null,
  },
  {
    title: "Career Services",
    paragraphs: [
      "The Career Services Centre supports students and graduates as they prepare for successful careers and meaningful professional lives. From their first year through graduation, students receive guidance, resources and opportunities that enhance career readiness and employability.",
    ],
    list: {
      heading: "Services Include",
      items: [
        "Career coaching and advisory services",
        "CV and résumé development",
        "Interview preparation",
        "Employability workshops",
        "Internship opportunities",
        "Graduate recruitment support",
        "Employer engagement activities",
        "Mentorship programmes",
        "Student Ambassador Programme",
        "Professional and leadership development",
      ],
    },
    closing:
      "Our goal is to ensure that every Nile University of Nigeria graduate is equipped with the knowledge, skills, experiences and confidence needed to succeed in an evolving global workforce.",
    details: {
      location: "Student Services Centre, Room 113",
      email: "careerservice@nileuniversity.edu.ng",
      hours: "Monday to Friday, 8:30 AM – 4:00 PM",
    },
    to: null,
  },
  {
    title: "Sports & Recreation",
    paragraphs: [
      "Sports play an important role in promoting wellbeing, teamwork, discipline and personal development. Nile University of Nigeria offers students access to a variety of sporting and recreational activities that encourage active and healthy lifestyles.",
      "Whether participating recreationally or competitively, students are encouraged to stay active and engaged throughout their university experience.",
    ],
    details: {
      location: "Nile House, Room 103",
      email: "habubakar@nileuniversity.edu.ng",
      emailLabel: "Enquiries",
      hours: "Monday to Friday, 8:30 AM – 4:00 PM",
    },
    to: null,
  },
  {
    title: "Student Accommodation",
    paragraphs: [
      "Nile University of Nigeria provides safe, comfortable and supportive accommodation designed to enhance student life and promote academic success. Students benefit from a secure and welcoming residential environment that supports both personal wellbeing and academic achievement.",
    ],
    linkHeading: "Explore Student Accommodation",
    linkLabel: "Visit Student Accommodation – Comfortable Living Spaces",
    to: "/student-accommodation",
  },
  {
    title: "Events & Campus Life",
    paragraphs: [
      "Nile University of Nigeria hosts a diverse range of academic, cultural, professional, recreational and community-centred events throughout the year. These activities enrich the student experience, encourage collaboration and provide opportunities for leadership and personal development.",
      "Students are encouraged to participate actively, build networks, develop new skills and make lasting memories during their time at the University.",
    ],
    linkLabel: "Explore Upcoming Events",
    to: "/news",
  },
  {
    title: "Counselling and Psychological Services (CAPS)",
    paragraphs: [
      "Confidential counselling and psychological support to help you look after your wellbeing.",
    ],
    to: null,
  },
  {
    title: "Alumni Relations",
    paragraphs: [
      "The Alumni Relations Department serves as a bridge between Nile University of Nigeria and its growing global alumni community of more than 10,000 graduates across over 20 countries.",
      "The department fosters lifelong engagement through networking opportunities, professional development programmes, mentorship initiatives and alumni events designed to strengthen relationships within the Nile University of Nigeria community.",
    ],
    list: {
      heading: "Opportunities for Alumni",
      items: [
        "Networking events",
        "Mentorship opportunities",
        "Professional development programmes",
        "Alumni partnerships and collaborations",
        "Career and entrepreneurial support",
        "Community engagement initiatives",
      ],
    },
    closing:
      "At Nile University of Nigeria, alumni remain valued members of the community and important partners in shaping future generations of leaders.",
    details: {
      location: "Student Services Centre, Room 018",
      email: "alumni@nileuniversity.edu.ng",
      hours: "Monday to Friday, 8:30 AM – 4:00 PM",
    },
    to: null,
  },
]

export const serviceStats = [
  { value: 91, suffix: "%", label: "Graduate Employment Rate" },
  { value: 10, suffix: "k+", label: "Alumni Worldwide" },
  { value: 20, suffix: "+", label: "Countries Represented" },
  { value: 170, suffix: "+", label: "Employers Participating in the Annual Career Fair" },
  { value: 15, suffix: "+", label: "Student Clubs and Societies" },
]
