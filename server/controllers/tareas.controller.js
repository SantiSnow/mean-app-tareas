const Tarea  = require ('../models/tareas');

const TareasController = { };

TareasController.getTareas = async (req, res) =>{ 
    const tareas = await Tarea.find();
    res.json(tareas);
}

TareasController.getTarea = async (req, res) => {
    const tarea = await Tarea.findById(req.params.id);
    res.json(tarea);
}

TareasController.setTareas = async (req, res) => {
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.json({
        "status": "Recibido"
    });
}

TareasController.actualizarTareas = async (req, res) => {
    const tarea = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fechaLimite: req.body.fechaLimite,
        importancia: req.body.importancia,
        solicitante: req.body.solicitante,
        entregada: req.body.entregada
    }
    await Tarea.findByIdAndUpdate(req.params.id, { $set: tarea }, { new: true });
    res.json({ status: "Tarea actualizada"});
}

TareasController.deleteTareas = async (req, res) => {
    
    await Tarea.findByIdAndRemove(req.params.id);

    res.json({
        status: "Tarea eliminada"
    })

}

module.exports = TareasController;