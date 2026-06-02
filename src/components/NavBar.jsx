import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid px-4">
        {/* Usamos Link en lugar de <a> para evitar recargar la página */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          Digital<span className="text-primary">Mensa</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/crm">Consultoría CRM</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/desarrollo">Desarrollo Web</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/packs">Packs Corporativos</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-primary text-white ms-lg-2 px-3" href="#">Contacto</a>
            </li>
            
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;