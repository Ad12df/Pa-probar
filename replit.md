# BiblioDigital - Biblioteca Digital Personal

## 📚 Descripción del Proyecto

BiblioDigital es una aplicación web de biblioteca digital personal que permite a los usuarios gestionar, leer y organizar sus libros digitales. El proyecto utiliza almacenamiento local (localStorage) para guardar todos los datos, lo que significa que funciona completamente sin necesidad de un backend o base de datos externa.

## 🎯 Características Principales

### ✅ Gestión de Libros
- **Catálogo de libros** con búsqueda y filtros por categoría
- **Subida de libros** con portada personalizada (imágenes convertidas a base64)
- **Libros de demostración** incluidos para empezar
- **Favoritos** para marcar libros preferidos
- **Lector integrado** con ajustes personalizables

### ✅ Autenticación Local
- Registro e inicio de sesión usando localStorage
- No requiere servidor de autenticación
- Datos de usuario almacenados localmente en el navegador

### ✅ Configuración Personalizable
- **Perfil de usuario**: Edición de nombre y correo
- **Temas visuales**: 9 temas diferentes (Original, Claymorphism, Glassmorphism, etc.)
- **Tamaño de fuente**: Global y del lector
- **Tema del lector**: Claro, Oscuro, Sepia
- **Notificaciones**: Preferencias de avisos y recordatorios
- **Seguridad**: Cambio de contraseña

### ✅ Diseño Responsivo
- Completamente adaptado para móviles, tablets y escritorio
- Menú lateral colapsable en móviles
- Interfaz profesional y moderna
- Optimizado para todos los tamaños de pantalla

## 🛠 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura de las páginas
- **CSS3** - Estilos con variables CSS y diseño responsivo
- **JavaScript (Vanilla)** - Lógica de la aplicación sin frameworks

### Almacenamiento
- **localStorage** - Almacenamiento local del navegador para:
  - Datos de usuario
  - Libros y contenido
  - Favoritos
  - Configuración personalizada

### Servidor
- **Python 3** - Servidor HTTP simple
- **http.server** - Módulo estándar de Python para servir archivos estáticos

## 📁 Estructura del Proyecto

```
/
├── index.html              # Página de inicio
├── login.html              # Página de autenticación
├── catalog.html            # Catálogo de libros
├── favorites.html          # Libros favoritos
├── reader.html             # Lector de libros
├── settings.html           # Configuración
├── styles.css              # Estilos globales con responsive design
├── app-localStorage.js     # Lógica principal (localStorage)
├── firebase-config.js      # Configuración (vacío, para compatibilidad)
├── server.py               # Servidor HTTP Python
├── libro/                  # Carpeta para recursos de libros
├── .gitignore              # Archivos ignorados por Git
└── replit.md               # Esta documentación
```

## 🚀 Cómo Funciona

### Flujo de Usuario

1. **Registro/Login**: El usuario crea una cuenta o inicia sesión
2. **Explorar Catálogo**: Ve los libros disponibles con filtros y búsqueda
3. **Subir Libros**: Puede agregar sus propios libros con portada
4. **Leer**: Abre el lector integrado con controles de fuente y tema
5. **Favoritos**: Marca libros para acceso rápido
6. **Configurar**: Personaliza la experiencia visual y funcional

### Almacenamiento Local

Todos los datos se guardan en localStorage con las siguientes claves:

- `biblioUser` - Información del usuario actual
- `biblioBooks` - Array de libros
- `userSettings` - Configuración personalizada
- `biblioFavorites` - IDs de libros favoritos
- `userPassword` - Contraseña (solo para demostración)
- `currentBook` - Libro siendo leído actualmente

## 🎨 Características de Diseño

### Temas Disponibles
1. **BiblioDigital Clásico** - Profesional (por defecto)
2. **Claymorphism** - Suave y táctil
3. **Glassmorphism** - Cristal moderno
4. **Neumorphism** - Sutil y elegante
5. **Brutalism** - Audaz y minimalista
6. **Cyberpunk** - Neón futurista
7. **Midnight** - Oscuro profesional
8. **Pastel Dreams** - Suave y cálido
9. **Ocean Breeze** - Fresco y limpio

### Responsive Design
- **Desktop**: Layout completo con sidebar fija
- **Tablet**: Adaptación de grid y espacios
- **Mobile**: Menú hamburguesa, tarjetas apiladas
- **Landscape**: Optimizaciones para orientación horizontal

## 📝 Notas de Desarrollo

### Por qué localStorage en lugar de Firebase

El proyecto originalmente estaba configurado para Firebase, pero se modificó para usar localStorage por las siguientes razones:

1. **No requiere credenciales de API**: Funciona sin configuración externa
2. **Totalmente local**: Los datos permanecen en el navegador del usuario
3. **Sin costos**: No hay límites ni tarifas de Firebase
4. **Privacidad**: Los datos nunca salen del dispositivo del usuario
5. **Simplicidad**: Más fácil de entender y mantener

### Servidor de Desarrollo

El servidor Python (`server.py`) está configurado para:
- Servir en `0.0.0.0:5000` (compatible con Replit)
- Deshabilitar caché para desarrollo
- Servir archivos estáticos desde la raíz del proyecto

## 🔧 Configuración en Replit

### Workflow Configurado
- **Nombre**: BiblioDigital Server
- **Comando**: `python3 server.py`
- **Puerto**: 5000
- **Tipo**: Webview (vista previa de sitio web)

### Variables de Entorno
No se requieren variables de entorno ya que usa almacenamiento local.

## 🌐 Acceso a la Aplicación

Una vez que el servidor esté corriendo:
1. La aplicación se abrirá automáticamente en la vista previa de Replit
2. También puedes acceder desde cualquier navegador en: `http://localhost:5000`
3. En Replit, usa el dominio público proporcionado

## 📱 Uso de la Aplicación

### Primera Vez
1. Accede a la aplicación
2. Haz clic en "Crear cuenta"
3. Ingresa tu nombre, email y contraseña
4. ¡Listo! Ya puedes explorar el catálogo

### Subir un Libro
1. Ve al Catálogo
2. Haz clic en "Subir Libro"
3. Completa el formulario:
   - Título, autor, categoría, descripción
   - Opcional: URL de portada o sube una imagen
   - Contenido del libro (texto)
4. Haz clic en "Subir Libro"

### Personalizar
1. Ve a Configuración
2. Ajusta tu perfil
3. Selecciona un tema visual
4. Configura tamaños de fuente
5. Activa/desactiva notificaciones

## 🎓 Aprendizajes Técnicos

Este proyecto demuestra:
- Gestión de estado con JavaScript vanilla
- Uso efectivo de localStorage
- Diseño responsivo con CSS moderno
- Manejo de archivos (imágenes a base64)
- Arquitectura de SPA sin frameworks
- Servidor HTTP simple con Python

## 🔒 Seguridad

**Nota importante**: Este es un proyecto de demostración. En producción:
- NO almacenes contraseñas en texto plano
- USA hash de contraseñas (bcrypt, etc.)
- IMPLEMENTA autenticación real con JWT
- USA HTTPS para comunicaciones
- VALIDA inputs del usuario
- SANITIZA contenido para prevenir XSS

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🤝 Contribuciones

Para mejorar este proyecto:
1. Implementar lectura de PDFs real
2. Agregar sincronización con cloud storage
3. Mejorar el lector con paginación
4. Añadir estadísticas de lectura
5. Implementar modo sin conexión con Service Workers

---

**Desarrollado para Replit** 🚀
Fecha: Octubre 2025
