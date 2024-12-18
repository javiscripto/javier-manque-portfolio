import React from 'react'
import styles from './Footer.module.css';
export const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>

        <div className={styles.redesContainer}>
          <a href="/curriculumHF.pdf" download="Javier_Manque_cv.pdf" className={styles.iconoEnlace}>
            <box-icon name='download' type='solid'></box-icon>
          </a>
          <a href="https://www.linkedin.com/in/javier-ismael-manque-14a602252" target="_blank" className={styles.iconoEnlace}>
            <box-icon type='logo' name='linkedin'></box-icon>

          </a>
          <a href="https://github.com/javiscripto?tab=repositories" target="_blank" className={styles.iconoEnlace}>
            <box-icon type='logo' name='github'></box-icon>

          </a>
          <a href="mailto:javier.manque.dev@gmail.com" target="_blank" className={styles.iconoEnlace}>
            <box-icon type='logo' name='gmail'></box-icon>
          </a>
        </div>
        <div className={styles.textContainer}>
          <p>made with ❤️ by javiscripto</p>
        </div>
      </div>
    </>
  )
}

