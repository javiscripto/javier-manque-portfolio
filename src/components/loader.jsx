import styles from "./loader.module.css";



export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderText}>
        {[".", ".", ".", "."].map((letter, index) => (

          <span style={{ animationDelay: `${index * 0.1}s` }} key={index}>{letter}</span>
        ))}
      </div>
    </div>
  )
}
