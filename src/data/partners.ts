export type Partner = {
  name: string
  logo: string
  url?: string
}

export type PartnerGroup = {
  heading: string
  blurb: string
  partners: Partner[]
}

export const partnerGroups: PartnerGroup[] = [
  {
    heading: "Honoris United Universities Network",
    blurb:
      "Our fellow institutions in the Honoris United Universities network, Africa's largest pan-African private higher education network, giving our students access to exchange, dual-degree, and shared curriculum opportunities across the continent.",
    partners: [
      { name: "Honoris Educational Network", logo: "/honoris-educational-network.jpg" },
      { name: "École Marocaine des Sciences de l'Ingénieur (EMSI)", logo: "/partners/emsi-morocco.webp" },
      { name: "École d'Architecture de Casablanca (EAC)", logo: "/partners/eac-morocco.webp" },
      { name: "Université Mundiapolis", logo: "/partners/mundiapolis-morocco.webp" },
      { name: "Institut Catholique d'Arts et Métiers (ICAM)", logo: "/partners/icam-morocco.svg" },
      { name: "Institut Maghrébin des Sciences Économiques et de Technologie (IMSET)", logo: "/partners/imset.webp" },
      { name: "The ESPRIT Group of Universities", logo: "/partners/esprit-tunisia.webp" },
      { name: "Académie d'Art de Carthage (AAC)", logo: "/partners/aac-carthage.webp" },
      { name: "UPSAT", logo: "/partners/upsat-logo.webp" },
      { name: "MANCOSA", logo: "/partners/mancosa-logo.webp" },
      { name: "Regent Business School (RBS)", logo: "/partners/rbs-logo.webp" },
      { name: "Red & Yellow Creative School of Business", logo: "/partners/red-yellow-logo.webp" },
      { name: "The Animation School", logo: "/partners/animation-school-logo.svg" },
      { name: "The FEDISA Fashion School", logo: "/partners/fedisa-logo.webp" },
      { name: "Le Wagon Africa", logo: "/partners/lewagon-logo.webp" },
      { name: "The Medical Simulation Center", logo: "/partners/medsim-logo.webp" },
    ],
  },
  {
    heading: "Other Academic Partners",
    blurb:
      "Universities and specialist schools outside the Honoris network that we work with on exchange, dual-degree, curriculum, and research collaboration.",
    partners: [
      { name: "University of Southampton", logo: "/partners/southampton-logo.webp" },
      { name: "Northwestern Oklahoma State University (NWOSU)", logo: "/partners/nwosu-logo.webp" },
      { name: "Sheridan College", logo: "/partners/sheridan-logo.svg" },
      { name: "University of Maiduguri", logo: "/partners/University-of-Maiduguri.webp" },
      { name: "EC-Council University", logo: "/partners/eccouncil-logo.webp" },
    ],
  },
  {
    heading: "Professional & Accreditation Bodies",
    blurb:
      "Professional institutes whose qualifications and accreditation pathways are built into our programmes.",
    partners: [
      { name: "Association of Chartered Certified Accountants (ACCA)", logo: "/partners/acca-logo.webp" },
      { name: "AICPA", logo: "/partners/aicpa-logo.webp" },
      { name: "Council for the Regulation of Engineering in Nigeria (COREN)", logo: "/partners/coren-logo.webp" },
      { name: "Medical and Dental Council of Nigeria (MDCN)", logo: "/partners/mdcn-logo.webp" },
    ],
  },
  {
    heading: "Industry & Government Partners",
    blurb:
      "Employers, agencies, and institutions that support internships, research, funding, and student opportunities.",
    partners: [
      { name: "PwC", logo: "/partners/pwc-logo.webp" },
      { name: "Huawei", logo: "/partners/huawei-logo.webp" },
      { name: "National Hospital Abuja", logo: "/partners/nationalhospital-logo.webp" },
      { name: "FCTA Health and Human Sciences Secretariat", logo: "/partners/Federal-Capital-Territory-Administration-Health-and-Human-Sciences-Secretariat.webp" },
      { name: "National Information Technology Development Agency (NITDA)", logo: "/partners/nitda-logo.webp" },
      { name: "National Agency for Science and Engineering Infrastructure (NASENI)", logo: "/partners/naseni-logo.webp" },
      { name: "Development Bank of Nigeria (DBN)", logo: "/partners/dbn-logo.webp" },
      { name: "Campus France Nigeria", logo: "/partners/campusfrance-logo.webp" },
      { name: "EducationUSA (U.S. Embassy Nigeria)", logo: "/partners/educationusa-logo.webp" },
    ],
  },
]
