import React from 'react'
import styles from './Card.module.css'
import { ScrollRevealEffect } from './efects/ScrollrevealEffect';




export const Projectcard = ({ project, visibilityHandler }) => {
  const { title, description, url } = project;

  return (
    <ScrollRevealEffect>
      <div className={styles.cardContainer}>
        <div className={`${styles.cardImg}, ${styles.projectCardImg}`} onClick={() => visibilityHandler(url, true)}>
          <img src={url} alt={title} />

        </div>
        <div className={styles.textContainer}>
          <h3 className="title">{title}</h3>
          <p>
            {description}
          </p>
          <button onClick={() => visibilityHandler(url, true)}>Ver proyecto</button>

        </div>
      </div>

    </ScrollRevealEffect>

  )
}

