import React, { useState, useEffect } from "react";
import "./Activation.css";
import { api } from "../../Api";
import { useNavigate } from "react-router-dom";
import Loading from "../UI/Loading/Loading";

const Activation = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const fetchData = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      alert("Введите шестизначный код", "error");
    }
    if (code.length == 6) {
      setLoading(true);
      try {
        const response = await api.post("/verify-email/", {
          v_code: code,
          email: email,
        });
        if (response.data.response === true) {
          navigate("/dashboard");
          localStorage.setItem("email", email);
          localStorage.setItem("token", response.data.token);
        } else {
          alert(response.data.message, "error");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="auth">
      <div className="activation">
        <div className="container">
          <div className="login_form">
            <div className="login_form_head">
              <span className="h1">Введите код</span>
            </div>
            <div className="login_form_body">
              <p>Мы отправили код на вашу электронную почту</p>
              <form onSubmit={fetchData}>
                <input
                  style={{ textAlign: "center" }}
                  className="input_form"
                  value={code}
                  type="number"
                  placeholder="Код потверждения"
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  style={{ marginTop: 20 }}
                  disabled={loading}
                  onSubmit={fetchData}
                  className="button_form"
                >
                  {loading ? <Loading /> : "Подвердить"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activation;
