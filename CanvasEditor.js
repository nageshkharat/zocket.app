import React, { useState, useEffect, useRef } from 'react';
import './color.css';

function CanvasEditor() {
  const [captionText, setCaptionText] = useState("1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs");
  const [ctaText, setCtaText] = useState("Shop Now");
  const [customImage, setCustomImage] = useState("https://m.media-amazon.com/images/I/51EQHgW2TKL._SX522_.jpg");
  const [recentColors, setRecentColors] = useState(['#0369A1', '#FF0000', '#00FF00', '#0000FF', '#FFFF00']);
  const maxCharPerLine = 31;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = recentColors[0];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (customImage) {
      const img = new Image();
      img.onload = function() {
        ctx.drawImage(img, canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);
        drawText(ctx, captionText, ctaText, canvas);
      }
      img.src = customImage;
    } else {
      drawText(ctx, captionText, ctaText, canvas);
    }
  }, [customImage, captionText, ctaText, recentColors]);

  function drawText(ctx, captionText, ctaText, canvas) {
    const lines = breakTextIntoLines(captionText, maxCharPerLine);
    let y = 100;
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    lines.forEach(line => {
      ctx.fillText(line, canvas.width / 2, y);
      y += 50;
    });

    ctx.font = 'bold 30px Arial';
    ctx.fillText(ctaText, canvas.width / 2, canvas.height - 50);
  }

  function breakTextIntoLines(text, maxCharPerLine) {
    const words = text.split(' ');
    let currentLine = '';
    const lines = [];
    words.forEach(word => {
      if (currentLine.length + word.length <= maxCharPerLine) {
        currentLine += (currentLine === '' ? '' : ' ') + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine !== '') {
      lines.push(currentLine);
    }
    return lines;
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      setCustomImage(e.target.result);
    }
    reader.readAsDataURL(file);
  }

  function handleRecentColorClick(color) {
    setRecentColors([color, ...recentColors.filter(rc => rc !== color)].slice(0, 5));
  }

  function handlePlusSignClick() {
    const newColor = prompt("Enter a custom color:");
    if (newColor) {
      setRecentColors([newColor, ...recentColors.filter(rc => rc !== newColor)].slice(0, 5));
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="container">
      <div className="canvas-container">
        <canvas id="canvas" ref={canvasRef} width="1080" height="1080"></canvas>
        <br />
      </div>
      <div className="controls">
        <h2 style={{ textAlign:"center"}}>Ad Customization</h2>
        <p style={{color:"grey"}}>Customize your ad and get the templates accordingly</p>
        <div className="image">
        <label style={{color:"grey", fontSize:"15px"}} htmlFor="imageInput">Change the ad creative image. </label>
          <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} placeholder="Choose an image"/>
        </div>


        <h4>Edit contents</h4>
        <input type="text" id="captionInput" placeholder="Enter caption text" value={captionText} onChange={(e) => setCaptionText(e.target.value)} />

        <h4>CTA</h4>
        <input style={{ textAlign:"center", verticalAlign:"middle"}}  type="text" id="ctaInput" placeholder="Enter call to action text" value={ctaText} onChange={(e) => setCtaText(e.target.value)} />

        <h4>Choose your color</h4>
        <div className="recent-color" id="recentColors">
          {recentColors.map(color => (
            <div key={color} className="circle recent-color" style={{ backgroundColor: color }} onClick={() => handleRecentColorClick(color)}></div>
          ))}
          <div className="circle plus-sign" onClick={handlePlusSignClick}>+</div>
        </div>
      </div>
    </div>
  );
}

export default CanvasEditor;
