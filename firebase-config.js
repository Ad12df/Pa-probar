// ========== FIREBASE CONFIGURATION ========== //
// IMPORTANTE: Reemplaza estos valores con tus credenciales de Firebase
// 1. Ve a https://console.firebase.google.com/
// 2. Selecciona tu proyecto
// 3. Ve a Project Settings > Your apps > Web app
// 4. Copia los valores y pégalos aquí

const firebaseConfig = {
  apiKey: "AIzaSyDQ7lWxqQ8NJkaIrNnVDotZeUh0ZLhVGOA",
  authDomain: "bibli0-20669285-e7929.firebaseapp.com",
  projectId: "bibli0-20669285-e7929",
  storageBucket: "bibli0-20669285-e7929.firebasestorage.app",
  messagingSenderId: "212818991713",
  appId: "1:212818991713:web:2c689e1b395d085db76820"
};

// Inicializar Firebase
let app, auth, db, storage;

try {
    app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    storage = firebase.storage();
    console.log('✅ Firebase inicializado correctamente');
} catch (error) {
    console.error('❌ Error al inicializar Firebase:', error);
    alert('Error al conectar con Firebase. Por favor verifica tu configuración.');
}
