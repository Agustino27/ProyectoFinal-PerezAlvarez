import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="d-flex flex-column align-items-center w-100 mt-3">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-outline-secondary px-3" onClick={decrement}>-</button>
        <span className="mx-4 fs-5 fw-bold">{count}</span>
        <button className="btn btn-outline-secondary px-3" onClick={increment}>+</button>
      </div>
      <button 
        className="btn btn-primary w-100 rounded-pill fw-bold" 
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin disponibilidad" : "Agregar al Carrito"}
      </button>
    </div>
  );
};

export default ItemCount;