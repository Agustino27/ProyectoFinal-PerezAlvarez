import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicesMock } from "../servicesMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(servicesMock.find((prod) => prod.id === itemId));
      }, 500);
    });

    getProduct.then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5 p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando detalles...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center mt-5 p-5">
        <h3>Servicio no encontrado</h3>
        <p className="text-muted">El código de consultoría ingresado no existe.</p>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;