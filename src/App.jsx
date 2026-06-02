import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Contacto from "./components/Contacto";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="bg-light min-vh-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hub de Soluciones Tecnológicas" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Servicios Especializados" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route 
            path="*" 
            element={
              <div className="container text-center mt-5 p-5">
                <h2>Error 404</h2>
                <p className="text-muted">La solución digital que buscas no se encuentra en esta ruta.</p>
              </div>
            } 
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;