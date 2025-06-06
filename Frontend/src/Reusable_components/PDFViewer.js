import React from "react";
import {Document , Page} from 'react-pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const PDFViewer = () => {
  return (
    <div>
      <Document file="/PDFdata/Project_Plan_PA2522.pdf">
        <Page pageNumber={1}/>
      </Document>
    </div>
    );
};

export default PDFViewer;
