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
    heading: "Academic Partners",
    blurb:
      "Universities and specialist schools we work with on exchange, dual-degree, curriculum, and research collaboration, including our fellow institutions in the Honoris United Universities network.",
    partners: [
      { name: "Honoris Educational Network", logo: "/Honoris-Educational-Network-HEN-Mauritius.avif" },
      { name: "École Marocaine des Sciences de l'Ingénieur (EMSI)", logo: "/Ecole-Marocaine-des-Sciences-de-lIngenieur-EMSI-Morocco.avif" },
      { name: "École d'Architecture de Casablanca (EAC)", logo: "/Ecole-dArchitecture-de-Casablanca-EAC-Morocco.avif" },
      { name: "Université Mundiapolis", logo: "/Universite-Mundiapolis-Morocco.avif" },
      { name: "Institut Catholique d'Arts et Métiers (ICAM)", logo: "/Institut-Catholique-dArt-et-Metier-ICAM.avif" },
      { name: "Institut Maghrébin des Sciences Économiques et de Technologie (IMSET)", logo: "/Institut-Maghrebin-des-Sciences-Economiques-et-de-Technologie-IMSET.avif" },
      { name: "The ESPRIT Group of Universities", logo: "/The-ESPRIT-Group-of-Universities-Tunisia.avif" },
      { name: "Académie d'Art de Carthage (AAC)", logo: "/Academie-dArt-de-Carthage-AAC-Tunisia.avif" },
      { name: "UPSAT", logo: "/UPSAT-Tunisia.avif" },
      { name: "MANCOSA", logo: "/MANCOSA-South-Africa.avif" },
      { name: "Regent Business School (RBS)", logo: "/REGENT-BUSINESS-SCHOOLRBS-South-Africa.avif" },
      { name: "Red & Yellow Creative School of Business", logo: "/Red-Yellow-Creative-School-of-Business-South-Africa.avif" },
      { name: "The Animation School", logo: "/The-Animation-School-South-Africa.avif" },
      { name: "The FEDISA Fashion School", logo: "/The-FEDISA-Fashion-School-South-Africa.avif" },
      { name: "Le Wagon Africa", logo: "/Le-Wagon-Africa-Honoris-Partner-Institution.avif" },
      { name: "The Medical Simulation Center", logo: "/The-Medical-Simulation-Center.avif" },
      { name: "University of Southampton", logo: "/University-of-Southampton-UOS.avif" },
      { name: "Northwestern Oklahoma State University (NWOSU)", logo: "/Northwestern-Oklahoma-State-University-NWOSU.avif" },
      { name: "Sheridan College", logo: "/Sheridan-College-Institute-of-Technology-and-Advanced-Learning.avif" },
      { name: "University of Maiduguri", logo: "/University-of-Maiduguri.avif" },
      { name: "EC-Council University", logo: "/EC-Council-University.avif" },
    ],
  },
  {
    heading: "Professional & Accreditation Bodies",
    blurb:
      "Professional institutes whose qualifications and accreditation pathways are built into our programmes.",
    partners: [
      { name: "Association of Chartered Certified Accountants (ACCA)", logo: "/Association-of-Chartered-Certified-Accountants-ACCA.avif" },
      { name: "AICPA", logo: "/AICPA.avif" },
    ],
  },
  {
    heading: "Industry & Government Partners",
    blurb:
      "Employers, agencies, and institutions that support internships, research, funding, and student opportunities.",
    partners: [
      { name: "PwC", logo: "/PwC.avif" },
      { name: "Huawei", logo: "/Huawei.avif" },
      { name: "MultiChoice / Showmax", logo: "/Multichoice-Showmax.avif" },
      { name: "National Hospital Abuja", logo: "/National-Hospital-Abuja.avif" },
      { name: "FCTA Health and Human Sciences Secretariat", logo: "/Federal-Capital-Territory-Administration-Health-and-Human-Sciences-Secretariat.avif" },
      { name: "National Information Technology Development Agency (NITDA)", logo: "/National-Information-Technology-Development-Agency-NITDA.avif" },
      { name: "Development Bank of Nigeria (DBN)", logo: "/Development-Bank-of-Nigeria-DBN.avif" },
      { name: "Campus France Nigeria", logo: "/Embassy-Of-France-Campus-France-Nigeria.avif" },
      { name: "EducationUSA — U.S. Embassy Nigeria", logo: "/U-S-Embassy-Nigeria-Education-USA.avif" },
    ],
  },
]
