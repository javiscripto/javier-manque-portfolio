import React from 'react'
import styles from './Card.module.css';
import { ScrollRevealEffect } from './efects/ScrollrevealEffect';


export default function Card({ course, handleToggleVisibility }) {
  const { title, description, img } = course

  return (
    <ScrollRevealEffect >
      <div className={styles.cardContainer} >

        <div
          className={styles.cardImg}
          onClick={() => handleToggleVisibility(img, true)}>


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

