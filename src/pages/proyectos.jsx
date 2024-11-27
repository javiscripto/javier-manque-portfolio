import React from 'react'
import { ProjectListContainer } from '../components/projectListContainer.jsx'
import styles from './proyectos.module.css'
import { ScrollRevealEffect } from '../components/efects/ScrollrevealEffect.jsx'
export default function Proyectos
  () {
  return (
    <ScrollRevealEffect>
      <div className='container'>
        <div className={styles.proyectosInner}>
          <h2>Proyectos</h2>
          <p>Durante mi formación, he desarrollado proyectos que me han permitido asentar mis conocimientos en las distintas tecnologias. Aquí los más interesantes:</p>
          <ProjectListContainer />
        </div>
      </div>

    </ScrollRevealEffect>
  )
}

