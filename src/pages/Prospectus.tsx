import PdfReportPage from "../components/PdfReportPage"

function Prospectus() {
  return (
    <PdfReportPage
      title="Download Prospectus"
      description="Please find our latest catalogue and prospectus documents below."
      pdfSrc="/prospectus-2026.pdf"
      reportLabel="Nile University Mini Prospectus 2026"
      fileSize="66 MB"
      requireEmail
      leadEndpoint="https://script.google.com/macros/s/AKfycbzLRy8OyzGza6DWr0pheg1cSI_qn2A6V_EyaN2_dLYptnepdz8HSWgjl8h0-qV1Iipq5A/exec"
    />
  )
}

export default Prospectus
