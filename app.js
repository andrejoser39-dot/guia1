const express = require('express');
const app = express();
const PORT = 3005;

// 1. Importar el archivo de rutas
const pqrsRutas = require('./rutas/pqrsrutas');

// 2. Usar las rutas en la aplicación
// Esto hará que todas las rutas definidas dentro del archivo comiencen desde la raíz '/'
app.use('/', pqrsRutas);

// 3. Configurar el servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});