import type { Category, Level } from "./courses"

type CategoryContent = {
  description: string
  careers: string
}

export const categoryContent: Record<Category, CategoryContent> = {
  engineering: {
    description:
      "This programme is delivered within Nile University's Faculty of Engineering, combining a rigorous grounding in mathematics and the physical sciences with hands-on laboratory work and design projects. Students work with modern lab equipment and take part in industrial attachments that connect classroom theory to real engineering practice, preparing graduates to pursue registration with the Council for the Regulation of Engineering in Nigeria (COREN).",
    careers:
      "engineering and design firms, construction and infrastructure companies, oil and gas operators, telecommunications providers, and manufacturing plants, with a path to professional registration with COREN.",
  },
  computing: {
    description:
      "Delivered within Nile University's Faculty of Computing Studies, this programme covers core computing theory alongside practical software development, systems, and security work in modern computer labs. The curriculum is regularly updated to track industry practice, with project work and internships preparing graduates for Nigeria's fast-growing technology sector.",
    careers:
      "software development, systems administration, IT and cyber security, data and cloud computing, and technology consulting, both within Nigeria's growing tech ecosystem and internationally.",
  },
  business: {
    description:
      "Taught within Nile University's Faculty of Management Sciences, this programme blends core business theory with case studies, practical projects, and internship opportunities. Coursework is aligned with the standards of Nigeria's leading professional bodies, giving graduates a strong foundation for further certification alongside their degree.",
    careers:
      "banking and financial services, accounting and audit firms, corporate finance, consulting, and entrepreneurship, with a foundation that supports further certification through bodies such as the Institute of Chartered Accountants of Nigeria (ICAN).",
  },
  science: {
    description:
      "Based in Nile University's Faculty of Science, this programme pairs core theory with extensive laboratory and practical work, supported by modern research facilities. Students are encouraged to take part in faculty-led research from an early stage, building the analytical and lab skills needed for further study or a career in applied science.",
    careers:
      "research and diagnostic laboratories, pharmaceutical and biotechnology companies, food and agricultural science, environmental agencies, and teaching, as well as a foundation for postgraduate research.",
  },
  "built-environment": {
    description:
      "Delivered within Nile University's Faculty of Environmental Sciences, this programme combines design studios and technical coursework with site visits and practical projects, preparing students to plan, design, and deliver the built environment responsibly and sustainably.",
    careers:
      "architectural and engineering design firms, construction and real estate development, urban planning agencies, and facilities management, with a path towards professional registration in Nigeria's built-environment institutes.",
  },
  media: {
    description:
      "Taught within Nile University's Faculty of Arts & Social Sciences, this programme combines media theory with hands-on studio and field production work, using the university's broadcast facilities to build practical, industry-ready skills.",
    careers:
      "television and radio broadcasting, journalism, media production houses, corporate communications, and digital content roles across Nigeria's growing media industry.",
  },
  "law-security": {
    description:
      "Delivered within Nile University's Faculty of Arts & Social Sciences, this programme examines crime, security, and justice systems through both theory and applied case studies, drawing on guest practitioners from Nigeria's security and criminal-justice sectors.",
    careers:
      "law enforcement and security agencies, correctional services, private security and risk management, policy research, and further study in law or criminology.",
  },
  health: {
    description:
      "Delivered within Nile University's Faculty of Medical & Health Sciences, this programme combines public health theory with fieldwork and community-based projects, preparing graduates to design and deliver health programmes across Nigeria's health system.",
    careers:
      "public health agencies, NGOs and international health organisations, hospital administration, health policy and research, and further postgraduate or clinical study.",
  },
}

const feesPerSession: Record<Level, Record<Category, number>> = {
  undergraduate: {
    engineering: 3200000,
    computing: 2800000,
    business: 2500000,
    science: 2800000,
    "built-environment": 3200000,
    media: 2400000,
    "law-security": 2600000,
    health: 3750000,
  },
  postgraduate: {
    engineering: 1800000,
    computing: 1600000,
    business: 1500000,
    science: 1600000,
    "built-environment": 1800000,
    media: 1400000,
    "law-security": 1500000,
    health: 1900000,
  },
}

export function getFeesPerSession(level: Level, category: Category) {
  return feesPerSession[level][category]
}

export function getFaqs(level: Level) {
  return [
    {
      question: "What are the entry requirements?",
      answer:
        level === "undergraduate"
          ? "A minimum of five (5) O'Level credits in WAEC, NECO, or NABTEB (including English Language and Mathematics), obtained in not more than two sittings, plus a UTME score that meets Nile University's cut-off (typically 160 and above) with Nile listed as your first choice. Admission is also subject to the university's Post-UTME screening. Exact UTME subject combinations vary by department, so contact admissions to confirm the combination for this programme."
          : "A minimum of a second-class lower degree (or equivalent) in a relevant field from a recognised university, along with any additional departmental requirements. Contact Nile University's School of Postgraduate Studies to confirm the specific requirements for this programme.",
    },
    {
      question: "How will I be taught?",
      answer:
        "Teaching combines lectures, tutorials, and hands-on laboratory, studio, or fieldwork, delivered by full-time faculty and industry practitioners. Most programmes include regular assessments and project work, and many culminate in an industrial attachment or a final-year research project.",
    },
    {
      question: "Further Study",
      answer:
        level === "undergraduate"
          ? "Graduates can progress to postgraduate study, including through Nile University's own School of Postgraduate Studies, or pursue professional certifications relevant to the field."
          : "Graduates can progress to Ph.D. study or pursue further professional certifications relevant to the field.",
    },
  ]
}
