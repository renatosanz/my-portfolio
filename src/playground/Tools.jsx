import React from 'react'
import './styles/Playground.css'
import { ToolList } from '../constants/listToolsPlayground'

export default function Tools() {
  return (
    <div id='tools'>
      <ul>
        {
          ToolList?.map((item,key)=>
            <li key={key}>{item.name}</li>
          )
        }
      </ul>
    </div>
  )
}
