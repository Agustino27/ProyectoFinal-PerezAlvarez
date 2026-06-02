import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Solicitud procesada con éxito. Un consultor de Digital Mensa se pondrá en contacto a la brevedad.`);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="container mt-5">
      <div className="row g-5">
        <div className="col-lg-5">
          <div className="bg-dark text-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
            <div>
              <h3 className="fw-bold mb-3 text-primary">Digital Mensa</h3>
              <p className="text-white-50">
                Hub global de soluciones tecnológicas y arquitectura de sistemas. Operamos bajo un modelo íntegramente descentralizado para dar soporte a infraestructuras críticas en cualquier parte del mundo.
              </p>
            </div>
            
            <div className="my-4">
              <div className="mb-3 d-flex align-items-center">
                <span className="fs-5 me-3">📧</span>
                <div>
                  <h6 className="mb-0 text-secondary small fw-semibold">E-mail Operaciones</h6>
                  <a href="mailto:digitalmensa.solutions@gmail.com" className="text-white text-decoration-none">
                    digitalmensa.solutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <span className="fs-5 me-3">📱</span>
                <div>
                  <h6 className="mb-0 text-secondary small fw-semibold">Línea Directa Internacional</h6>
                  <a href="tel:+351937933316" className="text-white text-decoration-none">
                    +351 937 933 316
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <span className="fs-5 me-3">🌍</span>
                <div>
                  <h6 className="mb-0 text-secondary small fw-semibold">Modalidad</h6>
                  <p className="mb-0 text-white">Remote & Distributed Operations</p>
                </div>
              </div>
            </div>

            <div className="border-top border-secondary pt-3 text-white-50 small">
              Especialistas en despliegues a gran escala e integraciones corporativas.
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="bg-white p-4 rounded-4 shadow-sm">
            <h3 className="fw-bold text-dark mb-4">Iniciar una Consulta</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label text-secondary small fw-semibold">Nombre Completo</label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-secondary small fw-semibold">Dirección de Email</label>
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="form-label text-secondary small fw-semibold">Detalles del Requerimiento</label>
                <textarea
                  className="form-control rounded-3"
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold py-2">
                Enviar Requerimiento
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;