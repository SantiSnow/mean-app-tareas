const TareasController = { };

TareasController.getTareas = (req, res) =>{ 
    res.json({
        solicitud: "Tareas de la aplicacion"
    });
}

TareasController.getTarea = (req, res) => {
    res.json({
        solicitud: "Tarea seleccionada"
    });
}

TareasController.setTareas = (req, res) => {
    res.json({
        solicitud: "Subiendo tareas de la aplicacion"
    });
}

TareasController.actualizarTareas = (req, res) => {
    res.json({
        solicitud: "Actualizando tarea de la aplicacion"
    });
}

TareasController.deleteTareas = (req, res) => {
    res.json({
        solicitud: "Eliminando tareas de la aplicacion"
    });
}

module.exports = TareasController;