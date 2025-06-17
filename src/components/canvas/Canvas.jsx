import React, { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/themeContext.jsx";
import styles from "./Canvas.module.css";

export const Canvas = () => {
  //canvas component

  const { isDarkTheme } = useContext(ThemeContext);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Establece dimensiones del canvas
    const img = new Image();
    img.src = "/assets/jav.png";
    img.onload = () => {
      canvas.width = img.width * 1.5;
      canvas.height = img.height;
      animatePixelSize();
    };
    const symbols = [" ", "{", ";", "=", "<", "/", ">", "p", ",", " "];
    const minPixelSIze = 5;
    const maxPixelSize = 15;
    let currentPixelSize = minPixelSIze;
    let increment = 1;

    const mapImageToSymbols = (pixelSize, symbols) => {
      context.drawImage(img, 0, 0);
      const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = `${pixelSize}px monospace`;
      context.fillStyle = isDarkTheme ? "white" : "black";
      //mapea los pixeles en simbolos segun su brillo
      for (let y = 0; y < imgData.height; y += pixelSize) {
        for (let x = 0; x < imgData.width; x += pixelSize) {
          //obtiene el brillo del pixel
          const index = (y * imgData.width + x) * 4;
          const r = imgData.data[index];
          const g = imgData.data[index + 1];
          const b = imgData.data[index + 2];
          const brightness = (r + g + b) / 3;

          // mapping to symbol
          const symbolIndex = Math.floor(
            (brightness / 255) * (symbols.length - 1),
          );
          const symbol = symbols[symbolIndex];

          // replace pixel by symbol
          context.fillText(symbol, x, y + pixelSize);
        }
      }
    };

    const animatePixelSize = () => {
      const animate = () => {
        // Renderiza la imagen con los símbolos y el tamaño actual
        mapImageToSymbols(currentPixelSize, symbols);

        currentPixelSize += increment;

        if (currentPixelSize >= maxPixelSize) {
          return;
        }

        // Continúa la animación
        requestAnimationFrame(animate);
      };

      // start animate
      animate();
    };
  }, [isDarkTheme]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};
