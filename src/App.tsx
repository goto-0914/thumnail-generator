import React, { useEffect, useRef } from 'react';
import './App.css';
const width = 800;
const height = 450;

function App() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.fillRect(0, 0, 800, 450);
    ctx.save();
  }, []);

  return (
    <div>
      <h3>画像生成</h3>
      <form>
        <label>
          タイトル
          <input type="text" name="" id="" />
        </label>
        <label>
          ジャンル
          <select name="" id="">
            <option value=""></option>
            <option value="ReactNative">ReactNative</option>
            <option value="React">React</option>
            <option value="Web">Web</option>
            <option value="Laravel">Laravel</option>
            <option value="AWS">AWS</option>
            <option value="iOS">iOS</option>
          </select>
        </label>
      </form>
      <canvas className="canvas" ref={canvasRef} width="800" height="450" />
    </div>
  );
}

export default App;
