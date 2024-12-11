import { useEffect, useState } from 'react';
import { Projectcard } from './ProjectCard';
import styles from "./cardContainer.module.css"
import { fetchData } from '../helpers/fetchData';
export const ProjectListContainer = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [url, setUrl] = useState('');
  useEffect(() => {
    fetchData('/data/projects.json', setProjects, setLoading);
    console.log(projects);
  }, []);


  const visibilityHandler = (childurl, childVisibility) => {
    console.log(childurl, childVisibility);
    setIsVisible(childVisibility);
    setUrl(childurl);
  };

  return (
    <div style={{ position: "relative" }}>
      {isVisible && url && (
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
          <iframe width="90%" height="90%" src={`${url}&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      )}
      {loading ? (<h3>Cargando...</h3>) : (
        <div className={styles.container}>
          {projects.map((project) => (
            <Projectcard key={project.title} project={project} url={url} visibilityHandler={visibilityHandler} />
          ))}
        </div>)}
    </div>
  );
};
