const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
definimos el esquema de los estudiantes
teniendo en cuenta que el id se genera automaticamente en mongoDB
y los campos obligatorios son el email, el nombre y el apellido
los demas son opcionales
*/
const studentSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
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


module.exports = mongoose.model("student", studentSchema);