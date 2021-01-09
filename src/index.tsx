import { h, render } from "preact";

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
      <object data={url} type="application/pdf"></object>
      <h1>embed</h1>
      <embed width="500" height="375" src={url} type="application/pdf"></embed>
      <h1>google drive</h1>
      <embed
        src={`https://drive.google.com/viewerng/
viewer?embedded=true&url=${url}`}
        width="500"
        height="375"
      ></embed>
      <h1>pdfjs</h1>
    </div>
  );
};

render(<Main></Main>, document.body);
