import React from "react";
import styles from "./Card.module.css";
import { ScrollRevealEffect } from "./efects/ScrollrevealEffect";
import { CustomButton } from "./CutomButton";

export const Projectcard = ({ project, visibilityHandler }) => {
  const { title, description, img, technologies, url } = project;

  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.cardImg}, ${styles.projectCardImg}`}
        onClick={() => visibilityHandler(img, true)}
      >
        {Array.isArray(img) ? (
          <img src={img[0]} alt={title} />
        ) : (
          <img src={img} alt={title} />
        )}
      </div>
      <div className={styles.textContainer}>
        <h3 className="title">{title}</h3>
        <p>{description}</p>
        <div className={styles.technologiesContainer}>
          <h4>Tecnologias utilizadas:</h4>
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <box-icon type="logo" name="github"></box-icon>
        </a>
        <CustomButton onClick={() => visibilityHandler(img, true)}>
          Ver demo
        </CustomButton>
      </div>
    </div>
  );
};
