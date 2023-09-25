import React from 'react'
import "./styles/SkillBox.css"

export default function SkillBox({item}) {
  return (
    <li id={`${item.name}-Icon`} className='skillBox'>
      <img loading='lazy' src={item.src_img}/>
    </li>
  )
}
