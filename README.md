# Digital Mensa - Hub de Soluciones Tecnológicas

E-commerce de grado corporativo especializado en el ecosistema B2B, diseñado para la preventa de consultorías avanzadas en CRM y desarrollo de Single Page Applications (SPA). Esta plataforma asíncrona implementa una arquitectura modular desacoplada construida sobre React y orquestada con servicios en la nube en tiempo real mediante Firebase Firestore.

## 🚀 Enlaces del Proyecto

* **Repositorio Oficial:** [https://github.com/Agustino27/ProyectoFinal-PerezAlvarez](https://github.com/Agustino27/ProyectoFinal-PerezAlvarez)
* **Memoria Técnica de Ingeniería (Google Doc Exigido):** [https://docs.google.com/document/d/1dsSAvLALfHv0HDnPYx6nuHA1fbvFfzpJ0Wk3Z9WjdaU/edit?usp=sharing]

---

## 🛠️ Stack Tecnológico Utilizado

* **Library Base:** React 19 (Modo Concurrente nativo)
* **Build Tool:** Vite 8 (Estructura de bundle optimizada de alta velocidad)
* **Routing:** React Router Dom (Navegación SPA fluida mediante Hooks parametrizados)
* **State Management:** React Context API (Persistencia global del carrito de compras)
* **Styling & UI:** Bootstrap (Grillas fluidas, componentes adaptables y estilos limpios)
* **Cloud Database & BaaS:** Firebase Firestore (Almacenamiento e ingesta de datos asíncronos)

---

## 📁 Arquitectura del Proyecto

La estructura de directorios sigue estrictamente el patrón modular de componentización y la separación formal de responsabilidades exigidas por la academia:

```text
src/
├── components/          # Componentes de presentación visual (Presenters)
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Item.jsx
│   ├── ItemCount.jsx
│   ├── ItemDetail.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx  # Contenedor de datos masivos (Container)
│   ├── ItemDetailContainer.jsx # Contenedor de detalle específico (Container)
│   └── NavBar.jsx
├── context/             # Lógica de estados globales
│   └── CartContext.jsx
├── services/            # Inicialización de servicios externos e infraestructura
│   └── firebase.js
├── App.jsx              # Enrutador central y pasarela de layouts
└── main.jsx             # Punto de entrada al DOM virtual de React