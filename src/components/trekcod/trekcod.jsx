import img1 from '../img/1.jpg'
import './trekcod.css'
import { useState } from 'react';
import axios from 'axios';



export default function Trekcod() {
    const [user, setUser] = useState({
        trek_code: "",
    })

    console.log(user);

    const url = 'http://90.156.227.171/swagger/'
    const [responseData, setResponseData] = useState(null);

    const request = async () => {
        try {
            const response = await axios.post(url, user);
            setResponseData(response.user);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };


    
    return (
        <div className='block-treck'>
            <div className='block-trek'>
                <div>
                    <img src={img1} alt="" className='img-ensar2' />
                </div>
                <form action="">
                    <input type="text" className="trek-input" placeholder='Трек код' onChange={(e) => setUser({...user, trek_code: e.target.value})} required/>
                </form>
                <div>
                    <button onClick={request} className='trek-btn'>Издөө</button></div>      
                </div>
            <div>

            </div>
        </div>
    )
}