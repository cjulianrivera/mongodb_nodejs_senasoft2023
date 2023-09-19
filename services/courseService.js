const courseModel = require('../models/course');
const studentModel = require('../models/student');

exports.getAllCourses = async () => {
    const courses = await courseModel.find();
    return courses;
};

exports.getCourseById = async (id) => {
    const course = await courseModel.findById(id);
    return course;
};

exports.createCourse = async (course) => {
    const newCourse = new courseModel(course);
    await newCourse.save();
    return newCourse;
};

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