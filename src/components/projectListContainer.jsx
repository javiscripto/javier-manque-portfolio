import { useEffect, useState } from 'react';
import { Projectcard } from './ProjectCard';
import styles from "./cardContainer.module.css"
import { fetchData } from '../helpers/fetchData';
export const ProjectListContainer = () => {





  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [img, setimg] = useState('');
  useEffect(() => {
    fetchData('/data/projects.json', setProjects, setLoading);
    console.log(projects);
  }, []);


  const visibilityHandler = (childImg, childVisibility) => {
    setIsVisible(childVisibility);
    setimg(childImg);
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

          <img
            src={img}
            alt="Imagen de proyecto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }} />



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
