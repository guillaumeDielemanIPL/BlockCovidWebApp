import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
var QRCode = require("qrcode");
const QRGenerator = () => {
  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: "row",
  //     backgroundColor: "#E4E4E4",
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1,
  //   },
  // });
  // let base64Image;
  // QRCode.toDataURL("Hello world on a QR code", function (err, url) {
  //   base64Image = "data:application/pdf" + url.slice(url.indexOf(";"));
  //   console.log(base64Image);
  // });
  // const MyDocument = () => (
  //   <Document>
  //     <Page size="A4" style={styles.page}>
  //       {/* <Image source={{ uri: base64Image }} /> */}
  //     </Page>
  //   </Document>
  // );
  return (
    <div>
      <div>
        {/* <PDFDownloadLink
          document={<MyDocument />}
          fileName="blockCovidQRCodes.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading
              ? "Chargement du cocument..."
              : "Télécharger maintenant vos QR codes!"
          }
        </PDFDownloadLink> */}
      </div>
    </div>
  );
};

export default QRGenerator;
