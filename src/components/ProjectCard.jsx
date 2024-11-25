import React from 'react'
import styles from './projectCard.module.css'
import { FadeIn } from '../components/efects/fadein';




export const Projectcard = ({ project }) => {
  const { title, description, img } = project;

  return (
    <FadeIn>
      <div className={styles.cardContainer}>
        <div className={styles.cardImg} onClick={() => handleToggleVysybility(img, true)}>
          <img src={img} alt={title} />

        </div>
        <div className={styles.textContainer}>
          <h3 className="title">{title}</h3>
          <p>
            {description}
          </p>

        </div>
      </div>
    </FadeIn>

  )
}

