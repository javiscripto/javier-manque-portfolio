import { useEffect, useState } from 'react';
import { ScrollRevealEffect } from "../efects/ScrollrevealEffect";
import styles from './carousell.module.css';
import { motion } from 'motion/react'
import { CarouselItem } from './CarouselItem';
import { fetchData } from '../../helpers/fetchData';

const Carousell = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData('/data/carouselItems.json', setData, setIsLoading);
  }, []);


  return (
    <ScrollRevealEffect>
      <motion.div style={{ overflowX: "hidden" }}
        initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <div className="carousel-container">
          <div className={styles.carousell}>
            {isLoading && <p>Loading...</p>}
            {data.map((item) => (

              <CarouselItem key={item.name} name={item.name} type={item.type} />


            ))}
          </div>
        </div>
      </motion.div>
    </ScrollRevealEffect>
  );
};

export default Carousell;
