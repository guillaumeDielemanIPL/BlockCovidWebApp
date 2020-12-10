import React,{ useMemo} from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

var QRCode = require("qrcode");

const SingleQRGenerator = ({lieu}) => {
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
  QRCode.toDataURL(lieu.qrCode, function (err, url) {
    base64Image = "data:application/pdf" + url.slice(url.indexOf(";"));
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image source={{ uri: base64Image }} />
      </Page>
    </Document>
  );
  return useMemo(() =>
    (<div>
      <PDFDownloadLink
        className="text-center"
        document={<MyDocument />}
        fileName={lieu.nom}
      >
        {({loading}) =>
          loading ? "Chargement du document..." : 
          <button
              className="btn btn-primary btn-lg"
              type="button"
            >
              Télécharger
        </button>
        }
      </PDFDownloadLink>
    </div>),[lieu.nom]
  );
};

export default SingleQRGenerator;
