const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
definimos el esquema de los cursos
teniendo en cuenta que el id se genera automaticamente en mongoDB
y los campos obligatorios son el codigo y el nombre
los estidiantes son opcionales y se van agregan una vez se cree el curso
*/
const courseSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    students: []
});

module.exports = mongoose.model("course", courseSchema);