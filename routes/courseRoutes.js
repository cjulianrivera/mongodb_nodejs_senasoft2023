const express = require("express");

/*
definimos las rutas de cada uno de los metodos del controlador de cursos
teniendo en cuenta si son metodos get, post, patch o delete
y si tienen parametros o no
*/
const { 
    getAllCourses,
    getCourseById,
    createCourse,
    AssingCourse
} = require("../controllers/courseController");

const router = express.Router();

/*
tambien podemos definir rutas para cada metodo
por ejemplo para el metodo getAllCourses, getCourseById y createCourse
router.route("/getAll").get(getAllCourses);
router.route("/getById/:id").get(getCourseById);
router.route("/create").post(createCourse);
*/
router.route("/").get(getAllCourses).post(createCourse);
router.route("/:id").get(getCourseById).patch(AssingCourse);

module.exports = router;