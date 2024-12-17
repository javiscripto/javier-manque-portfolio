import React, { useEffect, useState } from 'react'
import { ScrollRevealEffect } from '../components/efects/ScrollrevealEffect'
import styles from "./contacto.module.css";
import { Loader } from '../components/loader'



export default function Contacto() {


  const [loading, setLoading] = useState(false);


  useEffect(() => {

  }, [loading])

  const [input, setInput] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });


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
      const response = await fetch('https://mailer-tau-ten.vercel.app/send-email', {
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
        {loading && <Loader />}
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>

            <div className={styles.field}>
              <label>Nombre</label>
              <input type="text" placeholder='John Perez'
                name="nombre"
                onChange={handleInput}
                value={input.nombre} />
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input type="email" placeholder='example@mail.com'
                name="correo" onChange={handleInput}
                value={input.correo} />
            </div>

            <div className={styles.field}>
              <label>Mensaje</label>
              <textarea placeholder='ingresa aqui tu mensaje'
                name="mensaje" onChange={handleInput}
                value={input.mensaje} />
            </div>

            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>

    </ScrollRevealEffect>
  )
}

