import React from "react";
import { Canvas } from "../components/canvas/Canvas";
import styles from "./wlcome.module.css";
import { ScrollRevealEffect } from "../components/efects/ScrollrevealEffect";
import { CustomButton } from "../components/CutomButton.jsx";
export const Welcome = () => {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <Canvas className={styles.gridCanvas} />
        <div className={styles.gridText}>
          <h3 className="title">Javier Manque - fullstack web developer</h3>

          <ScrollRevealEffect>
            <p>
              Soy programador web fullstack viviendo actualmente en la ciudad de
              Valdivia, Chile.Tengo conocimientos sólidos en javascript, en
              python y manejo frameworks de estos lenguajes tanto para el front
              como para el backend. Además, cuento con conocimientos en bases de
              datos realcionales y no relacionales (mySQL, SQLite y mongoDB).
            </p>
            <CustomButton>
              <a href="/JavierManque-cv.pdf" download="cv_Javier_Manque.pdf">
                Descarga mi CV
              </a>
            </CustomButton>
          </ScrollRevealEffect>
        </div>
      </div>
    </div>
  );
};
