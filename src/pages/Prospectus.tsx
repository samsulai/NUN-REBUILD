import PdfReportPage from "../components/PdfReportPage"

function Prospectus() {
  return (
    <PdfReportPage
      title="Download Prospectus"
      description="Please find our latest catalogue and prospectus documents below."
      pdfSrc="/prospectus-2026.pdf"
      reportLabel="Nile University Mini Prospectus 2026"
      fileSize="66 MB"
    />
  )
}

export default Prospectus
