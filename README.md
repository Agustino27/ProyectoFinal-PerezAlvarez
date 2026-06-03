# Digital Mensa - Hub de Soluciones Tecnológicas

E-commerce de grado corporativo especializado en el ecosistema B2B, diseñado para la preventa de consultorías avanzadas en CRM y desarrollo de Single Page Applications (SPA). Esta plataforma asíncrona implementa una arquitectura modular desacoplada construida sobre React y orquestada con servicios en la nube en tiempo real mediante Firebase Firestore.

## 🚀 Enlaces del Proyecto

* **Repositorio Oficial:** [https://github.com/Agustino27/ProyectoFinal-PerezAlvarez](https://github.com/Agustino27/ProyectoFinal-PerezAlvarez)
* **Memoria Técnica de Ingeniería (Google Doc Exigido):** [https://docs.google.com/document/d/1dsSAvLALfHv0HDnPYx6nuHA1fbvFfzpJ0Wk3Z9WjdaU/edit?usp=sharing](https://docs.google.com/document/d/1dsSAvLALfHv0HDnPYx6nuHA1fbvFfzpJ0Wk3Z9WjdaU/edit?usp=sharing)
* **Link al Deploy (Sugerido, en Netlify):** [https://chic-starburst-a35fc0.netlify.app](https://chic-starburst-a35fc0.netlify.app)

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

🔐 Configuración del entorno local (.env)
Para conectar la aplicación con Firebase sin exponer credenciales, crear un archivo .env en la raíz del proyecto,
(no se sube al repositorio; debe estar en .gitignore). Las variables son consumidas desde src/services/firebase.js usando import.meta.env.

VITE_FIREBASE_API_KEY=tu_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
VITE_FIREBASE_PROJECT_ID=tu_project_id_aqui
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_aqui
VITE_FIREBASE_APP_ID=tu_app_id_aqui


Ejecutar el proyecto en la terminal:

Bash
npm install
npm run dev

🌟 Características Principales (Features) y Guía de Uso
Catálogo desde Firestore: Filtrado dinámico por categorías corporativas a través de la URL mediante captura reactiva de useParams. Prueba ingresando a las distintas categorías de la barra de navegación para ver cómo muta el catálogo.

Ficha Técnica Detallada: Consumo atómico con getDoc para ver las especificaciones de un solo servicio. Prueba haciendo clic en "Ver Detalle" en cualquier producto.

Carrito con Context API: Persistencia y consistencia global de la compra aplicando inmutabilidad rigurosa. Prueba usando el componente ItemCount para sumar servicios controlando que no superen el stock y navega por la app viendo cómo se mantiene el contador.

Pasarela Transaccional Checkout: Formulario reactivo que procesa la validación del comprador y genera documentos en Firestore con estampas temporales del servidor (serverTimestamp()), retornando un ID único de seguimiento y vaciando el carrito de forma automática. Prueba completando el proceso de compra para recibir tu hash de confirmación y verificar la creación de la orden.

🧠 Lecciones Aprendidas y Retos Técnicos
Asincronía en Renderizados Concurrentes: Uno de los mayores retos fue evitar fallas visuales o errores de tipos al consultar bases de datos distribuidas. Se solucionó implementando renderizados condicionales basados en banderas de control (loading) acompañados de Spinners nativos de Bootstrap, asegurando que el software no intente leer propiedades de variables indefinidas mientras se completa la promesa.

Normalización Multimedia y Seguridad: Para corregir enlaces rotos y optimizar la velocidad del sitio, se migraron los recursos locales hacia URLs absolutas integradas en la nube. Adicionalmente, el aislamiento de credenciales críticas mediante variables de entorno protegidas por el .gitignore permitió consolidar una arquitectura profesional y segura que cumple con los estándares exigidos por la academia.


---

### 🗂️ Recordatorio importante antes del Push:
Asegurate de presionar **`Ctrl + S`** (o *File > Save*) en Visual Studio Code para que los cambios queden guardados en tu archivo.

### 🚀 Mandalo a GitHub

Abrí la terminal en VS Code y escribí estos tres comandos para sobreescribir el repositorio con el archivo final completo:

```bash
git add README.md
git commit -m "docs: update readme"
git push origin main

