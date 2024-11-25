//function to fetch data from public/data


export const fetchData = async (url, setData, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error(`ha ocurrido un error : ${error}`)
  } finally {
    setLoading(false);
  }
};
//add function to preload images to improve performance
