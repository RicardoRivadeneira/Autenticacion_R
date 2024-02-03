# Proyecto de Autenticación con Express y React

Este proyecto implementa un sistema de autenticación básico utilizando Express en el backend y React en el frontend. Permite a los usuarios iniciar sesión y acceder a una página de perfil protegida que requiere autenticación.

## Características

- **Backend con Express**: Implementa endpoints para la autenticación de usuarios y manejo de sesiones.
- **Autenticación con JWT**: Uso de JSON Web Tokens para manejar sesiones de usuario de manera segura.
- **Frontend con React**: Interfaz de usuario para registro, inicio de sesión y visualización de perfil.

## Tecnologías y Herramientas Utilizadas

- **Backend:** Node.js con Express.js
- **Autenticación:** JSON Web Tokens (JWT)
- **Frontend:** React
- **Manejo de Estados:** React useState y useContext
- **Navegación:** React Router
- **Variables de Entorno:** dotenv para manejar la configuración
- **Seguridad:** bcryptjs para el hashing de contraseñas

## Estructura del Proyecto

- `/src`: Contiene el código fuente del frontend React.
  - `/components`: Componentes React para las distintas vistas y funcionalidades.
- `/routes`: Define los endpoints del servidor Express para diferentes funcionalidades.
- `index.js`: Punto de entrada del servidor Express.
- `bbdd.js`: Simula una base de datos con usuarios predefinidos.

## Implementación de la Autenticación

### Backend (Express.js)

La autenticación se implementa mediante el uso de JSON Web Tokens (JWT). Cuando un usuario inicia sesión con éxito, el servidor genera un token JWT utilizando una clave secreta y se lo envía al cliente. Este token se almacena localmente (por ejemplo, en localStorage) y se incluye en las cabeceras de las solicitudes HTTP para acceder a rutas protegidas.

El servidor verifica este token en cada solicitud a rutas protegidas para asegurar que el usuario esté autenticado. Las rutas están definidas en `routes/auth.js`, donde se implementan distintos endpoints para el manejo de la autenticación.

### Frontend (React)

El frontend utiliza React Router para manejar la navegación y proteger las rutas accesibles solo por usuarios autenticados. El componente `Login` maneja la autenticación del usuario, guardando el token JWT en localStorage y redirigiendo al usuario a la página de perfil. El acceso a la ruta de perfil está protegido y solo es accesible si el usuario está autenticado.

## Bibliotecas y Herramientas Específicas

- `jsonwebtoken`: Utilizada para generar y verificar tokens JWT en el servidor.
- `dotenv`: Permite manejar variables de entorno para configurar el servidor Express.
- `bcryptjs`: Se usa para el hashing de contraseñas antes de almacenarlas en la base de datos.
- `cookie-parser`: Middleware para parsear cookies en solicitudes entrantes.
- `cors`: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

## Configuración

### Requisitos Previos

- Node.js instalado.
- npm o yarn para la gestión de paquetes.

### Instalación

1. Clona el repositorio:
2. Instala las dependencias del backend: `npm install` esto dentro de la ruta del backend
3. Instala las dependencias del frontend: `npm install` esto dentro de la ruta del frontend
4. Configura las variables de entorno:
Crea un archivo `.env` en el directorio raíz del proyecto basándote en `.env.example`, ajustando los valores según sea necesario.

### Ejecución

- Para iniciar el servidor backend (asegúrate de estar en el directorio del backend):
`npm run dev`
- Para iniciar el frontend React (asegúrate de estar en el directorio del frontend):
`npm start`

## Uso

- Accede a la interfaz de inicio de sesión.
- Utiliza las credenciales de un usuario predefinido o registra uno nuevo para probar la autenticación y acceder a la página de perfil.

## Elaborado por:
Ricardo Rivadeneira, Jose Imbaquinga
