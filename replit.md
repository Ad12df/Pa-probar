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

### ✅ Autenticación Local (Opcional)
- **Acceso libre**: Puedes explorar el catálogo, favoritos, biblioteca y ajustes sin iniciar sesión
- **Modo invitado**: Navega la app como invitado sin restricciones
- **Inicio de sesión opcional**: Solo necesario para subir tus propios libros
- Registro e inicio de sesión usando localStorage
- No requiere servidor de autenticación
- Datos de usuario almacenados localmente en el navegador

### ✅ Configuración Personalizable
- **Perfil de usuario**: Edición de nombre y correo
- **Temas visuales**: 6 temas modernos (Clásico, Oscuro, Sepia, Océano, Bosque, Púrpura)
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
  - Datos de usuario (autenticación)
  - Metadatos de libros (título, autor, categoría, descripción)
  - Favoritos
  - Configuración personalizada
  - Portadas de libros (imágenes en base64, ~100-500KB)
- **IndexedDB** - Base de datos del navegador para:
  - Archivos PDF completos (hasta 50MB por archivo)
  - Permite almacenar archivos binarios grandes que exceden el límite de localStorage (~5MB total)
  - Base de datos: BiblioDigitalDB
  - Object Store: pdfs (clave: bookId)

### Servidor
- **Python 3** - Servidor HTTP simple
- **http.server** - Módulo estándar de Python para servir archivos estáticos

## 📁 Estructura del Proyecto

```
/
├── index.html              # Página de inicio
├── login.html              # Página de autenticación
├── catalog.html            # Catálogo de libros
├── library.html            # Mi Biblioteca (libros del usuario)
├── favorites.html          # Libros favoritos
├── reader.html             # Lector de libros
├── settings.html           # Configuración
├── styles.css              # Estilos globales con responsive design
├── app-localStorage.js     # Lógica principal (localStorage + IndexedDB)
├── firebase-config.js      # Configuración de almacenamiento local
├── server.py               # Servidor HTTP Python
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

**localStorage** - Metadatos y configuración:
- `biblioUser` - Información del usuario actual
- `biblioBooks` - Array de metadatos de libros (NO incluye PDFs)
- `userSettings` - Configuración personalizada
- `biblioFavorites` - IDs de libros favoritos
- `userPassword` - Contraseña (solo para demostración)
- `currentBook` - Libro siendo leído actualmente

**IndexedDB (BiblioDigitalDB)** - Archivos PDF:
- Object Store: `pdfs`
- Clave: `bookId` (ID único del libro)
- Valor: `pdfDataUrl` (archivo PDF en formato base64)
- Límite práctico: ~50MB por archivo

## 🎨 Características de Diseño

### Temas Disponibles
1. **Clásico** - Tema Original Profesional (por defecto)
2. **Oscuro** - Modo Nocturno con paleta dark
3. **Sepia** - Estilo Vintage cálido
4. **Océano** - Azul Refrescante y limpio
5. **Bosque** - Verde Natural relajante
6. **Púrpura** - Sueño Moderno vibrante

Cada tema incluye:
- Paleta de colores completa
- Gradientes personalizados
- Sombras y efectos específicos
- Estilos de sidebar, cards y modales adaptados

### Responsive Design
- **Desktop**: Layout completo con sidebar fija
- **Tablet**: Adaptación de grid y espacios
- **Mobile**: Menú hamburguesa, tarjetas apiladas
- **Landscape**: Optimizaciones para orientación horizontal

## 📝 Notas de Desarrollo

### Por qué localStorage + IndexedDB en lugar de Firebase

El proyecto originalmente estaba configurado para Firebase, pero se modificó para usar almacenamiento local por las siguientes razones:

1. **No requiere credenciales de API**: Funciona sin configuración externa
2. **Totalmente local**: Los datos permanecen en el navegador del usuario
3. **Sin costos**: No hay límites ni tarifas de Firebase
4. **Privacidad**: Los datos nunca salen del dispositivo del usuario
5. **Simplicidad**: Más fácil de entender y mantener

### Por qué IndexedDB para PDFs

IndexedDB se utiliza específicamente para archivos PDF porque:

1. **localStorage tiene límite de ~5MB**: No suficiente para PDFs
2. **IndexedDB soporta almacenamientos grandes**: >50MB por archivo
3. **Mejor rendimiento**: Optimizado para archivos binarios
4. **Asíncrono**: No bloquea el hilo principal del navegador
5. **API moderna**: Promesas nativas con async/await

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

## 🚀 Mejoras Futuras

### Recomendaciones Técnicas
1. **Modo privado del navegador**: Implementar fallback si IndexedDB no está disponible
2. **Optimización de memoria**: Considerar almacenar PDFs como Blob en lugar de base64 para reducir overhead
3. **Monitoreo de rendimiento**: Agregar métricas para PDFs grandes (>10MB)
4. **Tests de integración**: Cubrir flujos completos upload → edit → read → delete

### Funcionalidades Adicionales
1. **Lectura de PDFs real**: Integrar PDF.js para visualización avanzada
2. **Sincronización cloud**: Opcional con Google Drive o Dropbox
3. **Lector mejorado**: Paginación, marcadores, anotaciones
4. **Estadísticas de lectura**: Tiempo leído, progreso, libros completados
5. **Service Workers**: Modo sin conexión completo
6. **Exportar/Importar**: Backup de biblioteca completa
7. **Búsqueda de contenido**: Buscar texto dentro de los PDFs

---

## 🔄 Historial de Cambios

### Octubre 2025 - Versión 2.1
- ✅ **Acceso libre sin autenticación**: Ahora puedes explorar catálogo, favoritos, biblioteca y ajustes sin iniciar sesión
- ✅ **Modo invitado mejorado**: Interfaz adaptada para usuarios no autenticados con indicador "Invitado"
- ✅ **Botón inteligente de subir**: Muestra "Inicia sesión para subir" o "Subir libro" según el estado de sesión
- ✅ **Nuevos temas modernos**: 6 temas visuales completamente rediseñados (Clásico, Oscuro, Sepia, Océano, Bosque, Púrpura)
- ✅ **Mejoras de UX**: Flujo de autenticación simplificado y más intuitivo

### Octubre 2025 - Versión 2.0
- ✅ **Migración a IndexedDB**: Implementado almacenamiento de PDFs en IndexedDB para superar el límite de 5MB de localStorage
- ✅ **Bibliotecas por usuario**: Cada usuario ahora tiene su propia biblioteca de libros separada
- ✅ **Página "Mi Biblioteca"**: Nueva sección para gestionar únicamente los libros subidos por el usuario
- ✅ **Funcionalidad completa de PDFs**: Subir, editar, eliminar y leer archivos PDF reales (hasta 50MB)
- ✅ **Corrección de logout**: El botón de cerrar sesión ahora funciona correctamente
- ✅ **Servidor optimizado**: Configuración SO_REUSEADDR para mejor manejo de puertos
- ✅ **Limpieza de código**: Eliminados archivos obsoletos de Firebase

---

**Desarrollado para Replit** 🚀
Fecha: Octubre 2025
Versión: 2.0
