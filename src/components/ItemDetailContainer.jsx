import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProduct(null);
        }
      })
      .catch((error) => console.error("Error fetching product:", error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return (
      <div className="container text-center mt-5 p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando detalles...</span>
        </div>
        <p className="mt-3 text-secondary">Extrayendo especificaciones técnicas del servicio...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center mt-5 p-5">
        <h2>Servicio no localizado</h2>
        <p className="text-muted">El identificador de la solución no coincide con nuestros registros activos.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;