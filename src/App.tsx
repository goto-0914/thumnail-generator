import React, { useEffect, useRef } from 'react';
import './App.css';
const width = 800;
const height = 450;

function App() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.fillRect(0, 0, 100, 100);
    ctx.save();
  });

  return (
    <div>
      <h3>画像生成</h3>
      <h4>生成</h4>
      <canvas className="canvas" ref={canvasRef} width="800" height="450" />
    </div>
  );
}

export default App;
