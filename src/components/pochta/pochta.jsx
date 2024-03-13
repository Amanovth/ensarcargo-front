import "./pochta.css";
// import img1 from '../img/1.jpg'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../UI/Loading/Loading";
import { api } from "../../Api";

export default function Pochta() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/login/", {
        email,
        password,
      });
      localStorage.setItem("email", email);
      if (response.data.response === true) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        if (response.data.email) {
          alert(response.data.email);
        }
        if (response.data.message) {
          alert(response.data.message);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="box">
      <div className="block-header">
        <div>
          <div>{/* <img src={img1} alt="" className='img-ensar' /> */}</div>
          <form onSubmit={handleSubmit} className="block-pochta">
            <div className="block-input">
              <label htmlFor="" className="label">
                Почта
              </label>
              <input
                value={email}
                type="text"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="block-inputs">
              <label htmlFor="" className="label">
                Сыр сөз
              </label>
              <input
                value={password}
                type="password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <div className='block-box'>
                            <input type="checkbox" className='checkbox' />
                            <p className='check'>Эске сактоо</p>
                        </div> */}
            <div className="block-slow">
              <a href="/forgot" className="ssylka">
                Сиз сыр сөздү унуттунузбу?
              </a>
              <button onSubmit={handleSubmit} className="btn">
                {loading ? <Loading /> : "Кирүү"}
              </button>
            </div>
          </form>
          <NavLink to="/register" className="btn-nav">
            <button className="btn2">Катталуу</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
