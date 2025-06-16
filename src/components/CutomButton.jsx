// Boton personalizado  y reutilizable
import styles from "./CustomButton.module.css";

export const CustomButton = ({ children, onClick }) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
};
