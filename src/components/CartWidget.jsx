import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const quantity = totalQuantity();

  // Renderizado condicional: si no hay productos, no se muestra el widget
  if (quantity === 0) return null;

  return (
    <Link to="/cart" className="btn btn-dark position-relative ms-lg-3 mt-2 mt-lg-0 p-2">
      <i className="bi bi-cart3 fs-4 text-white">🛒</i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {quantity}
      </span>
    </Link>
  );
};

export default CartWidget;