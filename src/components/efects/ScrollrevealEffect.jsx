import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';





export const ScrollRevealEffect = ({ children }) => {
  const ref = useRef(null, { once: true });
  const isInView = useInView(ref);
  return (
    <motion.div
      style={{
        overflowX: "hidden",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateX(0)" : "translateX(200)",
        transition: "all .3 ease-in"
      }} initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      {children}
    </motion.div>
  )
}

