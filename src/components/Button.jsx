import React from 'react'
import styles from './Button.module.css';

export default function CustomButton({ children, onClick }) {
  //recibe el texto como children y el handler como prop
  return (
    <button className={styles.customButton} onClick={onClick}>{children}</button>
  )
}

