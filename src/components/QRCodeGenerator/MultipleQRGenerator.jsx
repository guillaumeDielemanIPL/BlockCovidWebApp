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
const MultipleQRGenerator = () => {
  const qrs = JSON.parse(localStorage.getItem("qrs"));
  if(qrs !== null){
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
            <Image source={ img.image } />
          </Page>
        ))}
      </Document>
    );
    return (
      <div>
        <HeaderLogged />
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="blockCovidQRCodes.pdf"
        >
          {({loading}) =>
            loading
              ? "Chargement du document..."
              : "Télécharger maintenant vos QR codes!"
          }
        </PDFDownloadLink>
        <div className="large"/>
        <Footer />
      </div>
    );
  }else{
    return (
        <div>
          <HeaderLogged />
          <div className="text-center">Aucun document disponible</div>
          <div className="large"/>
          <Footer />
        </div>
    );
  }
};

export default MultipleQRGenerator;
