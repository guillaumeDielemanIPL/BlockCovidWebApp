import React from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
var QRCode = require("qrcode");
const QRGenerator = ({ qrs }) => {
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
  let base64Images = [];
  for (let i = 0; i < qrs.length; i++) {
    QRCode.toDataURL(qrs[i].contenu, function (err, url) {
      base64Images[i] = {
        image: "data:application/pdf" + url.slice(url.indexOf(";")),
        id: i,
      };
    });
  }

  const MyDocument = () => (
    <Document>
      {base64Images.map((img) => (
        <Page key={img.id} size="A4" style={styles.page}>
          <Image source={{ uri: img.image }} />
        </Page>
      ))}
      {/* <Image source={{ uri: base64Image }} /> */}
    </Document>
  );
  return (
    <div>
      <div>
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="blockCovidQRCodes.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading
              ? "Chargement du cocument..."
              : "Télécharger maintenant vos QR codes!"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default QRGenerator;
