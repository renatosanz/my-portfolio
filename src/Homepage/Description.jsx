import React from 'react'
import "./styles/Description.css"
import Button from './Button'
import { Fade } from 'react-awesome-reveal'

export default function Description({refs}) {
  return (
    <div id='Description' >
      <section className='header-Descripton'>
        <div className='cont-header'>
          <Fade className='label-group-description' cascade damping={0.1}>
            <h1>Hi, I'm Renato.</h1>
            <h2>Front-end Developer.</h2>
          </Fade>
          <section className='cont-buttons'>
            <Button idButton={'my-services'} label={'What I do.'} refDiv={refs.what_i_do}/>
            <Button idButton={'my-work'} label={'View my showcase.'} refDiv={refs.my_work}/>
            <Button idButton={'about-me'} label={'Learn more about me.'} refDiv={refs.about_me}/>
          </section>
        </div>
        <aside className='cont-my-image'>
            <img style={{backgroundImage:'url(src/Homepage/img/my_photo-min.jpg)'}} src='src/Homepage/img/my_photo.jpg' id='my_image'></img>            
        </aside>
      </section>
    </div>
  )
}
