const express = require("express");

/*
definimos las rutas de cada uno de los metodos del controlador de estudiantes
teniendo en cuenta si son metodos get, post, patch o delete
y si tienen parametros o no
*/
const { 
    getAllStudents, 
    getStudentById, 
    createStudent, 
    updateStudent, 
    deleteStudent 
} = require("../controllers/studentController");

const router = express.Router();

/*
tambien podemos definir rutas para cada metodo
por ejemplo para el metodo getAllStudents, getStudentById y createStudent
router.route("/getAll").get(getAllStudents);
router.route("/getById/:id").get(getStudentById);
router.route("/create").post(createStudent);
*/

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudentById).patch(updateStudent).delete(deleteStudent);

module.exports = router;