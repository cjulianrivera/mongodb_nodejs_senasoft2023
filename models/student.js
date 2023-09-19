const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    birthDate: {
        type: Date,
        required: false
    },
    phone: {
        type: String,
        required:false
    },
    address: {
        type: String,
        required: false
    }
});

/*const simpleStudentSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
});*/

module.exports = mongoose.model("student", studentSchema);
//module.exports = mongoose.model("simpleStudent", simpleStudentSchema);

