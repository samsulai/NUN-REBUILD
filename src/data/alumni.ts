export type AlumniMember = {
  name: string
  role: string
  avatar: "male" | "female"
}

export const alumniIntro =
  "We take great pride in our graduates and would like to share their career journeys and memories of their time at Nile University with you. Alumni profiles are an excellent way for prospective students to get a sense of what it's like to live and study at Nile. They also help you understand the potential paths your degree can lead you to. By sharing the stories of our alumni, we hope to inspire you to pursue similar professional paths and motivate you to succeed. The Nile University alumni community is an organized association that aims to collaborate and strengthen relationships with our graduates as they pursue their dreams. Nile University maintains and fosters a highly engaged and vibrant community of alumni worldwide. Our alumni associations and networks provide a great opportunity to stay connected with friends and classmates."

export const alumniBenefits = [
  {
    title: "Keeping in contact",
    body: "After graduation, you and your classmates will join the workforce or go on to further study all over the world with your qualifications. By joining Nile's alumni associations and regularly participating in their social events, you will be able to stay in touch with your university classmates.",
  },
  {
    title: "Assistance",
    body: "An alumni network is comprised of people who have been in the same position as you and have grown both personally and professionally from their experiences. As a result, they are an excellent source of professional assistance.",
  },
  {
    title: "Employment and Career Guidance",
    body: "Having fellow alumni from Nile University who are now working in your field can prove to be an invaluable asset when embarking on your career journey. This network of individuals can offer you not only essential guidance on how to excel in your industry but also provide you with valuable insights into potential job opportunities.",
  },
  {
    title: "Collaboration",
    body: "Through our alumni association, students can easily get enrolled in the CELL program for advanced career or professional studies.",
  },
  {
    title: "Fun Activities together",
    body: "By joining our vibrant alumni groups, you get the opportunity to reestablish connections with your former classmates while engaging in a wide range of thrilling activities such as sports events, picnics, and much more.",
  },
]

export const alumniExecutives: AlumniMember[] = [
  { name: "Oyanki Muhammed", role: "President", avatar: "male" },
  { name: "Rahma Suleiman", role: "Vice-President", avatar: "female" },
  { name: "Muhammed Dikko", role: "General Secretary", avatar: "male" },
  { name: "Amira Salaudeen", role: "Welfare Secretary", avatar: "female" },
  { name: "Nabila Yusuf Bomoi", role: "Treasurer", avatar: "female" },
  { name: "Amina Abdullahi Bello", role: "P.R.O", avatar: "female" },
  { name: "Akawu Biliyok", role: "Country Ambassador to UK", avatar: "male" },
]

export const stateAmbassadors: AlumniMember[] = [
  { name: "Ahmad Abubakar", role: "Bauchi State", avatar: "male" },
  { name: "Amina Muhammed", role: "Nassarawa State", avatar: "female" },
  { name: "Ahmad Shehu Ahmad", role: "Sokoto State", avatar: "male" },
  { name: "Yakubu Nuhu", role: "Borno State", avatar: "male" },
  { name: "Mansur Abubakar", role: "Zamfara State", avatar: "male" },
  { name: "Ibrahim Ladan-Baki", role: "Lagos State", avatar: "male" },
  { name: "Maryam Danjuma Abubakar", role: "Kaduna State", avatar: "female" },
]

export const avatarSrc: Record<AlumniMember["avatar"], string> = {
  male: "/Male-Avatar.avif",
  female: "/Female-Avatar.avif",
}
