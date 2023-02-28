import React, { FormEvent, useRef } from 'react';
import './App.css';
const WIDTH = 800;
const HEIGHT = 450;

function App() {
  const canvasRef = useRef(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const title = (event.target as any).title.value;
    const category = (event.target as any).category.value;

    const canvas: any = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    switch (category) {
      case 'React':
        gradient.addColorStop(0, '#61DAFB');
        gradient.addColorStop(1, '#124574');
        break;
      case 'ReactNative':
        gradient.addColorStop(0, '#124574');
        gradient.addColorStop(1, '#61DAFB');
        break;
      case 'Laravel':
        gradient.addColorStop(0, '#F03B30');
        gradient.addColorStop(1, '#741235');
        break;
      case 'AWS':
        gradient.addColorStop(0, '#FF9900');
        gradient.addColorStop(1, '#252F3E');
        break;
      case 'iOS':
        gradient.addColorStop(0, '#FE9109');
        gradient.addColorStop(0.5, '#E61F0B');
        gradient.addColorStop(1, '#901B6C');
        break;
      default:
        gradient.addColorStop(0, '#B3ACFF');
        gradient.addColorStop(1, '#C8FFB4');
        break;
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    document.fonts.ready.then(() => {
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.font = '36px Poppins';
      ctx.fillText(title, 400, 335);
    });

    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 270, WIDTH, 100);
    ctx.save();
  };

  return (
    <div>
      <h3>Awesome Thumnail Generator</h3>
      <form onSubmit={handleSubmit}>
        <label>
          タイトル
          <input type="text" name="title" id="title" />
        </label>
        <label>
          カテゴリ
          <select name="category" id="category">
            <option value=""></option>
            <option value="ReactNative">ReactNative</option>
            <option value="React">React</option>
            <option value="Web">Web</option>
            <option value="Laravel">Laravel</option>
            <option value="AWS">AWS</option>
            <option value="iOS">iOS</option>
            <option value="他">他</option>
          </select>
        </label>
        <button type="submit">生成</button>
      </form>
      <canvas className="canvas" ref={canvasRef} width="800" height="450" />
    </div>
  );
}

export default App;
