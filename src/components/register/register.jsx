import './register.css'
import img1 from '../img/1.jpg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [data, setData] = useState({
        full_name: "",
        email: "",
        phone: "",
        password: "",
        password2: ""
    })
    console.log(data);

    const [responseData, setResponseData] = useState(null);

    const url = 'http://90.156.227.171/register/'

    const requestData = async () => {
        try {
            const response = await axios.post(url, data);
            setResponseData(response.data);
            localStorage.setItem("token", response.data.token
            )
        } catch (error) {
            console.error('Registration failed', error);
        }
    };
    
   
    return (
        <div>
            <div className='boxing'>
                <div className="block-main">
                    <div>
                        <img src={img1} alt="" className='img-ensar2' />
                    </div>
                    <div className='block-main_two'>
                        <div className='block-inputs'>
                            <label htmlFor="">Аты-жөнү</label>
                            <input type="text" className='inputs' onChange={(e) => setData({ ...data, full_name: e.target.value })} required/>
                        </div>
                        <div className='block-inputs'>
                            <label htmlFor="">Почта</label>
                            <input type="text" className='inputs' onChange={(e) => setData({ ...data, email: e.target.value })} required/>
                        </div>
                        <div className='block-inputs'>
                            <label htmlFor="" className='label'>Телефон номер</label>
                            <input type="text" className='inputs' placeholder='+996 xxxxxxxxx' required onChange={(e) => setData({ ...data, phone: e.target.value })} />
                        </div>
                        <div className='block-inputs'>
                            <label htmlFor="" className='label' >Сыр сөз ( Эң аз 8 символ )</label>
                            <input type="password" className='inputs'required  minLength={8} onChange={(e) => setData({ ...data, password: e.target.value })} />
                        </div>
                        <div className='block-inputs'>
                            <label htmlFor="" className='label'>Сыр сөздү кайталоо</label>
                            <input type="password" className='inputs' required minLength={8} onChange={(e) => setData({ ...data, password2: e.target.value })} />
                        </div>
                        <div className='block-slowing'>
                            <a href='Мурда катталдыңыз беле?' className='ssylka'>Мурда катталдыңыз беле?</a>
                            <button onClick={requestData} required className='btn3'><NavLink to={'/word'} className='btn-naw'>Катталуу</NavLink></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
