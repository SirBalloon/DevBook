import "../CSS/Header2.css";

export default function ResumeViewer({ onClose }) {
  return (
    <div className="resumeOverlay">
      <div className="resumeModal">
        <iframe
          src="/PDFdata/Resume.pdf"
          style={{ width: "100%", height: "90vh", border: "none" }}
          title="My Resume"
        ></iframe>
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
