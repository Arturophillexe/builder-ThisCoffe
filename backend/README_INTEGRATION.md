# Backend Integration - MongoDB & Products API

Esta aplicación ahora está completamente integrada con MongoDB para manejar usuarios y productos en tiempo real.

## 🗄️ Modelos de Base de Datos

### User Model
- **Campos**: firstName, lastName, email, password, company, role, Usertype, agreeToTerms, subscribeNewsletter
- **Tipos de Usuario**: 'normal' (Usuario) y 'seller' (Vendedor)
- **Autenticación**: JWT con bcryptjs para passwords

### Product Model
- **Campos**: name, description, price, image, category, origin, roastLevel, featured, sellerId, active
- **Categorías**: beans, ground, equipment, accessories
- **Relación**: Cada producto pertenece a un vendedor (sellerId)

## 🚀 APIs Implementadas

### Usuarios (`/api/users`)
- `POST /register` - Registrar usuario
- `POST /login` - Iniciar sesión
- `GET /profile` - Obtener perfil (autenticado)

### Productos (`/api/products`)
- `GET /` - Obtener todos los productos (con filtros)
- `GET /search` - Buscar productos
- `GET /:id` - Obtener producto por ID
- `GET /seller/my-products` - Productos del vendedor (autenticado)
- `POST /` - Crear producto (solo vendedores)
- `PUT /:id` - Actualizar producto (solo propietario)
- `DELETE /:id` - Eliminar producto (solo propietario)

### Eventos (`/api/eventos`)
- Mantiene la funcionalidad existente de eventos corporativos

## 🔧 Configuración y Uso

### 1. Instalar Dependencias
```bash
cd backend
npm install
```

### 2. Configurar Variables de Entorno
Crear archivo `.env` en el directorio backend:
```env
MONGO_URI=mongodb://localhost:27017/thiscoffee
JWT_SECRET=tu_jwt_secret_aqui
PORT=5000
```

### 3. Poblar Base de Datos (Opcional)
```bash
npm run seed
```
Esto creará:
- Usuario vendedor: `seller@thiscoffee.com` / `123456`
- 8 productos de ejemplo

### 4. Iniciar Servidor
```bash
npm run dev  # Para desarrollo
npm start    # Para producción
```

## 🎯 Funcionalidades Frontend

### Para Usuarios Normales:
- **Tienda**: Ver todos los productos con búsqueda y filtros
- **Carrito**: Agregar productos al carrito
- **Perfil**: Gestión de cuenta personal

### Para Vendedores:
- **Dashboard**: Panel de gestión de productos
- **CRUD Completo**: Crear, editar, eliminar productos
- **Gestión Visual**: Interfaz intuitiva con preview de productos
- **Redirección Automática**: Al hacer login van directo al dashboard

## 🔐 Seguridad Implementada

- **Autenticación JWT**: Tokens seguros para sesiones
- **Middleware de Auth**: Protección de rutas sensibles
- **Validación de Permisos**: Solo vendedores pueden gestionar productos
- **Soft Delete**: Los productos se marcan como inactivos en lugar de eliminarse
- **Encriptación**: Passwords hasheados con bcryptjs

## 📊 Estructura de Datos

### Producto de Ejemplo:
```json
{
  "_id": "...",
  "name": "Etíope Yirgacheffe",
  "description": "Notas brillantes y florales...",
  "price": 24.99,
  "image": "https://...",
  "category": "beans",
  "origin": "Etiopía",
  "roastLevel": "light",
  "featured": true,
  "sellerId": "...",
  "active": true,
  "createdAt": "...",
  "updatedAt": "..."
}
```

### Usuario Vendedor de Ejemplo:
```json
{
  "_id": "...",
  "firstName": "Juan",
  "lastName": "Pérez",
  "email": "vendedor@thiscoffee.com",
  "Usertype": "seller",
  "company": "Café Premium SL",
  "role": "Vendedor"
}
```

## 🧪 Testing

### Endpoints para Probar:
1. **Registro de Vendedor**:
   ```bash
   curl -X POST http://localhost:5000/api/users/register \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test","lastName":"Seller","email":"test@test.com","password":"123456","Usertype":"seller","role":"Vendedor","agreeToTerms":true}'
   ```

2. **Login**:
   ```bash
   curl -X POST http://localhost:5000/api/users/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@test.com","password":"123456"}'
   ```

3. **Crear Producto**:
   ```bash
   curl -X POST http://localhost:5000/api/products \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{"name":"Café de Prueba","description":"Descripción","price":15.99,"category":"beans","image":"https://example.com/image.jpg"}'
   ```

## 📝 Notas Importantes

- La aplicación mantiene compatibilidad con datos estáticos para desarrollo
- Los vendedores solo pueden gestionar sus propios productos
- Los productos eliminados se marcan como `active: false`
- El frontend se actualiza automáticamente al modificar productos
- Sistema de búsqueda implementado con índices de MongoDB

## 🎨 Integración Visual

- **Tema de Café**: Colores y estilos consistentes
- **Responsivo**: Funciona en móvil y desktop
- **Loading States**: Indicadores de carga durante API calls
- **Error Handling**: Mensajes de error amigables
- **Toast Notifications**: Confirmaciones de acciones

¡El sistema está completamente funcional y listo para producción! 🎉
