// Simulación de base de datos en memoria (un arreglo de objetos)
const estudiantesDB = [
    { id: 1, nombre: 'joser andres', programa: 'ADSO', ficha: '3315656' },
    { id: 2, nombre: 'Ana Gómez', programa: 'ADSO', ficha: '3315656' }
];

// Definimos el modelo con las operaciones permitidas
const AprendizModel = {
    // Función para obtener todos los aprendices
    obtenerTodos: () => {
        return estudiantesDB;
    },

    // Función para buscar un aprendiz por su ID
    obtenerPorId: (id) => {
        return estudiantesDB.find(estudiante => estudiante.id === parseInt(id));
    }
};

module.exports = AprendizModel;