import React from 'react'
import { Fade } from 'react-awesome-reveal'
import './styles/AboutMe.css'
import { aboutMedata } from '../constants/constants'

export default function AboutMe({selfRef}) {
  return (
    <div className='AboutMe-cont height-Sections-homepage' ref={selfRef}>
      <div className='middle-cont-section'>
        <Fade triggerOnce cascade>
          <h1>About me</h1>
        </Fade>
        <section className='section-about-me'>
          <aside>
            <hr />
            {
              aboutMedata?.map((elem,i) => <span key={i} style={{fontWeight:elem.fontweight}} className='text'>{elem.data}</span>)
            }
          </aside>
          <div id='myPhoto2'></div>
        </section>
      </div>
    </div>
  )
}
