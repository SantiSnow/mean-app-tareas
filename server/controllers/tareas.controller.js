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
    
}

TareasController.deleteTareas = (req, res) => {
    
}

module.exports = TareasController;