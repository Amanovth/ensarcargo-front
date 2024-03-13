import "./register.css";
// import img1 from '../img/1.jpg'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../UI/Loading/Loading";
import { api } from "../../Api";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    first_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (inputData.password === inputData.confirm_password) {
      const dataNew = {
        email: inputData.email,
        phone: inputData.phone,
        full_name: inputData.first_name,
        password: inputData.password,
        password2: inputData.confirm_password,
      };
      try {
        const response = await api.post("/register/", dataNew);
        if (response.data.response === true) {
          localStorage.setItem("email", inputData.email);
          navigate("/activation");
          alert("данные в консоли");
          console.log(response.data);
        } else {
          if (response.data.email) {
            alert(response.data.email);
          }
          if (response.data.phone) {
            alert(response.data.phone);
          }
          if (response.data.error) {
            alert(response.data.error);
          }
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      alert("Пароли не совпадают", "error");
    }
  };

  return (
    <div>
      <div className="boxing">
        <div className="block-main">
          <div>{/* <img src={img1} alt="" className='img-ensar2' /> */}</div>
          <div className="block-main_two">
            <form onSubmit={handleSubmit}>
              <div className="block-inputs">
                <label htmlFor="">Аты-жөнү</label>
                <input
                  value={inputData.first_name}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      first_name: e.target.value,
                    })
                  }
                  type="text"
                  className="inputs"
                  required
                />
              </div>
              <div className="block-inputs">
                <label htmlFor="">Почта</label>
                <input
                  value={inputData.email}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      email: e.target.value,
                    })
                  }
                  type="text"
                  className="inputs"
                  required
                />
              </div>
              <div className="block-inputs">
                <label htmlFor="" className="label">
                  Телефон номер
                </label>
                <input
                  value={inputData.phone}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      phone: e.target.value,
                    })
                  }
                  type="number"
                  className="inputs"
                  placeholder="+996 xxxxxxxxx"
                  required
                />
              </div>
              <div className="block-inputs">
                <label htmlFor="" className="label">
                  Сыр сөз ( Эң аз 8 символ )
                </label>
                <input
                  value={inputData.password}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  className="inputs"
                  required
                  minLength={8}
                />
              </div>
              <div className="block-inputs">
                <label htmlFor="" className="label">
                  Сыр сөздү кайталоо
                </label>
                <input
                  value={inputData.confirm_password}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      confirm_password: e.target.value,
                    })
                  }
                  type="password"
                  className="inputs"
                  required
                  minLength={8}
                />
              </div>
              <div className="block-slowing">
                <a href="/login" className="ssylka">
                  Мурда катталдыңыз беле?
                </a>
                <button onSubmit={handleSubmit} required className="btn3">
                  {loading ? <Loading /> : "Катталуу"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
