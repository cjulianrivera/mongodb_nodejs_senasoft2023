const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(express.json());

//se deben agregar las rutas de los estudiantes y los cursos
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);

//configuramos la conexion a mongoDB
mongoose.connect(
    "",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado a mongo"))
    .catch((err) => { console.error("Error conectandose a mongoDB");
                      console.error(err);});

app.listen(3001, () => {
    console.log("Ejecutandose en el puerto 3001");
});

module.exports = app;