import { fabric } from "fabric";
import './styles/Playground.css'
import React, { useRef, useEffect } from 'react';


function canvasPanel({isResetCanvas,lineW,currentColor,wCanvas=800,hCanvas=500}) {
  const canvasRef = useRef(null);
  let isDrawing = false;

  useEffect(() => {
    // Acceder al contexto del canvas
    if (isResetCanvas) {
      resetCanvasFunction()
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Configurar el estilo de dibujo
    context.strokeStyle = currentColor;
    context.lineWidth = lineW;
    context.lineCap = 'round';
    context.lineJoin = "round";

    // Evento para comenzar a dibujar cuando se presiona el mouse
    canvas.addEventListener('mousedown', startDrawing);
    // Evento para dejar de dibujar cuando se suelta el mouse
    canvas.addEventListener('mouseup', stopDrawing);
    // Evento para dibujar mientras se mueve el mouse
    canvas.addEventListener('mousemove', draw);

    // Limpiar eventos cuando el componente se desmonte
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [currentColor,lineW,isResetCanvas]);
  
  const resetCanvasFunction = () =>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log('first')
  }

  // Función para iniciar el dibujo
  function startDrawing(event) {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.lineWidth = lineW;
    context.strokeStyle = currentColor;

    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    context.beginPath();
    context.moveTo(x, y);
    isDrawing = true;
  }

  // Función para detener el dibujo
  function stopDrawing() {
    isDrawing = false;
  }

  // Función para dibujar
  function draw(event) {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    context.lineTo(x, y);
    context.stroke();
  }

  return (
    <div id="canva" style={{display:'flex'}}>
      <canvas id={'canvas-panel'} ref={canvasRef} width={wCanvas} height={hCanvas}></canvas>
      <div onClick={resetCanvasFunction} draggable>reset</div>
    </div>
  );
}

export default canvasPanel;
