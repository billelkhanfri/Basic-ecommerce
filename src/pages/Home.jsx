import { useState, useEffect } from "react";
import Slider from "../components/Slider";
import ProductList from "../components/ProducList";

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response) {
        throw new Error("il y'a un problem de connexion");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(" erreur du fetch ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Slider />
      <ProductList products={data} />
    </>
  );
}
export default Home;
