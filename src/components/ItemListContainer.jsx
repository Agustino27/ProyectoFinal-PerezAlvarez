import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicesMock } from "../servicesMock";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // useParams captura el parámetro ":categoryId" de la URL
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    // Simulamos una demora de red de 500ms (buena práctica de UX evaluada)
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(servicesMock);
      }, 500);
    });

    getProducts.then((data) => {
      if (categoryId) {
        // Si hay una categoría en la URL, filtramos el catálogo
        const filtered = data.filter((prod) => prod.category === categoryId);
        setProducts(filtered);
      } else {
        // Si no hay categoría (Home), mostramos todo el catálogo
        setProducts(data);
      }
      setLoading(false);
    });
  }, [categoryId]); // Se ejecuta cada vez que cambia la categoría en la URL

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h2 className="text-dark fw-bold">{greeting}</h2>
        <p className="text-muted">Soluciones de consultoría de alto impacto para tu empresa.</p>
      </div>

      {/* Renderizado Condicional: Mientras carga, muestra un Loader de Bootstrap */}
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        // Cuando termina de cargar, le pasa los productos al componente visual
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;