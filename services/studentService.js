const studentModel = require('../models/student');

/*
definimos los metodos que vamos a utilizar desde el controlador
para manejar los estudiantes
*/

//obtenemos todos los estudiantes
exports.getAllStudents = async () => {
    const students = await studentModel.find();
    return students;
};

//obtenemos un estudiante por su id
exports.getStudentById = async (id) => {
    const student = await studentModel.findById(id);
    return student;
};

//creamos un nuevo estudiante
exports.createStudent = async (student) => {
    const newStudent = new studentModel(student);
    await newStudent.save();
    return newStudent;
};

//actualizamos un estudiante
exports.updateStudent = async (id, student) => {
    const updatedStudent = await studentModel.findByIdAndUpdate(id, student);
    return updatedStudent;
};

//eliminamos un estudiante
exports.deleteStudent = async (id) => {
    await studentModel.findByIdAndDelete(id);
    return true
};