import { useEffect, useState } from 'react';
import Card from './Card';
import styles from './cardContainer.module.css';
import { fetchData } from '../helpers/fetchData';




export default function CardListContainer() {


  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleToggleVisibility = (childUrl, childVisibility) => {
    setImageUrl(childUrl);
    setVisibility(childVisibility);
  };

  const preloadImages = (images) => {
    return Promise.all(
      images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  };

  useEffect(() => {
    fetchData('/data/courses.json', setCourses, setLoading);
  }, []);

  return (
    <>
      {visibility && imageUrl && (
        <div className={`${styles.lightBoxImage}`} onClick={() => setVisibility(false)}>
          <img className={styles.image} src={imageUrl} alt="course" />
        </div>
      )}

      {loading ? (
        <h3>cargando...</h3>
      ) : (
        <div className={styles.container}>
          {courses.map((course) => (
            <Card
              key={course.title}
              course={course}
              handleToggleVisibility={handleToggleVisibility}
            />
          ))}
        </div>
      )}
    </>
  );
}
