export const accommodationIntro = [
  "Nile University offers on-campus accommodation for both male and female students, featuring air-conditioned rooms, common areas, kitchenettes (female hostel), and a multi-purpose hall. Security is ensured with 24/7 CCTV monitoring and security personnel.",
  "Each room is furnished with study tables, wardrobes, and beds. To enhance the student experience, each hostel has in-residence supervisors and managers to ensure well-being and adherence to rules.",
]

export const feesCover = [
  "Power and water supply",
  "24/7 surveillance and security system",
  "Access to clinic emergency services",
  "Complimentary Wi-Fi services",
  "Complimentary sporting area and game rooms",
]

export type RoomFee = {
  roomClass: string
  occupancy: string
  perSemester: string
  perSession: string
  note?: string
  sharedBy?: number
  description?: string
}

export const roomFees: RoomFee[] = [
  { roomClass: "Executive room", sharedBy: 3, occupancy: "Room of 3", perSemester: "₦1,250,000", perSession: "₦2,500,000" },
  { roomClass: "Deluxe room", sharedBy: 4, occupancy: "Room of 4", perSemester: "₦950,000", perSession: "₦1,900,000" },
  { roomClass: "Classic room", sharedBy: 5, occupancy: "Room of 5", perSemester: "₦750,000", perSession: "₦1,500,000" },
  { roomClass: "Standard room", sharedBy: 6, occupancy: "Room of 6", perSemester: "₦625,000", perSession: "₦1,250,000" },
  { roomClass: "Triple room", sharedBy: 3, occupancy: "Asokoro", perSemester: "₦1,250,000", perSession: "₦2,500,000", note: "Asokoro is charged per session." },
]

export const packageFees: RoomFee[] = [
  { roomClass: "Meal package", occupancy: "Optional", description: "Breakfast and dinner", perSemester: "₦665,000", perSession: "₦1,330,000" },
  { roomClass: "Laundry package", occupancy: "Optional", description: "Maximum of 30 clothing items allowed weekly.", perSemester: "₦165,000", perSession: "₦330,000", note: "Maximum of 30 clothing items allowed weekly." },
]

export const applyGroups = [
  {
    title: "Log in",
    steps: [
      "Sign in at student.nileuniversity.edu.ng with your official student email address and password",
      "Navigate to the Student Hub Portal from your dashboard",
      "Complete your biodata information",
    ],
  },
  {
    title: "Choose your room",
    steps: [
      "Click Add Application to create a hostel application",
      "Select Manage to choose a building and room category",
      "To add meals or laundry, subscribe after completing the hostel application, under the Application tab",
    ],
  },
  {
    title: "Pay & confirm",
    steps: [
      "Make payment for your selected room category",
      "Payment confirms and validates your hostel application",
      "Review the Hostel Policy for important guidelines and regulations",
    ],
  },
]

export const accommodationFaqs = [
  {
    question: "What does the hostel fee cover?",
    answer:
      "Power and water supply, 24/7 surveillance and security system, access to clinic emergency services, complimentary Wi-Fi services, and complimentary sporting area and game rooms.",
  },
  {
    question: "Are meals and laundry compulsory?",
    answer:
      "No. The base fee is the only required payment to secure hostel accommodation. All other fees (laundry, breakfast, and dinner) are optional and at the student's discretion.",
  },
  {
    question: "Can I pay per semester or per session?",
    answer:
      "Room fees are listed per semester and per session. Asokoro is charged per session.",
  },
  {
    question: "What is in each room?",
    answer:
      "Each room is furnished with study tables, wardrobes, and beds. Each hostel also has in-residence supervisors and managers to ensure well-being and adherence to rules.",
  },
  {
    question: "How secure is the hostel?",
    answer: "Security is ensured with 24/7 CCTV monitoring and security personnel.",
  },
]

export const accommodationNote =
  "The base fee is the only required payment to secure hostel accommodation. All other fees (laundry, breakfast, and dinner) are optional and at the student's discretion."

// Nile University hostel rules video.
export const hostelVideoUrl = "https://www.youtube.com/watch?v=WDTaFYQugf0"
