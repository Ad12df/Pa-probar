# 🔥 Guía de Configuración de Firebase para BiblioDigital

Este archivo contiene las instrucciones para configurar y desplegar BiblioDigital en Firebase.

## 📋 Archivos de Configuración Creados

Los siguientes archivos de configuración de Firebase ya están creados en el proyecto:

### 1. `firebase.json`
Configuración principal de Firebase que incluye:
- **Hosting**: Configuración del servidor web
- **Firestore**: Referencia a las reglas de base de datos
- **Storage**: Referencia a las reglas de almacenamiento

### 2. `.firebaserc`
Configuración del proyecto Firebase. 
**⚠️ IMPORTANTE**: Debes cambiar `bibliodigital-proyecto` por el ID real de tu proyecto Firebase.

### 3. `firestore.rules`
Reglas de seguridad para Firestore Database que incluyen:
- Colección `users`: Solo el usuario autenticado puede leer/escribir sus datos
- Colección `books`: Todos pueden leer, solo autenticados pueden crear
- Colección `userLibraries`: Solo el propietario puede acceder
- Colección `favorites`: Solo el usuario puede modificar sus favoritos
- Colección `userSettings`: Configuraciones privadas de cada usuario
- Colección `catalog`: Catálogo público de libros

### 4. `storage.rules`
Reglas de seguridad para Cloud Storage que incluyen:
- `/book-covers/`: Portadas de libros (lectura pública, escritura autenticada)
- `/pdfs/`: Archivos PDF organizados por usuario (lectura pública, escritura por propietario)
- `/user-avatars/`: Avatares de usuario (lectura pública, escritura por propietario)

### 5. `firestore.indexes.json`
Índices compuestos para optimizar consultas en Firestore:
- Índice por categoría y fecha de creación
- Índice por usuario y fecha de creación
- Índice por título y autor
- Índice para bibliotecas de usuarios

## 🚀 Pasos para Desplegar en Firebase

### Paso 1: Instalar Firebase CLI

```bash
npm install -g firebase-tools
```

### Paso 2: Iniciar Sesión en Firebase

```bash
firebase login
```

### Paso 3: Crear Proyecto en Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Clic en "Agregar proyecto"
3. Ingresa un nombre para tu proyecto (ej: `BiblioDigital`)
4. Sigue los pasos del asistente
5. Habilita los siguientes servicios:
   - ✅ Authentication (Email/Password)
   - ✅ Firestore Database
   - ✅ Storage
   - ✅ Hosting

### Paso 4: Configurar el Proyecto

1. Copia el ID de tu proyecto desde Firebase Console
2. Edita el archivo `.firebaserc` y reemplaza `bibliodigital-proyecto` con tu ID de proyecto

```json
{
  "projects": {
    "default": "TU-PROYECTO-ID-AQUI"
  }
}
```

### Paso 5: Obtener Configuración de Firebase

1. En Firebase Console, ve a Configuración del proyecto (ícono de engranaje)
2. En la sección "Tus aplicaciones", selecciona "Web" (ícono </>)
3. Registra tu app con un nombre
4. Copia el objeto `firebaseConfig`
5. Pega la configuración en `firebase-config.js`:

```javascript
const firebaseConfig = {
  apiKey: "TU-API-KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};

export { firebaseConfig };
```

### Paso 6: Inicializar Firebase en el Proyecto

```bash
firebase init
```

Selecciona:
- ✅ Firestore
- ✅ Storage
- ✅ Hosting

Cuando pregunte por archivos existentes, presiona Enter para usar los ya creados.

### Paso 7: Desplegar las Reglas de Seguridad

```bash
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
```

### Paso 8: Desplegar los Índices

```bash
firebase deploy --only firestore:indexes
```

### Paso 9: Desplegar el Sitio Web

```bash
firebase deploy --only hosting
```

O desplegar todo de una vez:

```bash
firebase deploy
```

## 🔐 Configurar Autenticación

1. En Firebase Console, ve a **Authentication**
2. Haz clic en "Comenzar"
3. En la pestaña "Método de acceso", habilita:
   - ✅ Correo electrónico/contraseña
