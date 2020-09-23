const TareasController = { };

TareasController.getTareas = (req, res) =>{ 
    res.json({
        solicitud: "Tareas de la aplicacion"
    });
}

TareasController.setTareas = (req, res) => {
    res.json({
        solicitud: "Subiendo tareas de la aplicacion"
    });
}

module.exports = TareasController;