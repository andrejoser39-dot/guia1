// 1. Importamos el modelo de aprendices
const AprendizModel = require('../modelos/pqrsmodels');

const gestionarAprendices = (req, res) => {
    // 2. Le pedimos los datos al modelo
    const listaAprendices = AprendizModel.obtenerTodos();

    // 3. Respondemos con un JSON que contiene el mensaje y los datos reales
    res.json({
        message: 'Portal de Gestión de Aprendices: Aquí podrás registrar, listar y administrar la información de los estudiantes.',
        data: listaAprendices
    });
};

module.exports = gestionarAprendices;