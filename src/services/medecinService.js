import axios from "axios";

const baseUrl = "https://blockcovid-pfe.azurewebsites.net/api/medecin/qrcode";

const create = (nbOfQrs) => {
  const request = axios.post(
    baseUrl,
    { nbrQRCode: nbOfQrs.toString() },
    {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }
  );
  return request.then((response) => response.data);
};

export { create };
