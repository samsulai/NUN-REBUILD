import PdfReportPage from "../components/PdfReportPage"

function MystiqueMagazine() {
  return (
    <PdfReportPage
      title="Mystique Magazine"
      description="Nile University's student-run magazine, showcasing campus life, voices, and stories."
      pdfSrc="/mystique-magazine.pdf"
      reportLabel="Mystique Magazine, Volume 1, 2024"
      fileSize="5.8 MB"
    />
  )
}

export default MystiqueMagazine
