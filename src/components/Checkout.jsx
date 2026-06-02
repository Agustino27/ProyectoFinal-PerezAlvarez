import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalCartPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [buyer, setBuyer] = useState({
    nombre: "",
    telefono: "",
    email: ""
  });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer: buyer,
      items: cart.map(prod => ({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: prod.quantity
      })),
      total: totalCartPrice(),
      date: serverTimestamp()
    };

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-5 text-center p-5 bg-white rounded-4 shadow-sm">
        <h2 className="fw-bold text-success mb-3">¡Contratación Confirmada!</h2>
        <p className="text-muted fs-5">Gracias por confiar la arquitectura tecnológica de tu negocio en nosotros.</p>
        <div className="bg-light p-4 rounded-3 my-4 mx-auto" style={{ maxWidth: "500px" }}>
          <span className="text-secondary small d-block mb-1 text-uppercase fw-semibold tracking-wider">ID de Seguimiento de Operación</span>
          <span className="fs-4 fw-mono text-dark fw-bold">{orderId}</span>
        </div>
        <p className="text-secondary small">Conserva este identificador para las sesiones de consultoría iniciales.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4 fw-bold mt-3">
          Volver al Hub Principal
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center p-5">
        <h2>No hay servicios en preventa</h2>
        <p className="text-muted">Explora el catálogo para agregar soluciones a tu orden.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4 fw-bold mt-3">
          Ver Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="bg-white p-4 rounded-4 shadow-sm">
        <h3 className="fw-bold text-dark mb-2">Finalizar Contratación</h3>
        <p className="text-muted small mb-4">Completa los datos de tu organización corporativa para registrar la orden de servicio en la red de Digital Mensa.</p>
        
        <form onSubmit={handleConfirmOrder}>
          <div className="mb-3">
            <label className="form-label text-secondary small fw-semibold">Nombre Completo / Empresa</label>
            <input
              type="text"
              className="form-control rounded-3"
              name="nombre"
              value={buyer.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-secondary small fw-semibold">Teléfono de Contacto</label>
            <input
              type="tel"
              className="form-control rounded-3"
              name="telefono"
              value={buyer.telefono}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label text-secondary small fw-semibold">Dirección de Correo Electrónico</label>
            <input
              type="email"
              className="form-control rounded-3"
              name="email"
              value={buyer.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="border-top pt-3 mb-4 d-flex justify-content-between align-items-center">
            <span className="fw-bold text-secondary">Total Bruto de Soluciones:</span>
            <span className="fs-4 fw-bold text-primary">${totalCartPrice()}</span>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary w-100 rounded-pill fw-bold py-2"
            disabled={loading}
          >
            {loading ? "Registrando en la nube de Firebase..." : "Confirmar y Generar Orden"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;