import { h, render } from "preact";

const Main = () => {
  return (
    <div>
      <h1>iframe</h1>
      <iframe
        src="https://www.adobe.com/products/pdfjobready/pdfs/pdftraag.pdf"
        style="width: 100%; height: 100%;"
        scrolling="no"
      >
        <p>It appears your web browser doesn't support iframes.</p>
      </iframe>
      <h1>object</h1>
      <object
        data="https://www.adobe.com/products/pdfjobready/pdfs/pdftraag.pdf"
        type="application/pdf"
      >
        <p>
          It appears you don't have Adobe Reader or PDF support in this web
          browser.{" "}
          <a href="https://www.adobe.com/products/pdfjobready/pdfs/pdftraag.pdf">
            Click here to download the PDF
          </a>
          . Or{" "}
          <a href="http://get.adobe.com/reader/" target="_blank">
            click here to install Adobe Reader
          </a>
          .
        </p>
        <embed
          src="https://www.adobe.com/products/pdfjobready/pdfs/pdftraag.pdf"
          type="application/pdf"
        />
      </object>
      <h1>embed</h1>
      <embed
        width="500"
        height="375"
        src="https://www.adobe.com/products/pdfjobready/pdfs/pdftraag.pdf"
        type="application/pdf"
      ></embed>
      <h1>google drive</h1>
      <embed
        src="https://drive.google.com/viewerng/
viewer?embedded=true&url=https://www.adobe.com/products/pdfjobready/pdfs/pdftraag.pdf"
        width="500"
        height="375"
      ></embed>
      <h1>pdfjs</h1>
    </div>
  );
};

render(<Main></Main>, document.body);
