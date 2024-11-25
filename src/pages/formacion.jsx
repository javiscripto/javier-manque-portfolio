import React from 'react'
import CardListContainer from '../components/cardListContainer'
import styles from './formacion.module.css';
import { ScrollRevealEffect } from '../components/efects/ScrollrevealEffect';
export default function Formacion() {
  return (
    <ScrollRevealEffect>

      <div className='container'>
        <div className={styles.formacionInner}>

          <h2>Formación</h2>
          <p>He aprendido de diversas fuentes de forma autodidacta como udemy, coursera, freecodecamp, la documentación oficial de cada tecnologia, etc. pero cuento con certificados de:</p>
          <CardListContainer />
        </div>
      </div>

    </ScrollRevealEffect>
  )
}

