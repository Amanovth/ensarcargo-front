import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { api } from "../../Api";
import Loading from "../UI/Loading/Loading";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const local = localStorage.getItem("token");
  const [code, setCode] = useState(0);
  const [dataCode, setDataCode] = useState([]);

  const headers = {
    Authorization: `Token ${local}`,
  };

  useEffect(() => {
    if (local) {
      api
        .get("user-info/", { headers })
        .then((response) => {
          setData(response.data);
        })
        .then((error) => {
          console.log(error);
        });
    }
  }, [local]);

  const send = async () => {
    try {
      const response = await api.get(`check/${code}`, { headers });
      if (response.data.response === true) {
        setDataCode(response.data);
      } else {
        setDataCode(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(code);

  return (
    <div className="dashboard">
      <p>{data.code}</p>
      <p>{data.full_name}</p>
      <p>{data.phone}</p>
      <form action="">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="number"
          className="trek-input"
          placeholder="Трек код"
          required
        />
      </form>
      <button onClick={send} className="trek-btn">
        Издөө
      </button>
      {dataCode ? (
        <>
          <h1 style={{ textAlign: "center" }}>{dataCode.date}</h1>
          <h1 style={{ textAlign: "center" }}>{dataCode.info}</h1>
        </>
      ) : (
        <h1 style={{ textAlign: "center", color: "red" }}>Нет данных</h1>
      )}
    </div>
  );
};

export default Dashboard;
