import axios from "axios";

const baseUrl =
  "https://blockcovid-pfe.azurewebsites.net/api/etablissement/lieux";

const getAll = () => {
  const token = localStorage.getItem("token");
  const request = axios.get(baseUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const token = localStorage.getItem("token");
  const request = axios.post(baseUrl, newObject, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request.then((response) => response.data);
};

export { getAll, create };
