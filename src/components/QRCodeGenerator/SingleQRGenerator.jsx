import React from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import HeaderLogged from "components/Headers/HeaderLogged";
import Footer from "components/SharedComponents/Footer";
var QRCode = require("qrcode");
const SingleQRGenerator = () => {
  const qr = localStorage.getItem("qr");
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  let base64Image;
  QRCode.toDataURL(qr, function (err, url) {
    base64Image = "data:application/pdf" + url.slice(url.indexOf(";"));
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image source={{ uri: base64Image }} />
      </Page>
    </Document>
  );
  return (
    <div>
      <HeaderLogged />
      <PDFDownloadLink
        className="text-center"
        document={<MyDocument />}
        fileName="blockCovidQRCode.pdf"
      >
        Télécharger maintenant ce QR code!
      </PDFDownloadLink>
      <Footer />
    </div>
  );
};

export default SingleQRGenerator;
