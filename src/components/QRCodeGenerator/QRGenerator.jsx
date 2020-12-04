import React, { useState } from "react";
import QRDownloader from "./QRDownloader";
var QRCode = require("qrcode");
const QRGenerator = () => {
  const [text, settext] = useState("");
  const [base64Image, setbase64Image] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    QRCode.toDataURL(text, function(err, url) {
      setbase64Image("data:application/pdf" + url.slice(url.indexOf(";")));
      console.log(base64Image);
    });
  };
  const onTextChange = (event) => {
    event.preventDefault();
    settext(event.target.value);
  };
  if (base64Image.length > 1) {
    {
      console.log("send to Downloader :", base64Image);
    }
    return <QRDownloader base64Image={base64Image} />;
  } else {
    return (
      <div>
        <div>
          <label>Entrez qqch à encoder dans le QR Code :</label>
          <input onChange={onTextChange} type="text" />
          <button onClick={onSubmit}>Générer</button>
        </div>
      </div>
    );
  }
};

export default QRGenerator;
