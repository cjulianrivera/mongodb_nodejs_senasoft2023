const express = require("express");

const { 
    getAllStudents, 
    getStudentById, 
    createStudent, 
    updateStudent, 
    deleteStudent 
} = require("../controllers/studentController");

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudentById).patch(updateStudent).delete(deleteStudent);

module.exports = router;