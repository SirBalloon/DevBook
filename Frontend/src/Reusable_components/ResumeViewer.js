import "../CSS/Header2.css";

const ResumeViewer = () => {
    return(
        <div className="homeBody">
            <iframe
                src="/PDFdata/Resume.pdf"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="My Resume"
            ></iframe>
            <div style={{ textAlign: "right", marginTop: "10px" }}>
                <button>Close</button>
            </div>
        </div>
    );
}

export default ResumeViewer