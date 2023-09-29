import React, { useState } from 'react'
import './styles/Playground.css'
import CanvasPanel from './CanvasPanel'
import { ToolList } from '../constants/listToolsPlayground'

export default function Playground() {
  const [color, setColor] = useState("#000000");
  const [pencil, setpencil] = useState("pencil");
  const [lineW, setlineW] = useState(3);
  return (
    <div id='playground-cont'>
      <h1 style={{margin:'1rem auto',}}>Let's draw something!!!</h1>
      <div id='Playground'>
        <aside id='tools'>
          <section id='toolList'>
            {
              ToolList?.map((item,key)=>
                <div onClick={(event)=>setpencil(item.name)} key={key}>
                  <span>{item.name}</span>
                </div>
              )
            }
          </section>
          <input type='number' style={{border:'none'}} min={0} placeholder='pencil width' max={100} step={10} onChange={(event)=>setlineW(event.target.value)}/>
          <span>using: {pencil}</span>
          <div style={{display:'flex',gridGap:'1rem',justifyContent:'space-between'}}>
            <input style={{margin:'auto'}} className='input-color' type='color' onChange={(event)=>{setColor(event.target.value)}}/>
            <span style={{margin:'auto'}}>{color}</span>
          </div>
        </aside>
        <CanvasPanel currentColor={pencil == "erase" ? '#ffffff' : color} lineW={lineW}/>
      </div>
    </div>
  )
}
