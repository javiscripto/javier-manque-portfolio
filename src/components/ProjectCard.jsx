import React from 'react'
import styles from './Card.module.css'
import { ScrollRevealEffect } from './efects/ScrollrevealEffect';




export const Projectcard = ({ project, visibilityHandler }) => {
  const { title, description, img } = project;


  return (
    <ScrollRevealEffect>
      <div className={styles.cardContainer}>
        <div className={`${styles.cardImg}, ${styles.projectCardImg}`} onClick={() => visibilityHandler(img, true)}>
          {Array.isArray(img) ? (
            <img src={img[0]} alt={title} />
          ) : (
            <img src={img} alt={title} />
          )}

        </div>
        <div className={styles.textContainer}>
          <h3 className="title">{title}</h3>
          <p>
            {description}
          </p>
          <button onClick={() => visibilityHandler(img, true)}>Ver proyecto</button>

        </div>
      </div>

    </ScrollRevealEffect>

  )
}

