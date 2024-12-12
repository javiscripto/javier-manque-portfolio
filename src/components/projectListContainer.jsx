import { useEffect, useState } from 'react';
import { Projectcard } from './ProjectCard';
import styles from "./cardContainer.module.css"
import { fetchData } from '../helpers/fetchData';
export const ProjectListContainer = () => {





  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [img, setimg] = useState('');

  //muestra de imagenes
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    fetchData('/data/projects.json', setProjects, setLoading);
  }, []);


  const visibilityHandler = (childImg, childVisibility) => {
    setIsVisible(childVisibility);
    setimg(childImg);
  };

  const handleNextImg = (arr) => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % arr.length);
  };

  const handlePrevImg = (arr) => {
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
  };

  return (
    <div style={{ position: "relative" }}>
      {isVisible && img && (
        <div className={styles.iframeContainer}>
          <button
            onClick={() => setIsVisible(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}>
            &times; {/* Icono de cerrar */}
          </button>

          <button
            onClick={() => handlePrevImg(img)}
            style={{
              position: "absolute",
              top: "50%",
              left: "20px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}>
            &lt; {/* Icono de flecha izquierda */}
          </button>

          <button
            onClick={() => handleNextImg(img)}
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer"
            }}>
            &gt; {/* Icono de flecha derecha */}
          </button>

          {Array.isArray(img) ? (
            <img
              src={img[currentImgIndex]}
              alt="Imagen de proyecto"
              style={{
                height: "100%",
              }}
            />

          ) : (
            <img
              src={img}
              alt="Imagen de proyecto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
            />)}




        </div>

      )}
      {loading ? (<h3>Cargando...</h3>) : (
        <div className={styles.container}>
          {projects.map((project) => (
            <Projectcard key={project.title} project={project} img={img} visibilityHandler={visibilityHandler} />
          ))}
        </div>)}
    </div>
  );
};
