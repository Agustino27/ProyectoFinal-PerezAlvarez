import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const productsRef = collection(db, "products");
    const q = categoryId 
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(docs);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return (
      <div className="container text-center mt-5 p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando soluciones...</span>
        </div>
        <p className="mt-3 text-secondary">Sincronizando con la red de Digital Mensa...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark">{greeting}</h1>
        <p className="text-muted">Infraestructura digital distribuida para operaciones globales.</p>
      </div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;