4. Opcionalmente, habilita otros proveedores (Google, Facebook, etc.)

## 📊 Estructura de Base de Datos Sugerida

### Colección `users`
```
users/{userId}
  - email: string
  - displayName: string
  - photoURL: string
  - createdAt: timestamp
  - lastLogin: timestamp
```

### Colección `books`
```
books/{bookId}
  - title: string
  - author: string
  - category: string
  - description: string
  - coverUrl: string
  - pdfUrl: string (referencia a Storage)
  - userId: string (autor que subió el libro)
  - isPublic: boolean
  - createdAt: timestamp
  - updatedAt: timestamp
```

### Colección `userLibraries`
```
userLibraries/{userId}/books/{bookId}
  - bookRef: reference (a books/{bookId})
  - addedAt: timestamp
  - lastRead: timestamp
  - progress: number (0-100)
```

### Colección `favorites`
```
favorites/{userId}
  - bookIds: array<string>
  - updatedAt: timestamp
```

### Colección `userSettings`
```
userSettings/{userId}
  - theme: string
  - fontSize: string
  - readerTheme: string
  - globalFontSize: string
  - autoSave: boolean
  - emailNotifications: boolean
  - newBooks: boolean
  - readingReminders: boolean
```

## 📁 Estructura de Storage

```
Storage (gs://tu-proyecto.appspot.com)
│
├── book-covers/
│   └── {bookId}/
│       └── cover.jpg
│
├── pdfs/
│   └── {userId}/
│       └── {bookId}/
│           └── book.pdf
│
└── user-avatars/
    └── {userId}/
        └── avatar.jpg
```

## 🔄 Migración desde localStorage a Firebase

Para migrar los datos existentes de localStorage a Firebase, necesitarás:

1. Crear funciones de migración en `app-firebase.js`
2. Leer los datos de `localStorage` (biblioUser, biblioBooks, etc.)
3. Transformar los datos al formato de Firestore
4. Subir los datos usando las APIs de Firebase
5. Mover archivos PDF de IndexedDB a Cloud Storage

## 🛡️ Seguridad

Las reglas de seguridad ya están configuradas en `firestore.rules` y `storage.rules`. Estas reglas garantizan que:

- ✅ Los usuarios solo pueden acceder a sus propios datos
- ✅ Los libros públicos son visibles para todos
- ✅ Solo los autenticados pueden subir contenido
- ✅ Los usuarios solo pueden modificar/eliminar su propio contenido

## 📝 Notas Importantes

1. **Límites de Firebase (Plan Gratuito - Spark)**:
   - Firestore: 1 GB de almacenamiento, 50K lecturas/día
   - Storage: 5 GB de almacenamiento, 1 GB/día de descarga
   - Hosting: 10 GB/mes de transferencia

2. **Costos**: Si necesitas más recursos, considera el plan Blaze (pago por uso)

3. **Backup**: Firebase no hace backups automáticos en el plan gratuito. Considera exportar datos regularmente.

## 🔗 Enlaces Útiles

- [Documentación de Firebase](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Precios de Firebase](https://firebase.google.com/pricing)
- [Reglas de Seguridad](https://firebase.google.com/docs/rules)

## ✅ Checklist de Deployment

- [ ] Instalar Firebase CLI
- [ ] Crear proyecto en Firebase Console
- [ ] Habilitar Authentication, Firestore, Storage, Hosting
- [ ] Actualizar `.firebaserc` con tu ID de proyecto
- [ ] Obtener y configurar `firebaseConfig` en `firebase-config.js`
- [ ] Desplegar reglas de Firestore y Storage
- [ ] Desplegar índices de Firestore
- [ ] Probar autenticación
- [ ] Migrar datos de localStorage a Firebase (opcional)
- [ ] Desplegar hosting
- [ ] Verificar que todo funciona correctamente

---

**¿Necesitas ayuda?** Consulta la [documentación oficial de Firebase](https://firebase.google.com/docs) o abre un issue en el repositorio del proyecto.
