import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, clearCart, removeItem, totalCartPrice } = useContext(CartContext);

  // Renderizado condicional por si el carrito queda vacío
  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5 p-5 bg-white rounded-4 shadow-sm">
        <h2 className="fw-bold text-dark mb-3">Tu carrito está vacío</h2>
        <p className="text-muted mb-4">No has seleccionado ningún servicio de consultoría o pack corporativo todavía.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4 fw-bold">
          Ver Catálogo de Servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-dark mb-4">Tu Solicitud de Servicios</h2>
      
      <div className="row g-4">
        {/* Listado de Productos */}
        <div className="col-lg-8">
          {cart.map((prod) => (
            <div key={prod.id} className="card shadow-sm border-0 rounded-3 mb-3 p-3 bg-white">
              <div className="row align-items-center g-3">
                <div className="col-sm-2 text-center">
                  <img src={prod.img} alt={prod.title} className="img-fluid rounded-2" style={{ maxHeight: "70px", objectFit: "cover" }} />
                </div>
                <div className="col-sm-4">
                  <h6 className="fw-bold text-dark mb-1">{prod.title}</h6>
                  <span className="badge bg-secondary text-uppercase fs-7">{prod.category}</span>
                </div>
                <div className="col-sm-2 text-center text-muted">
                  ${prod.price} x {prod.quantity}
                </div>
                <div className="col-sm-2 text-center fw-bold text-primary">
                  Subtotal: ${prod.price * prod.quantity}
                </div>
                <div className="col-sm-2 text-center">
                  <button className="btn btn-outline-danger btn-sm rounded-circle" onClick={() => removeItem(prod.id)}>
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen Financiero de la Orden */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 rounded-3 p-4 bg-white">
            <h5 className="fw-bold text-dark mb-4">Resumen de Inversión</h5>
            <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
              <span className="text-muted">Servicios solicitados:</span>
              <span className="fw-bold text-dark">{cart.length}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="fs-5 text-dark fw-semibold">Total estimado:</span>
              <span className="fs-3 fw-bold text-success">${totalCartPrice()} USD</span>
            </div>
            
            <button className="btn btn-primary w-100 rounded-pill fw-bold mb-2 py-2" onClick={() => alert("¡Orden confirmada! Mañana integraremos la Base de Datos para generar tu ID final.")}>
              Iniciar Contratación (Checkout)
            </button>
            
            <button className="btn btn-link btn-sm text-danger w-100 text-decoration-none mt-2" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;