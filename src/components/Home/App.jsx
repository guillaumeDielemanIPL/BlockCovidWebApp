import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [url, setUrl] = useState("");
  const [type, setType] = useState("GET");
  const [data, setData] = useState("");
  const [resp, setResp] = useState("");
  const onChangeUrl = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };
  const onChangeType = (event) => {
    event.preventDefault();
    setType(event.target.value);
  };
  const onChangeData = (event) => {
    event.preventDefault();
    setData(event.target.value);
  };
  const onSendRequest = (event) => {
    event.preventDefault();
    const request = {
      url: url,
      type: type,
      data: data,
    };
    switch (type) {
      case "GET":
        console.log("GET");
        axios.get(url).then((response) => {
          console.log(response);
        });
        break;
      case "POST":
        break;
      case "DELETE":
        break;
      case "UPDATE":
        break;

      default:
        break;
    }
    console.log("Send Request with", request);
  };
  return (
    <div>
      <h1>API Tester :</h1>
      <form>
        <label>URL</label>
        <input type="text" onChange={onChangeUrl}></input>
        <br />
        <label>Type</label>
        <select onChange={onChangeType}>
          <option>GET</option>
          <option>POST</option>
          <option>DELETE</option>
          <option>UPDATE</option>
        </select>
        <br />
        <label>Data</label>
        <br />
        <textarea onChange={onChangeData}></textarea>
        <br />
        <button onClick={onSendRequest}>ENVOYER LA REQUETE</button>
      </form>
      <h3>Response :</h3>
      <p>{resp}</p>
    </div>
  );
};

export default App;
