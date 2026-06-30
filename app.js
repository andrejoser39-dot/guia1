const express = require('express');
const app = express();
const PORT = 3005;

// a. / → Mensaje de bienvenida al sistema.
app.get('/', (req, res) => {
    res.json({ message: '¡Bienvenido al Sistema de Gestión Académija' });
});

// b. /aprendices → Mensaje descriptivo sobre la gestión de aprendices.
app.get('/aprendices', (req, res) => {
    res.json({ message: 'Portal de Gestión de Aprendices: Aquí podrás registrar, listar y administrar la información de los estudiantes.' });
});

// c. /programas → Mensaje descriptivo sobre los programas de formación.
app.get('/programas', (req, res) => {
    res.json({ message: 'Portal de Programas de Formación: Consulta aquí la oferta académica, diseños curriculares y fichas disponibles.' });
});

// 4. Configurar el servidor en el puerto 3000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});