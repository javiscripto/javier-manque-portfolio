import React from 'react'
import styles from "./sobremi.module.css";
import { ScrollRevealEffect } from '../components/efects/ScrollrevealEffect';

export default function SobreMi() {

  return (
    <ScrollRevealEffect>

      <div className='container'>
        <div className={styles.gridContainer}>

          <div className={styles.img}>
            <div className={styles.wraperImg}>

              <img src='/assets/jav.png' />
            </div>
          </div>
          <div className={styles.text}>
            <h3 className="title">Sobre mi</h3>
            <p>
              Mi nombre es Javier Manqui. Soy una persona proactiva, resolutiva, curiosa; en búsqueda constante de nuevos desafíos y nuevos conocimientos, me considero un eterno aprendiz.
              Comencé mi formacion de forma auto didacta a mediados del 2021.
              En diciembre de 2022 soy becado por el programa de becas falabella tech academy y en la actualidad, despues de año y medio de formación soy egresado de dicho programa como desarollador fullstack.
            </p>
          </div>
        </div>
      </div>

    </ScrollRevealEffect>
  )
}

