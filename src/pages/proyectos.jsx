import React from 'react'
import { ProjectListContainer } from '../components/projectListContainer.jsx'
import styles from './formacion.module.css'
import { ScrollRevealEffect } from '../components/efects/ScrollrevealEffect.jsx'
export default function Proyectos
  () {
  return (
    <ScrollRevealEffect>
      <div className='container'>
        <div className={styles.formacionInner}>
          <h2>Proyectos</h2>
          <ProjectListContainer />
        </div>
      </div>

    </ScrollRevealEffect>
  )
}

