import React from 'react'
import styles from './Card.module.css'
import { ScrollRevealEffect } from './efects/ScrollrevealEffect';




export const Projectcard = ({ project }) => {
  const { title, description, img } = project;

  return (
    <ScrollRevealEffect>
      <div className={styles.cardContainer}>
        <div className={`${styles.cardImg}, ${styles.projectCardImg}`} onClick={() => handleToggleVysybility(img, true)}>
          <img src={img} alt={title} />

        </div>
        <div className={styles.textContainer}>
          <h3 className="title">{title}</h3>
          <p>
            {description}
          </p>

        </div>
      </div>

    </ScrollRevealEffect>

  )
}

