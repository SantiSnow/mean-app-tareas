const mongoose = require('mongoose');
const { Schema } = mongoose;

const TareaSchema = new Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String, require: true },
    fechaLimite: { type: String, require: true },
    importancia: { type: String, require: true },
    solicitante: { type: String, require: true },
    entregada: { type: Boolean, require: true }
});

module.exports = mongoose.model('Tarea', TareaSchema);
