const fs = require('fs');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Estructura de configuración de Firebase
const targetPath = './src/environments/environment.ts';
const envConfigFile = `
  export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: "${process.env.FIREBASE_API_KEY}",
      authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
      projectId: "${process.env.FIREBASE_PROJECT_ID}",
      storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}",
      messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
      appId: "${process.env.FIREBASE_APP_ID}"
    }
  };
`;

// Escribir el archivo de configuración de Firebase
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Archivo ${targetPath} creado con éxito.`);
  }
});