import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 tracking-tight text-white" to="/">
          DIGITAL<span className="text-primary">MENSA</span>
        </Link>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center gap-2 my-3 my-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-primary fw-semibold" : "nav-link text-secondary"} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-primary fw-semibold" : "nav-link text-secondary"} to="/category/crm">
                Consultoría CRM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-primary fw-semibold" : "nav-link text-secondary"} to="/category/desarrollo">
                Desarrollo Web
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-primary fw-semibold" : "nav-link text-secondary"} to="/category/packs">
                Packs Corporativos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-primary fw-semibold" : "nav-link text-secondary"} to="/contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
          
          <div className="d-flex justify-content-center align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;