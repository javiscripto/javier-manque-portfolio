import React, { useState } from 'react'
import { ScrollRevealEffect } from '../components/efects/ScrollrevealEffect'
import styles from "./contacto.module.css";

export default function Contacto() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value)
    console.log(input);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("datos recibidos: ", input)
  }
  return (
    <ScrollRevealEffect>
      <div className='container'>
        <h2>Contacto</h2>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre' onChange={handleInput} />
            <button type='submit'>enviar</button>
          </form>
        </div>
      </div>

    </ScrollRevealEffect>
  )
}

