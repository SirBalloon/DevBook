import React from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import "../CSS/PDF.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;

const PDFViewer = () => {
  const fileUrl = "https://sirballoon.github.io/DevBook/PDFdata/Project_Plan_PA2522.pdf";

  return (
    <div className="pdf-scroll">
      <Document
        file={fileUrl}
        onLoadSuccess={() => console.log("PDF loaded successfully")}
        onLoadError={(err) => console.error("PDF load error", err)}
      >
        <Page pageNumber={1} width={595}/>
      </Document>
    </div>
  );
};

export default PDFViewer;
