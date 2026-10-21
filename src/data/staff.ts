export type StaffPerson = {
  name: string
  title: string
  slug: string | null
  image: string | null
}

export type StaffDepartment = {
  name: string
  members: StaffPerson[]
}

export type StaffFaculty = {
  heading: string
  leadership: StaffPerson[]
  departments: StaffDepartment[]
}

export const staffFaculties: StaffFaculty[] = [
  {
    heading: "College of Health Sciences",
    leadership: [
      { name: "Prof. Bata Mtaku Gali", title: "Provost", slug: "prof-bata-mtaku-gali", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Prof.-Bata-Mtaku-Gali.avif" },
      { name: "Prof. Dr. Senol Dane", title: "Dean, Faculty of Basic Medical Sciences", slug: "prof-dr-senol-dane", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Prof.-Senol-Dane.avif" },
      { name: "Prof. Folorunsho Asalu", title: "Dean, Faculty of Basic Clinical Sciences", slug: null, image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Prof.-Folorunsho-Asalu.avif" },
    ],
    departments: [
      {
        name: "Faculty of Basic Medical Sciences",
        members: [
          { name: "Assoc. Prof. Welcome O. Menezibeya", title: "HOD, Human Physiology", slug: "dr-menizibeya-osain-welcome-md-phd", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/07/Dr.-Menizibeya-Osain-Welcome-MD-PhD.avif" },
          { name: "Prof. Ibironke F. Goke", title: "Professor", slug: "professor-goke-francis-ibironke-b-sc-m-sc-mbbs-ib-md-neurophysiology", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/07/Prof.-Goke-Francis-Ibironke.avif" },
          { name: "Oluwatosin Imoleayo Oyeniran", title: "Lecturer II", slug: "oluwatosin-imoleayo-oyeniran", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Oluwatosin-Imoleayo-Oyeniran.avif" },
        ],
      },
      {
        name: "Faculty of Basic Clinical Sciences",
        members: [
          { name: "Dr. Medugu Nubwa", title: "HOD, Medical Microbiology", slug: "dr-nubwa-medugu", image: null },
          { name: "Dr. Oladipo Emmanuel", title: "HOD, Hematology", slug: "dr-sanni-emmanuel-oladipo", image: null },
          { name: "Prof. Boaz Adegboro", title: "Professor", slug: "prof-boaz-adegboro", image: null },
          { name: "Dr. Oseghale Stephen", title: "Senior Lecturer", slug: null, image: null },
          { name: "Dr. Jibril Imran", title: "Senior Lecturer", slug: "dr-jibril-imran", image: null },
          { name: "Dr. Mba Izuchukwu", title: "Lecturer I", slug: "dr-mba-izuchukwu-nnachi", image: null },
          { name: "Dr. Dallang Baman", title: "Lecturer I", slug: null, image: null },
        ],
      },
      {
        name: "Faculty of Clinical Sciences",
        members: [
          { name: "Assoc. Prof. Henry Onyebutulem", title: "HOD, Medicine & Surgery", slug: "assoc-prof-henry-onyebutulem", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Assoc.-Prof.-Onyegbutulem-Henry-C.avif" },
          { name: "Dr. Sikirat Adetoun", title: "HOD, Paediatrics", slug: "dr-sikirat-adetoun-sotimehin", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Sikirat-Adetoun-Sotimehin-.avif" },
          { name: "Dr. Aminu Mohammadu Mai (MBBS, FWACS, FICS)", title: "Professor", slug: "dr-aminu-mohammadu-mai-mbbs-fwacs-fics", image: null },
        ],
      },
    ],
  },
  {
    heading: "Faculty of Arts & Social Sciences",
    leadership: [
      { name: "Dr. Garba Dimas", title: "Ag. Dean", slug: "dr-dimas-garba-2", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Dimas-Garba.avif" },
      { name: "Dr. Jacob Shagbaor", title: "HOD, Mass Communication", slug: "jacob-shagbaor-suemo", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Dr.-Jacob-Suemo-Shagbaor.avif" },
      { name: "Dr. Ngozi Obeta Anadi", title: "HOD, Criminology & Security Studies", slug: "dr-ngozi-obeta-anadi", image: "https://nileuniversity.edu.ng/wp-content/uploads/2023/10/Dr.-Ngozi-O.-Anadi.avif" },
    ],
    departments: [
      {
        name: "Mass Communication",
        members: [
          { name: "Dr. Elega Adeola", title: "Lecturer I", slug: "dr-adeola-abdulateef-elega", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Dr.-Adeola-Abdulateef-Elega.avif" },
        ],
      },
      {
        name: "Economics",
        members: [
          { name: "Prof. Jide Oladipo", title: "Head Of Department", slug: "prof-jide-oladipo", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Prof.-Jide-Oladipo.avif" },
          { name: "Dr. Onyeka Diyoke", title: "Senior Lecturer", slug: null, image: null },
          { name: "Dr. Awe Emmanuel O", title: "Lecturer I", slug: "dr-awe-emmanuel-omoniyi", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Dr.-Awe-Emmanuel-O.avif" },
          { name: "Dr. Ebunoluwa Oyegoke", title: "Lecturer II", slug: null, image: null },
        ],
      },
      {
        name: "Criminology & Security Studies",
        members: [
          { name: "Dr. Ogye Danlami", title: "Lecturer I", slug: "dr-ogye-danlami-okolo", image: null },
          { name: "Blessing Okpala-Akonobi", title: "Lecturer II", slug: null, image: null },
        ],
      },
      {
        name: "Psychology",
        members: [
          { name: "Dr. Okere Adebisi", title: "Lecturer II", slug: "dr-okere-adebisi-victory", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Okere-Adebisi.avif" },
        ],
      },
      {
        name: "Political Science & International Relations",
        members: [
          { name: "Assoc. Prof. Hakeem Onapajo", title: "Associate Professor", slug: "dr-hakeem-onapajo", image: "https://nileuniversity.edu.ng/wp-content/uploads/Photo-for-website.avif" },
        ],
      },
    ],
  },
  {
    heading: "Faculty of Computing",
    leadership: [
      { name: "Prof. Joshua Abah", title: "Dean, Faculty of Computing", slug: "prof-joshua-abah", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/10/Dr.-Joshua-Abah.avif" },
      { name: "Prof. Prema Kirubakaran", title: "HOD, Information Technology & Systems", slug: "dr-a-prema-kirubakaran", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-A.-Prema-Kirubakaran-Deputy-VC-Central-Admin.avif" },
      { name: "Prof. Boukar Moussa Mahamat", title: "Professor", slug: "prof-moussa-mahamat-boukar", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Prof.-Boukar-Moussa-Mahamat.avif" },
      { name: "Dr. Peter Koleoso", title: "Lecturer I", slug: "dr-peter-o-koleoso", image: null },
    ],
    departments: [
      {
        name: "Software Engineering",
        members: [
          { name: "Dr. Anka Salihu", title: "Head Of Department", slug: "dr-ibrahim-anka-salihu", image: null },
          { name: "Dr. Muhammed Aliyu", title: "Senior Lecturer", slug: "dr-muhammad-a-suleiman", image: null },
          { name: "Dr. Bilkisu Larai", title: "Senior Lecturer", slug: "dr-bilkisu-l-muhammad-bello", image: "https://nileuniversity.edu.ng/wp-content/uploads/bilkisu.avif" },
        ],
      },
    ],
  },
  {
    heading: "Faculty of Engineering",
    leadership: [
      { name: "Prof. Mambo Danjuma", title: "Dean, Faculty of Engineering", slug: "dr-mambo", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Engr.-Dr.-Abdulhameed-Danjuma-Mambo.avif" },
      { name: "Dr. Temitayo Ogedengbe", title: "HOD, Mechanical Engineering", slug: "dr-temitayo-samson-ogedengbe", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Temitayo-Samson-Ogedengbe.avif" },
      { name: "Dr. Obadiah Ali", title: "HOD, Computer Engineering", slug: "dr-nyangwarimam-obadiah-ali", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Dr.-Nyangwarimam-Obadiah-Ali.avif" },
      { name: "Assoc. Prof. Omotayo Oshiga", title: "HOD, Electrical & Electronics Engineering", slug: "dr-omotayo-olabowale-oshiga", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/08/Assoc.-Prof.-Omotayo-Oshiga.avif" },
    ],
    departments: [
      {
        name: "Civil Engineering",
        members: [
          { name: "Assoc. Prof. Nwabueze Mogbo", title: "Associate Professor", slug: "dr-onyebuchi-mogbo", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Assoc.-Prof.-Nwabueze-Mogbo.avif" },
          { name: "Dr. Amuda Akeem", title: "Senior Lecturer", slug: "dr-akeem-gbenga-amuda", image: null },
          { name: "Dr. Ifeyinwa Obianyo", title: "Lecturer II", slug: "dr-ifeyinwa-ijeoma-obianyo-2", image: null },
        ],
      },
      {
        name: "Computer Engineering",
        members: [
          { name: "Prof. Sadiq Thomas", title: "Professor", slug: "assoc-prof-sadiq-thomas", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Prof.-Sadiq-Thomas.avif" },
          { name: "Prof. Steve Adeshina", title: "Professor", slug: "professor-steve-a-adeshina", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Professor-Steve-A.-Adeshina.avif" },
        ],
      },
      {
        name: "Electrical & Electronics Engineering",
        members: [
          { name: "Assoc. Prof. Oshiga Omotayo", title: "Head of Department", slug: "dr-omotayo-olabowale-oshiga", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/08/Assoc.-Prof.-Omotayo-Oshiga.avif" },
        ],
      },
      {
        name: "Petroleum & Gas Engineering",
        members: [
          { name: "Assoc. Prof. Petrus Nzerem", title: "Associate Professor", slug: "dr-petrus-nzerem", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Assoc.-Prof.-Petrus-Nzerem.avif" },
          { name: "Prof. Abdullahi Suleiman Bah Gimba", title: "Professor", slug: null, image: null },
        ],
      },
      {
        name: "Mechanical Engineering",
        members: [
          { name: "Dr. Adekunle Adeleke", title: "Associate Professor", slug: "engr-dr-adekunle-a-adeleke", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Adekunle-Adeleke.avif" },
        ],
      },
    ],
  },
  {
    heading: "Faculty of Environmental Science",
    leadership: [
      { name: "Prof. Oluwafemi Kehinde Akande", title: "Dean, Faculty of Environmental Sciences", slug: "professor-oluwafemi-kehinde-akande", image: "https://nileuniversity.edu.ng/wp-content/uploads/2026/07/Prof.-Oluwafemi.jpg" },
    ],
    departments: [
      {
        name: "Architecture",
        members: [
          { name: "Assoc. Prof. Timothy Onosahwo Iyendo", title: "Head of Department", slug: "assoc-prof-timothy-onosahwo-iyendo", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Dr.-Timothy-Iyendo.avif" },
          { name: "Dr. Ejiga Opaluwa", title: "Senior Lecturer", slug: "dr-ejiga-opaluwa", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Opaluwa-Ejiga-1.jpg" },
          { name: "Dr. Iorkaa Ayoosu", title: "Senior Lecturer", slug: "arc-dr-ayoosu-moses-iorakaa-mnia-maarches-trcn-mnes", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Arc.-Dr.-Iorakaa-Moses-Ayoosu-1-1.jpg" },
          { name: "Dr. Patrick Uwajeh", title: "Senior Lecturer", slug: "dr-patrick-c-uwajeh", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Dr.-Patrick-C.-Uwajeh.avif" },
          { name: "Arc. Solomon Aderemi Adejumo", title: "Lecturer I", slug: "arc-solomon-aderemi-adejumo", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Arc.-Adejumo-Solomon-Aderemi.avif" },
          { name: "Arc. Bernard Nnamdi Oseke", title: "Lecturer I", slug: "arc-bernard-nnamdi-oseke-2", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Arc.-Bernard-Nnamdi-Oseke.avif" },
          { name: "Arc. Umar Ibrahim", title: "Lecturer II", slug: "arc-umar-ibrahim", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Arc.-Ibrahim-Umar-1-1.jpg" },
          { name: "Ekeme Angela Otemeata", title: "Senior Technologist", slug: "ekeme-angela-otemeata", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Ekeme-Angela-Otemeata.avif" },
        ],
      },
      {
        name: "Estate Management",
        members: [
          { name: "Dr. Tenigbade Odu", title: "Lecturer I", slug: "dr-tenigbade-yewande-odu", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Tenigbade-Odu.avif" },
        ],
      },
      {
        name: "Building",
        members: [
          { name: "Dr. Adebisi Abosede Bamgbade", title: "Senior Lecturer", slug: "dr-adebisi-abosede-bamgbade", image: null },
        ],
      },
      {
        name: "Quantity Surveying",
        members: [
          { name: "Assoc. Prof. Onyebuchi Mogbo", title: "Associate Professor", slug: "dr-onyebuchi-mogbo", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Assoc.-Prof.-Nwabueze-Mogbo.avif" },
          { name: "Dr. Yakubu Sirajo", title: "Senior Lecturer", slug: "dr-sirajo-yakubu", image: null },
          { name: "Dr. Sunday Yaro", title: "Lecturer I", slug: null, image: null },
        ],
      },
    ],
  },
  {
    heading: "Faculty of Law",
    leadership: [
      { name: "Assoc. Prof. Fatima Alkali", title: "Dean, Faculty of Law", slug: null, image: null },
      { name: "Dr. Yakubu Sirajo", title: "HOD, Public & International Law", slug: "dr-sirajo-yakubu", image: null },
      { name: "Dr. Abubakar Sodangi", title: "HOD, Private & Islamic Law", slug: "dr-fadila-abubakar-sodangi", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Fadila-Abubakar-Sodangi.avif" },
    ],
    departments: [
      {
        name: "Public & International Law",
        members: [
          { name: "Prof. Salome Kigbu", title: "Professor", slug: "prof-salome-konkat-kigbu", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Prof.-Salome-Kigbu.avif" },
          { name: "Prof. Isa Yakubu", title: "Professor", slug: null, image: null },
          { name: "Dr. Chinenye Joy", title: "Lecturer I", slug: "dr-chinenye-joy-mgbeokwere", image: null },
        ],
      },
      {
        name: "Private & Islamic Law",
        members: [
          { name: "Prof. Ayodele Morocco-Clarke", title: "Professor", slug: "prof-ayodele-morocco-clarke", image: null },
          { name: "Dr. Umar Abubakar Dubagari", title: "Senior Lecturer", slug: null, image: null },
        ],
      },
    ],
  },
  {
    heading: "Faculty of Management Sciences",
    leadership: [
      { name: "Prof. May Nwoye", title: "Dean, FMS", slug: null, image: null },
      { name: "Assoc. Prof. Hauwa Lamino", title: "HOD, Business Administration", slug: "assoc-prof-hauwa-lamino-abubakar", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Hauwa-Lamino-Abubakar.avif" },
      { name: "Dr. Lucky Onmonya", title: "HOD, Accounting", slug: "dr-lucky-onmonya", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Lucky-Onmonya.avif" },
      { name: "Assoc. Prof. George Saji", title: "HOD, Banking & Finance", slug: null, image: null },
    ],
    departments: [
      {
        name: "Business Administration",
        members: [
          { name: "Assoc. Prof. Hadiza Saidu", title: "Associate Professor", slug: null, image: null },
          { name: "Assoc. Prof. Abbas Umar Ibrahim", title: "Associate Professor", slug: "dr-umar-abbas-ibrahim", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Umar-Ibrahim-Abbas.avif" },
          { name: "Assoc. Prof. Muritala Taiwo", title: "Associate Professor", slug: "assoc-prof-taiwo-adewale-muritala", image: null },
          { name: "Dr. Ogedengbe Frank", title: "Senior Lecturer", slug: "dr-frank-alaba-ogedengbe", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Frank-Alaba-Ogedengbe.avif" },
          { name: "Assoc. Prof. Aarti Sharma", title: "Associate Professor", slug: "assoc-prof-aarti-sharma", image: null },
          { name: "Dr. Gambo Nasamu", title: "Senior Lecturer", slug: "dr-nasamu-gambo", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Gambo-Nasamu.avif" },
          { name: "Dr. Akeem Bakare", title: "Senior Lecturer", slug: "dr-akeem-adewale-bakare", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Akeem.avif" },
          { name: "Dr. Francis S. Udoh", title: "Lecturer II", slug: null, image: null },
          { name: "Dr. Stanley Ajalie", title: "Lecturer II", slug: null, image: null },
          { name: "Dr. Fa'iza Maitala", title: "Lecturer II", slug: "dr-faiza-maitala", image: null },
        ],
      },
      {
        name: "Accounting",
        members: [
          { name: "Prof. Ofili Ugwudioha", title: "Professor", slug: "prof-ofili-ugwudioha", image: null },
          { name: "Dr. Ahmad Uthman", title: "Senior Lecturer", slug: "dr-ahmad-bukola-uthman-aca", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Ahmad-Bukola-Uthman.avif" },
          { name: "Dr. Ayogu Sunday", title: "Lecturer I", slug: "ayogu-sunday", image: null },
          { name: "Dr. Nduka Trust Obinna", title: "Lecturer II", slug: null, image: null },
          { name: "Dr. Abel Oigbochie", title: "Lecturer I, Public Administration", slug: "dr-abel-ehizojie-oigbochie-2", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Abel-Ehizojie-Oigbochie.avif" },
          { name: "Dr. Kolawole Ebire", title: "Lecturer II, Banking and Finance", slug: null, image: null },
        ],
      },
    ],
  },
  {
    heading: "Faculty of Science",
    leadership: [
      { name: "Prof. Mohammed Sani", title: "Dean", slug: "assoc-professor-sani-sambo-datsugwai-mohammed", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Prof.-Sani-S.D.-Mohammed-.avif" },
    ],
    departments: [
      {
        name: "Biology, Microbiology & Biotechnology",
        members: [
          { name: "Prof. Onyinye Nwagbara", title: "Professor", slug: "prof-onyinye-nwagbara", image: "https://nileuniversity.edu.ng/wp-content/uploads/2021/06/Professor-Onyinye-Nwagbara.avif" },
          { name: "Dr. George Mangse", title: "Senior Lecturer", slug: "dr-george-mangse", image: "https://nileuniversity.edu.ng/wp-content/uploads/lecturer.avif" },
          { name: "Dr. Gloria Ezeagu", title: "Lecturer I", slug: null, image: null },
          { name: "Dr. Esther Chiadikobi", title: "Lecturer I", slug: null, image: null },
          { name: "Dr. Olalekan Azeez Omotosho", title: "Lecturer II", slug: "dr-omotosho-azeez-olalekan-2", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Sharafadeen-Adetunji-ADENIJI.avif" },
          { name: "Dr. Abdullahi Hassan Ndanusa", title: "Lecturer II", slug: null, image: null },
        ],
      },
      {
        name: "Physics",
        members: [
          { name: "Dr. Adeniji Sharafadeen", title: "Lecturer I", slug: "dr-sharafadeen-adetunji-adeniji", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/07/Dr.-Sharafadeen-Adetunji-ADENIJI.avif" },
          { name: "Dr. Ani Chukwuemeka", title: "Lecturer I", slug: null, image: null },
          { name: "Dr. Dahiru Muhammed", title: "Lecturer I", slug: null, image: null },
        ],
      },
      {
        name: "Biochemistry",
        members: [
          { name: "Prof. Uthman Taofik", title: "Professor", slug: "prof-taofik-uthman", image: "https://nileuniversity.edu.ng/wp-content/uploads/2024/08/Uthman-Taofik.avif" },
          { name: "Dr. Ohanaka Judith", title: "Senior Lecturer", slug: "dr-judith-nkechinyere-ohanaka", image: null },
        ],
      },
      {
        name: "Chemistry",
        members: [
          { name: "Dr. Serdar Surgun", title: "Professor", slug: null, image: null },
          { name: "Dr. Hassana L. Abubakar", title: "Lecturer II", slug: null, image: null },
        ],
      },
    ],
  },
]

export function getAllStaffSlugs(): string[] {
  const slugs: string[] = []
  for (const faculty of staffFaculties) {
    for (const member of faculty.leadership) {
      if (member.slug) slugs.push(member.slug)
    }
    for (const dept of faculty.departments) {
      for (const member of dept.members) {
        if (member.slug) slugs.push(member.slug)
      }
    }
  }
  return Array.from(new Set(slugs))
}
