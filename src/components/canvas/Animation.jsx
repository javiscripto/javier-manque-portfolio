import React, { useEffect, useRef } from 'react'

export const Animation = () => {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');


  }, [])
  return (
    <canvas ref={canvasRef}></canvas>
  )
}

