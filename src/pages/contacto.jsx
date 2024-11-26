import React, { useState } from 'react'
import { ScrollRevealEffect } from '../components/efects/ScrollrevealEffect'
import styles from "./contacto.module.css";



export default function Contacto() {

  const [input, setInput] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const [loading, setLoading] = useState(false);


  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value
    })

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/send-email', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      });

      if (!response.ok) {
        throw new Error("ha ocurrido un error al enviar el formulario");
      }
      const data = await response.json();
      console.log("data: ", data);
      alert("mensaje enviado con exito");

      setInput({
        nombre: "",
        correo: "",
        mensaje: ""
      })
    } catch (error) {
      console.error("ha ocurrido un error al enviar el formulario: ", error)
    } finally {
      setLoading(false);
    }
  }
  return (
    <ScrollRevealEffect>
      <div className='container'>
        <h2>Contacto</h2>
        {loading && <h3 style={{ color: "red" }}>Enviando...</h3>}
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>

            <div className={styles.field}>
              <label>Nombre</label>
              <input type="text" placeholder='John Perez' name="nombre" onChange={handleInput} />
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input type="email" placeholder='example@mail.com' name="correo" onChange={handleInput} />
            </div>

            <div className={styles.field}>
              <label>Mensaje</label>
              <textarea placeholder='Deja aquí tu mensaje, con gusto lo leeré' name="mensaje" onChange={handleInput} />
            </div>

            <button type='submit'>enviar</button>
          </form>
        </div>
      </div>

    </ScrollRevealEffect>
  )
}

