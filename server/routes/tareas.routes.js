const express = require('express');
const router = express.Router();
const tareasCtrlr = require('../controllers/tareas.controller'); 

router.get('/', tareasCtrlr.getTareas);

router.post('/', tareasCtrlr.setTareas);

module.exports = router;