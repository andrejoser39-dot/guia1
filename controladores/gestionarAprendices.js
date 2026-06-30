// 1. Importamos el modelo de aprendices
const AprendizModel = require('../modelos/pqrsmodels'); // Asegúrate de que la ruta sea correcta según tu estructura de carpetas

const gestionarAprendices = (req, res) => { //se define la función gestionarAprendices que recibe los parámetros req y res
    // 2. Le pedimos los datos al modelo
    const listaAprendices = AprendizModel.obtenerTodos(); //se llama a la función obtenerTodos del modelo AprendizModel para obtener la lista de aprendices

    // 3. Respondemos con un JSON que contiene el mensaje y los datos reales
    res.json({ //se envía una respuesta en formato JSON con un mensaje y la lista de aprendices
        message: 'Portal de Gestión de Aprendices: Aquí podrás registrar, listar y administrar la información de los estudiantes.',
        data: listaAprendices
    });
};

module.exports = gestionarAprendices;