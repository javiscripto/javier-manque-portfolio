import { useEffect, useState } from 'react';
import { Projectcard } from './ProjectCard';
import styles from "./cardContainer.module.css"
import { fetchData } from '../helpers/fetchData';
export const ProjectListContainer = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData('/data/projects.json', setProjects, setLoading);

  }, []);

  return (
    <>
      {loading ? (<h3>Cargando...</h3>) : (
        <div className={styles.container}>
          {projects.map((project) => (
            <Projectcard key={project.title} project={project} />
          ))}
        </div>)}
    </>
  );
};
