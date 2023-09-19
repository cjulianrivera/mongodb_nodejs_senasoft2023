const courseService = require('../services/courseService');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const course = await courseService.getCourseById(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.createCourse = async (req, res) => {
    try {
        const course = await courseService.createCourse(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.AssingCourse = async (req, res) => {
    try {
        const course = await courseService.AssingCourse(req.params.id, req.query.studentId);
        res.status(201).json(course);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
