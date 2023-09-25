import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import DarkSVG from "./img/dark.svg";
import LightSVG from "./img/light.svg";
import Clock from './Clock';
import { Link } from 'react-router-dom';

export default function Navbar({func,icon}) {
  const [porcent, setPorcent] = useState(0);

  const parts = ["home","blog","playground"]

  useEffect(() => {
    const funHeight = () =>{
      const docH = document.documentElement.scrollHeight;
      const windowH = window.innerHeight;
      const currentPosition = window.screenY||window.pageYOffset;
      const positionPorcent = (currentPosition/(docH-windowH))*100;
      setPorcent(positionPorcent);
    }
    window.addEventListener("scroll",funHeight)
  
    return () => {
      window.removeEventListener("scroll",funHeight)
      
    }
  }, []);

  return (
      <nav id='Navbar' className='noUserSelect' >
      <div id='sub-Navbar'>
        <div id='my-brand'>
          <div id='themeSwitch' className='clickable'>
            <img onClick={()=>func()} 
            style={icon==="dark"?{filter:" invert(2)",transition:"0.3s"}:{}}
            src={icon === "light" ? DarkSVG : LightSVG} 
            alt="Theme Switch"></img>
          </div>
          <div style={{display:"flex",gap:"1rem"}}>
            <div id='my-photo'></div>
          <span id='my-name' >Renato <br/> Sanchez</span>
          </div>
          <Clock/>
        </div>
        <ul id='links'>
          {
            parts.map((item,index) =>(
              <Link key={index} to={`/${item}`}>
                <li className='clickable'>{item}</li>
              </Link>
            ))
          }
        </ul>
      </div>
      <section id='porcent' style={{width:`${porcent}%`}}></section>
    </nav>
  )
}
