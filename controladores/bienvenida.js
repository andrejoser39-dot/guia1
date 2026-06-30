const bienvenida = (req, res) => { //se define la función de bienvenida que recibe los parámetros req y res
    res.json({ message: '¡Bienvenido al Sistema de Gestión Académica!' }); //se envía una respuesta en formato JSON con un mensaje de bienvenida
};

module.exports = bienvenida;