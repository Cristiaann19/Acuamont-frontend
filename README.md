# Acuamont Frontend

Acuamont es una aplicación web moderna y dinámica construida con React y TypeScript, diseñada para ofrecer una experiencia de usuario fluida y visualmente atractiva. 

## 🚀 Tecnologías Principales

- **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuario.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que añade tipado estático.
- **[Vite](https://vitejs.dev/)**: Entorno de desarrollo ultrarrápido y empaquetador eficiente.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de CSS para diseño UI con clases utilitarias.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para realizar animaciones fluidas y de nivel profesional.
- **[Lucide React](https://lucide.dev/)** y **[React Icons](https://react-icons.github.io/react-icons/)**: Colección de íconos adaptables y de alta calidad.

## 🏗️ Arquitectura de Componentes

El proyecto está organizado en diversos componentes modulares para asegurar mantenimiento y escalabilidad del proyecto:

- `Loader.tsx`: Pantalla de carga animada inicial ("Sumergiéndote...").
- `Navbar.tsx`: Navegación y acceso al carrito.
- `Hero.tsx`: Sección principal de impacto visual (Landing).
- `About.tsx`: Información sobre la empresa o proyecto.
- `Services.tsx`: Descripción de servicios que se ofrecen.
- `Products.tsx`: Listado de productos e integración con el carrito (`Card.tsx` - Carrito de compras y visualización de un producto particular).
- `Comments.tsx`: Opiniones y testimonios de usuarios.
- `FAQ.tsx`: Preguntas frecuentes.
- `Contact.tsx`: Sección de contacto.

## 📂 Organización del Proyecto

El código base se agrupa principalmente en el directorio `src/`, manteniendo el orden:

- `src/components/`: Componentes principales de la UI.
- `src/models/`: Definición de tipos o interfaces de datos (e.g. `Product`, `CartItem`).
- `src/assets/`: Recursos estáticos y multimedia.
- `src/App.tsx`: Ensamblado de todo el layout y ruteo central.
- `src/index.css` & `src/App.css`: Hoja de estilos principales en Tailwind.

## ⚙️ Instalación y Ejecución Local

Para correr el proyecto en tu entorno local:

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   *El empaquetador compilará la app gracias a Vite y te dará una URL local (usualmente `http://localhost:5173`).*

3. **Construir para Producción**:
   ```bash
   npm run build
   ```

## ✨ Características Destacadas

- **Diseño Responsive:** Preparado para verse bien en dispositivos móviles y escritorios.
- **Animaciones Sofisticadas:** Utiliza `framer-motion` para darle vida a cada transición y revelado de componente.
- **Estado Global Simulado:** Carrito de compras implementado a través del estado de componentes y `props`.

---

© 2026 ACUAMONT. Todos los derechos reservados.
