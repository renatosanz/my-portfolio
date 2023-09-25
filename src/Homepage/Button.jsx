import React from 'react'
import './styles/Button.css'

export default function Button({label,idButton,refDiv}) {
  const handleClick = () => {
    const offset = refDiv.current.getBoundingClientRect().top + window.scrollY;
    const newPosition = offset - window.innerHeight/10 ; // Agregar 10vh

    window.scrollTo({
      top: newPosition,
      behavior: 'smooth',
    });
  };
  return (
    <div className='btn1' id={idButton} onClick={handleClick}> 
      <div className='center'>
        {label}
      </div>
    </div>
  )
}
