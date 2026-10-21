import type { Metadata } from "next"
import PdfReportPage from "@/components/PdfReportPage"

export const metadata: Metadata = {
  alternates: { canonical: "/prospectus" },
  title: "Download Prospectus",
  description: "Download the official Nile University of Nigeria prospectus, with details on programmes, admissions, and campus life.",
}

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
