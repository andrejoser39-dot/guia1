const consultarProgramas = (req, res) => { //se define la función consultarProgramas que recibe los parámetros req y res
    res.json({ message: 'Portal de Programas de Formación: Consulta aquí la oferta académica, diseños curriculares y fichas disponibles.' }); //se envía una respuesta en formato JSON con un mensaje sobre la consulta de programas
};

module.exports = consultarProgramas; //se exporta la función consultarProgramas para que pueda ser utilizada en otros archivos del proyecto