import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

export const FadeIn = ({ children }) => {

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    isInView ? ref.current.style.opacity = 1 : ref.current.style.opacity = 0
  }, [isInView])

  return (
    <motion.div>
      <div ref={ref}>
        {children}
      </div>
    </motion.div>
  )
}
