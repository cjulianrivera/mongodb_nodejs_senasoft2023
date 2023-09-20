const courseService = require('../services/courseService');

/*
definimos los metodos expuestos en el controlador de cursos
*/

//obtenemos todos los cursos
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//obtenemos un curso por su id
exports.getCourseById = async (req, res) => {
    try {
        const course = await courseService.getCourseById(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//creamos un nuevo curso
exports.createCourse = async (req, res) => {
    try {
        const course = await courseService.createCourse(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

/*
asignamos un estudiante a un curso
para esto recibimos el id del curso y el id del estudiante
el id del curso lo recibimos como parametro de la ruta
el id del estudiate lo recibimos como parametro de la consulta
*/
exports.AssingCourse = async (req, res) => {
    try {
        const course = await courseService.AssingCourse(req.params.id, req.query.studentId);
        res.status(201).json(course);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
