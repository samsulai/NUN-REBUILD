import PdfReportPage from "../components/PdfReportPage"

function WelcomeBooklet() {
  return (
    <PdfReportPage
      title="Nile Welcome Booklet"
      description="Your guide to getting started at Nile University."
      pdfSrc="/nile-welcome-booklet.pdf"
      reportLabel="Nile Welcome Booklet"
      fileSize="2.9 MB"
    />
  )
}

export default WelcomeBooklet
