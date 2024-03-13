import React, { useState } from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api";
import Loading from "../UI/Loading/Loading";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/forgot-password/", {
        email,
      });
      if (response.data.response === true) {
        navigate("/login");
      } else {
        if (response.data.message) {
          alert(response.data.message);
        }
        setError(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <div className="forgot_password">
        <div className="container">
          <div className="login_form">
            <div className="login_form_head">
              <span className="h1">Забыли пароль?</span>
            </div>
            <div className="login_form_body">
              <form onSubmit={handleSubmit} className="form_forgot">
                <p>Мы отправим код на вашу электронную почту</p>
                <div className="input_box">
                  {/* <label className="label_form">E-mail</label> */}
                  <input
                    className="input_form"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Электронная почта"
                  />
                  {error.email && <p className="red">{error.email}</p>}
                </div>
                <button onSubmit={handleSubmit} className="button_form">
                  {loading ? <Loading /> : "Получить код"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
