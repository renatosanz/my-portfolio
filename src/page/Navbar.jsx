import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import DarkSVG from "./img/dark.svg";
import LightSVG from "./img/light.svg";
import Clock from './Clock';

export default function Navbar({func,icon,refs}) {
  const [porcent, setPorcent] = useState(0);

  const parts = [
    {name:"home",ref:refs[0]},
    {name:"blog",ref:refs[1]},
    {name:"playground",ref:refs[2]}
  ];

  const handleClick = (refDiv) => {
    const offset = refDiv.current.getBoundingClientRect().top + window.scrollY;
    const newPosition = offset - window.innerHeight/10 ; // Agregar 10vh

    window.scrollTo({
      top: newPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const funHeight = () =>{
      const docH = document.documentElement.scrollHeight;
      const windowH = window.innerHeight;
      const currentPosition = window.screenY||window.pageYOffset;
      const positionPorcent = (currentPosition/(docH-windowH))*100;
      setPorcent(positionPorcent);
    }
    console.log(parts)
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
                <li key={index} onClick={()=>{handleClick(item.ref)}} className='clickable'>{item.name}</li>
            ))
          }
        </ul>
      </div>
      <section id='porcent' style={{width:`${porcent}%`}}></section>
    </nav>
  )
}
