import { createContext, useState } from "react";

// Creación del contexto
export const CartContext = createContext();

// Proveedor personalizado (CustomProvider) exigido por la consigna
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito o sumar cantidad si ya existe
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Remover un item específico
  const removeItem = (itemId) => {
    setCart(cart.filter((prod) => prod.id !== itemId));
  };

  // Limpiar por completo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Validar si el producto ya está en el carrito
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calcular el total de unidades para el CartWidget
  const totalQuantity = () => {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  };

  // Calcular el precio total de la compra
  const totalCartPrice = () => {
    return cart.reduce((total, prod) => total + prod.quantity * prod.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};