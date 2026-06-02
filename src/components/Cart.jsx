import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalCartPrice, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center p-5">
        <h2 className="fw-bold">Tu carrito está vacío</h2>
        <p className="text-muted">No has seleccionado ningún servicio de consultoría o desarrollo aún.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4 fw-bold mt-3">
          Explorar Soluciones
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Desglose de Servicios Seleccionados</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="bg-white p-4 rounded-4 shadow-sm">
            {cart.map((prod) => (
              <div key={prod.id} className="d-flex align-items-center justify-content-between border-bottom py-3 mb-2">
                <div>
                  <h5 className="fw-bold mb-1 text-dark">{prod.title}</h5>
                  <p className="text-muted small mb-0">
                    Cantidad: <span className="fw-bold text-dark">{prod.quantity}</span> × ${prod.price}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <span className="fw-bold text-primary">${prod.price * prod.quantity}</span>
                  <button 
                    onClick={() => removeItem(prod.id)} 
                    className="btn btn-outline-danger btn-sm rounded-circle border-0"
                    title="Eliminar ítem"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-start mt-3">
              <button onClick={clearCart} className="btn btn-link text-danger text-decoration-none small p-0">
                Vaciar todo el contenido
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="bg-dark text-white p-4 rounded-4 shadow-sm">
            <h4 className="fw-bold mb-4">Resumen de Orden</h4>
            <div className="d-flex justify-content-between mb-3 border-bottom border-secondary pb-3">
              <span className="text-white-50">Subtotal de Consultorías:</span>
              <span className="fw-bold">${totalCartPrice()}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span className="fs-5 fw-bold">Total Estimado:</span>
              <span className="fs-4 fw-bold text-primary">${totalCartPrice()}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary w-100 rounded-pill fw-bold py-2">
              Iniciar Contratación de Servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;