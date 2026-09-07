export const ugIntro =
  "Applicants to undergraduate programmes may receive scholarships subject to their JAMB or O'Level (WAEC / NECO) results, as announced by the Board of Trustees of Nile University of Nigeria (“NILE”). For the 2026/2027 academic session, scholarships are offered on the following criteria."

// All undergraduate programmes EXCEPT Law & Medicine. Qualification is by JAMB
// score OR O'Level result, with a combined tier for 100%.
export const jambScale = [
  { qualification: "JAMB 275 and above", scholarship: "10%" },
  { qualification: "JAMB 300 and above", scholarship: "20%" },
  { qualification: "JAMB 320 and above", scholarship: "30%" },
  { qualification: "5 A1 and above at O’Level (WAEC / NECO)", scholarship: "10%" },
  { qualification: "JAMB 350 and above and 5 A1 and above at O’Level", scholarship: "100%" },
]

export const aLevelScale = [
  { result: "3 A's", nileSps: "25%", others: "10%" },
  { result: "2 A's", nileSps: "15%", others: "5%" },
]

export const ugConditions = [
  "The “A” grades must be achieved in Mathematics, English, and the subjects directly related (core) to the applicant’s chosen degree programme. For example, in B.Eng. Electrical & Electronics Engineering the “A” grades must — in addition to Maths and English — be achieved in Physics, etc.",
  "External examination results for WAEC & NECO are not acceptable.",
  "Only JAMB and O’Level results from the academic year in which admission is offered will be accepted. Results from previous years, or combinations of results from different academic years, are not allowed.",
]

export const pgScholarships = [
  {
    percent: "50%",
    title: "First-class Nile graduates",
    detail:
      "First-class graduates of NILE undergraduate programmes are eligible for a 50% scholarship towards their Master’s or PGD programme.",
  },
  {
    percent: "20%",
    title: "Other Nile graduates",
    detail:
      "NILE undergraduate graduates with degrees other than first class are eligible for a 20% scholarship towards their Master’s or PGD programme.",
  },
  {
    percent: "20%",
    title: "Returning postgraduate alumni",
    detail:
      "Applicants who already hold a postgraduate degree from NILE and are returning for another postgraduate degree are eligible for a 20% scholarship.",
  },
]

export const sportIntro =
  "Applicants with outstanding performance in sports at national or professional level are eligible for a 100% scholarship for undergraduate studies, subject to the approval of the NILE Board of Trustees, provided they represent NILE in their respective sports."

export const sportGuidelines = [
  "Applicants for undergraduate programmes with a JAMB score of 350 and above and at least 5 A’s in their O’Level results (WAEC or NECO) are eligible for a 100% scholarship.",
  "The “A” grades must be achieved in Mathematics, English, and the core subjects for the chosen degree programme (e.g. Physics for B.Eng. Electrical & Electronics Engineering).",
  "Only JAMB and O’Level results from the academic year in which admission is offered will be accepted.",
  "Candidates may not submit results from previous years, and combining results from different academic years is not allowed.",
  "Scholarship recipients must maintain a minimum CGPA of 3.50 at the end of each academic session to retain their scholarship.",
  "Recipients must not be involved in any act of misconduct or contravene NILE’s regulations.",
  "Scholarships are limited to quotas and availability as decided by the Management of NILE, on a first-come, first-served basis.",
  "NILE reserves the right to withdraw a scholarship should the need arise.",
]

export const siblingDiscount = [
  { children: "Two children", discount: "5%" },
  { children: "Three children", discount: "10%" },
  { children: "Four children", discount: "15%" },
  { children: "Five children and above", discount: "20%" },
]

export const siblingNotes = [
  "The sibling discount is not automatic and must be applied for by either biological parent.",
  "Siblings must share a common biological parent.",
  "The discount applies to each new sibling in the current semester and is valid for the outstanding normal duration of studies, upon successful application and approval.",
]

export const institutionDiscount = [
  { applicants: "5 – 9 applicants", discount: "10%" },
  { applicants: "10 – 19 applicants", discount: "15%" },
  { applicants: "20 applicants and above", discount: "20%" },
]

export const beforeYouApply = [
  "Applicants cannot be considered for discounts or scholarships under more than one criterion. Where an applicant is eligible under multiple conditions, they must apply under the option offering the highest discount or scholarship. There are no substitutes thereafter.",
  "In addition to meeting the eligibility criteria, applicants must apply for a discount or scholarship to be considered.",
  "Applications are valid only at the point of entry — discounts and scholarships are not applied retrospectively.",
  "Discounts and scholarships do not apply to hostel fees.",
  "All discounts and scholarships are limited to quotas decided by the Management of NILE, on a first-come, first-served basis.",
]
