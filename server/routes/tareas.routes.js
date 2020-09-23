const express = require('express');
const router = express.Router();
const tareasCtrlr = require('../controllers/tareas.controller'); 

router.get('/', tareasCtrlr.getTareas);
router.get('/:id', tareasCtrlr.getTarea);
router.post('/', tareasCtrlr.setTareas);
router.put('/:id', tareasCtrlr.actualizarTareas);
router.delete('/:id', tareasCtrlr.deleteTareas);

module.exports = router;