const bienvenida = (req, res) => {
    res.json({ message: '¡Bienvenido al Sistema de Gestión Académica!' });
};

module.exports = bienvenida;