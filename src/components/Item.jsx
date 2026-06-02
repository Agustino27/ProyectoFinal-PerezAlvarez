import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
        <img 
          src={product.img} 
          className="card-img-top" 
          alt={product.title} 
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge bg-primary align-self-start mb-2 text-uppercase">{product.category}</span>
          <h5 className="card-title fw-bold text-dark">{product.title}</h5>
          <p className="card-text text-muted flex-grow-1 fs-6">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fs-4 fw-bold text-primary">${product.price}</span>
            {/* 🌟 Botón actualizado con Link dinámico */}
            <Link to={`/item/${product.id}`} className="btn btn-outline-primary btn-sm px-3 rounded-pill">
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;