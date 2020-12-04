import React from "react";
import { Document, Page, StyleSheet, Image } from "@react-pdf/renderer";
const { PDFDownloadLink, PDFViewer } = require("@react-pdf/renderer");
const QRDownloader = ({ base64Image }) => {
  console.log("MyProps :", base64Image);
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
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image source={{ uri: base64Image }} />
      </Page>
    </Document>
  );
  return (
    <div>
      <label>Preview :</label>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
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
  );
};
export default QRDownloader;
