import React from 'react'
import { motion } from 'motion/react';
import { Canvas } from '../components/canvas/Canvas'
import styles from './wlcome.module.css';
export const Welcome = () => {
  return (
    <div className='container'>


      <div className={styles.gridContainer}>
        <motion.div initial={{ opacity: 0 }} animate={{
          transition: { duration: .5 },
          opacity: 1
        }}>
          <Canvas className={styles.gridCanvas} />
        </motion.div>
        <div className={styles.gridText}>
          <h3 className='title'>Javier Manque - fullstack web developer</h3>
          <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1,
            transition: { duration: .8 }
          }}>
            <p>
              Soy desarollador web fullstack viviendo actualmente en la ciudad de Valdivia, Chile.
              Tengo conocimientos en bases de datos SQL y noSQL (mySQL, SQLite y mongoDB); en los lenguajes de programacion Javascript y python y manejo frameworks de estos lenguajes tanto para el frontend como para el backend.
            </p>

          </motion.div>
        </div>

      </div>
    </div>
  )
}


