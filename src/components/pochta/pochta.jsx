import './pochta.css'
import img1 from '../img/1.jpg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


export default function Pochta() {
    const [show, setShow] = useState({
        pochta: '',
        world: ''
    })

    console.log(show);

    const url = 'http://90.156.227.171/swagger/'

    return (
        <div className='box'>
            <div className='block-header'>
                <div>
                    <div>
                        <img src={img1} alt="" className='img-ensar' />
                    </div>
                    <form className='block-pochta'>
                        <div className='block-input'>
                            <label htmlFor="" className='label'>Почта</label>
                            <input type="text" className='input' required onChange={(e) => setShow({ ...show, pochta: e.target.value })} />
                        </div>
                        <div className='block-inputs'>
                            <label htmlFor="" className='label'>Сыр сөз</label>
                            <input type="password" className='input' required onChange={(e) => setShow({ ...show, world: e.target.value })} />
                        </div>
                        {/* <div className='block-box'>
                            <input type="checkbox" className='checkbox' />
                            <p className='check'>Эске сактоо</p>
                        </div> */}
                        <div className='block-slow'>
                            <a href='Сиз сыр сөздү унуттунузбу?' className='ssylka'>Сиз сыр сөздү унуттунузбу?</a>
                            <button className='btn'>Кирүү</button>
                        </div>
                    </form>
                    <button className='btn2'><NavLink to='/success' className='btn-nav'>Катталуу</NavLink></button>
                </div>
            </div>
        </div>
    )
}


