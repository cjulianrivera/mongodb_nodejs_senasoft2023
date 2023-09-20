const courseModel = require('../models/course');
const studentModel = require('../models/student');

/*
definimos los metodos que vamos a utilizar desde el controlador
para manejar los cursos
*/

//obtenemos todos los cursos
exports.getAllCourses = async () => {
    const courses = await courseModel.find();
    return courses;
};

//obtenemos un curso por su id
exports.getCourseById = async (id) => {
    const course = await courseModel.findById(id);
    return course;
};

//creamos un nuevo curso
exports.createCourse = async (course) => {
    const newCourse = new courseModel(course);
    await newCourse.save();
    return newCourse;
};

/*
asignamos un estudiante a un curso
para esto recibimos el id del curso y el id del estudiante
validamos que el curso y el estudiante existan
y que el estudiante no este ya en el curso
en el arreglo de estudiantes agregamos una version reducida del estudiante
solo con los datos necesarios
*/
exports.AssingCourse = async (id, studentId) => { 
    const course = await courseModel.findById(id);
    if (course == null)
        throw new Error("Cannot find course");

    const student = await studentModel.findById(studentId);
    if (student == null)
        throw new Error ("Cannot find student");

    const studentAlreadyInCourse = course.students.find(s => s.studentId == studentId);
    if (studentAlreadyInCourse != null) 
        throw new Error("Student already in course");

    const studentInCourse = {
        studentId: student._id,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email
    };

    course.students.push(studentInCourse);
    await course.save();
    return course;
};

exports.updateCourse = async (id, course) => {
    const updatedCourse = await courseModel.findByIdAndUpdate(id, course);
    return updatedCourse;
};