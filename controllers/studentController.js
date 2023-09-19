const e = require('express');
const studentService = require('../services/studentService');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        await studentService.deleteStudent(req.params.id);
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};