import styles from "./carousell.module.css";
export const CarouselItem = ({ name, type }) => {
  return (
    <div className={styles.carouselItem}>
      <box-icon className={styles.icon} type={type ? type : "logo"} name={name}></box-icon>
      <p>{name == "data" ? "mySQL" : name}</p>
    </div>
  );
}; 
