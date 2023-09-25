import React, { useEffect } from 'react'
import './styles/BlogCard.css'
import { Link } from 'react-router-dom'

export default function BlogCard({title,datePub,tags,body,src,bgi=null}) {
  return (
    <Link to={`/${src}`}>
      <li className='BlogCard-bg' style={bgi ? {backgroundImage:`url(${bgi})`,color:"#fff"}:{}}>
        <div className='BlogCard-blur' style={bgi ? {backdropFilter:"blur(20px) brightness(0.6)"}:{}}>
        <div className='BlogCard-header'>
          <h4>{title}</h4>
          <span>{datePub}</span>
        </div>
        <section className='BlogCard-body-cont'>
          <div className='BlogCard-body'>
            <span className='text'>{body}</span>
          </div>
          <ul className='BlogCard-tags' >
            {
              tags?.map((item,index)=>
                <li key={index} style={bgi ? {backgroundColor:"#00000066"}:{}}>{item}</li>
              )
            }
          </ul>
        </section>
        </div>
      </li>
    </Link>
  )
}
