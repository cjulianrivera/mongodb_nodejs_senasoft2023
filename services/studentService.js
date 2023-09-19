const studentModel = require('../models/student');

exports.getAllStudents = async () => {
    const students = await studentModel.find();
    return students;
};

exports.getStudentById = async (id) => {
    const student = await studentModel.findById(id);
    return student;
};

exports.createStudent = async (student) => {
    const newStudent = new studentModel(student);
    await newStudent.save();
    return newStudent;
};

exports.updateStudent = async (id, student) => {
    const updatedStudent = await studentModel.findByIdAndUpdate(id, student);
    return updatedStudent;
};

exports.deleteStudent = async (id) => {
    await studentModel.findByIdAndDelete(id);
    return true
};