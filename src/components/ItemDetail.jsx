import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // 🌟 Importamos el contexto
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext); // 🌟 Extraemos la función para añadir

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity); // 🌟 Guardamos el producto y la cantidad en el cerebro global
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden bg-white p-4">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <img 
              src={product.img} 
              alt={product.title} 
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div>
              <span className="badge bg-primary text-uppercase mb-2">{product.category}</span>
              <h2 className="fw-bold text-dark mb-3">{product.title}</h2>
              <h3 className="text-primary fw-bold mb-4">${product.price} USD</h3>
              <p className="text-muted lh-base mb-4">{product.description}</p>
              <p className="text-secondary small">Disponibilidad inmediata: <strong>{product.stock} cupos mensuales</strong></p>
            </div>

            <div className="mt-auto">
              {quantityAdded > 0 ? (
                <Link to="/cart" className="btn btn-success w-100 rounded-pill fw-bold py-2">
                  Terminar mi compra (Ir al Carrito)
                </Link>
              ) : (
                <ItemCount stock={product.stock} onAdd={handleOnAdd} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;