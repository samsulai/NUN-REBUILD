import PdfReportPage from "../components/PdfReportPage"

function EmployabilityReport() {
  return (
    <PdfReportPage
      title="Employability Report"
      description="How Nile University graduates fare in the world of work: outcomes, employer partnerships, and the skills that set them apart."
      pdfSrc="/employability-report-2023.pdf"
      reportLabel="Employability Report 2023"
      fileSize="3.1 MB"
    />
  )
}

export default EmployabilityReport
