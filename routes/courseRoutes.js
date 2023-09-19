const express = require("express");

const { 
    getAllCourses,
    getCourseById,
    createCourse,
    AssingCourse
} = require("../controllers/courseController");

const router = express.Router();

router.route("/").get(getAllCourses).post(createCourse);
router.route("/:id").get(getCourseById).patch(AssingCourse);

module.exports = router;