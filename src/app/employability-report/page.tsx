import type { Metadata } from "next"
import PdfReportPage from "@/components/PdfReportPage"

export const metadata: Metadata = {
  alternates: { canonical: "/employability-report" },
  title: "Employability Report",
  description:
    "How Nile University graduates fare in the world of work: outcomes, employer partnerships, and the skills that set them apart.",
}

function EmployabilityReport() {
  return (
    <PdfReportPage
      title="Employability Report"
      description="How Nile University graduates fare in the world of work: outcomes, employer partnerships, and the skills that set them apart."
      pdfSrc="/employability-report-2025.pdf"
      reportLabel="Employability Report 2025"
      fileSize="2.5 MB"
    />
  )
}

export default EmployabilityReport
