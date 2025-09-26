
import { FaFileDownload } from "react-icons/fa";

function DownloadPDF() {
  const pdfUrlEN = "/resume/EN_WEBDEV_2024.pdf";
  const pdfUrlFR = "/resume/FR_WEBDEV_2024.pdf";

  return (
    <div className="download-container">
      <h4>Download My Resume:</h4>
      <div className="resumeBtnContainer">

      <a href={pdfUrlEN} target="_blank" download="EN_WEBDEV_2024-compressed.pdf" className="download-link"><FaFileDownload/> Resume (english)</a>
      <a href={pdfUrlFR} target="_blank" download="Diego_Rivera_Resume_French.pdf" className="download-link"><FaFileDownload/> Resume (french)</a>      
      </div>
        
    </div>
  );
}

export default DownloadPDF;
