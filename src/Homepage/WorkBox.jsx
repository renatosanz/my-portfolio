import React from 'react'
import "./styles/WorkBox.css"
import linkIcon from "./img/open-repo-icon.svg"
import { Tooltip } from 'react-tooltip'

export default function WorkBox({bg,title,fontColor,urlProject,icon,urlrepo}) {
  return (
    <div className='workbox' style={{background:bg,color:fontColor}}>
      <a href={urlProject} style={{color:fontColor}} target='_blank' className='cont-workbox'>
        <span>{title}</span>
        <img src={icon} alt={title} />
      </a>
      <a href={urlrepo} target='_blank' className='send-repo'>
        <img src={linkIcon} alt="repository"/>
      </a>
      <Tooltip place='bottom' anchorSelect='.send-repo' >GitHub</Tooltip>
    </div>
  )
}
