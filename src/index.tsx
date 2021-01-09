import { h, render } from "preact";
import { Document, Page, pdfjs } from "react-pdf";
import { Viewer } from "@react-pdf-viewer/core";

// https://github.com/wojtekmaj/react-pdf/issues/321
if (pdfjs) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
}

// import "@react-pdf-viewer/core/lib/styles/index.css";

const url =
  "https://ojisan-toybox.github.io/universal-pdf-component/example.pdf";
const Main = () => {
  return (
    <div>
      <h1>iframe</h1>
      <iframe src={url} scrolling="no">
        <p>It appears your web browser doesn't support iframes.</p>
      </iframe>
      <h1>object</h1>
      <object data={url} type="application/pdf">
        <p>
          It appears you don't have Adobe Reader or PDF support in this web
          browser. <a href={url}>Click here to download the PDF</a>. Or{" "}
          <a href="http://get.adobe.com/reader/" target="_blank">
            click here to install Adobe Reader
          </a>
          .
        </p>
        <embed src={url} type="application/pdf" />
      </object>
      <h1>object and embed</h1>
      <object data={url} type="application/pdf">
        <p>
          It appears you don't have Adobe Reader or PDF support in this web
          browser. <a href={url}>Click here to download the PDF</a>. Or{" "}
          <a href="http://get.adobe.com/reader/" target="_blank">
            click here to install Adobe Reader
          </a>
          .
        </p>
        <embed src={url} type="application/pdf" />
      </object>
      <h1>embed</h1>
      <embed width="500" height="375" src={url} type="application/pdf"></embed>
      <h1>google drive</h1>
      <embed
        src={`https://drive.google.com/viewerng/
viewer?embedded=true&url=${url}`}
        width="500"
        height="375"
      ></embed>
      <h1>react-pdf</h1>
      <Document file={url}>
        <Page pageNumber={1} />
      </Document>
      <h1>react-pd-viewer</h1>
      <Viewer fileUrl={url} />
    </div>
  );
};

render(<Main></Main>, document.body);
