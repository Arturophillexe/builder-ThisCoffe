# Backend thiscoffee

API REST para el sistema de gestión de eventos corporativos y usuarios de thiscoffee.

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v16 o superior)
- MongoDB (local o remoto)
- npm o yarn

### Instalación

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**

   ```bash
   cp .env.example .env
   # Editar .env con tus configuraciones
   ```

3. **Iniciar MongoDB:**

   ```bash
   # En Ubuntu/Debian:
   sudo systemctl start mongod

   # En macOS con Homebrew:
   brew services start mongodb-community

   # O usar Docker:
   docker run -d -p 27017:27017 --name mongodb mongo
   ```

4. **Iniciar el servidor:**

   ```bash
   # Desarrollo (con recarga automática)
   npm run dev

   # Producción
   npm start
   ```

## 📡 API Endpoints

### 🔐 Autenticación

| Método | Endpoint              | Descripción                    |
| ------ | --------------------- | ------------------------------ |
| POST   | `/api/users/register` | Registrar nuevo usuario        |
| POST   | `/api/users/login`    | Iniciar sesión                 |
| GET    | `/api/users/profile`  | Obtener perfil (requiere auth) |

### 📅 Eventos

| Método | Endpoint           | Descripción               |
| ------ | ------------------ | ------------------------- |
| POST   | `/api/eventos`     | Crear nuevo evento        |
| GET    | `/api/eventos`     | Obtener todos los eventos |
| GET    | `/api/eventos/:id` | Obtener evento por ID     |
| PUT    | `/api/eventos/:id` | Actualizar evento         |

### 🧪 Testing

| Método | Endpoint    | Descripción                     |
| ------ | ----------- | ------------------------------- |
| GET    | `/api/test` | Verificar conexión del servidor |

## 📋 Esquemas de Datos

### Usuario

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string (único)",
  "company": "string (opcional)",
  "role": "string",
  "password": "string (hasheado)",
  "agreeToTerms": "boolean",
  "subscribeNewsletter": "boolean"
}
```

### Evento

```json
{
  "eventType": "string",
  "attendees": "number",
  "date": "Date",
  "duration": "string",
  "location": "string",
  "name": "string",
  "email": "string",
  "phone": "string (opcional)",
  "company": "string (opcional)",
  "message": "string (opcional)",
  "status": "pending|confirmed|cancelled"
}
```

## 🛠️ Tecnologías

- **Express.js**: Framework web
- **MongoDB**: Base de datos
- **Mongoose**: ODM para MongoDB
- **bcryptjs**: Hashing de contraseñas
- **jsonwebtoken**: Autenticación JWT
- **cors**: Manejo de CORS
- **dotenv**: Variables de entorno

## 🔧 Configuración

### Variables de Entorno (.env)

```
MONGO_URI=mongodb://localhost:27017/thiscoffee
PORT=5000
JWT_SECRET=tu_jwt_secret_muy_seguro_aqui
NODE_ENV=development
```

## 📝 Estructura del Proyecto

```
backend/
├── controllers/     # Lógica de controladores
├── models/         # Modelos de Mongoose
├── routes/         # Definición de rutas
├── middleware/     # Middleware personalizado
├── .env           # Variables de entorno
├── server.js      # Punto de entrada
└── package.json   # Dependencias y scripts
```

## 🚨 Solución de Problemas

### Error de conexión a MongoDB

```bash
# Verificar si MongoDB está corriendo
sudo systemctl status mongod

# Iniciar MongoDB
sudo systemctl start mongod

# Ver logs de MongoDB
sudo journalctl -u mongod
```

### Puerto ya en uso

```bash
# Verificar qué proceso usa el puerto 5000
lsof -i :5000

# Cambiar puerto en .env
PORT=5001
```

## 🔄 Desarrollo

Para desarrollo activo, usa:

```bash
npm run dev
```

Esto iniciará el servidor con `nodemon` que recargará automáticamente cuando detecte cambios en los archivos.
