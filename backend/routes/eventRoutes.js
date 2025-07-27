const express = require("express");
const router = express.Router();
const {
  crearEvento,
  obtenerEventos,
  obtenerEventoPorId,
  actualizarEvento,
} = require("../controllers/eventController");

// @route   POST /api/eventos
// @desc    Crear nuevo evento
// @access  Public
router.post("/", crearEvento);

// @route   GET /api/eventos
// @desc    Obtener todos los eventos
// @access  Public
router.get("/", obtenerEventos);

// @route   GET /api/eventos/:id
// @desc    Obtener evento por ID
// @access  Public
router.get("/:id", obtenerEventoPorId);

// @route   PUT /api/eventos/:id
// @desc    Actualizar evento
// @access  Public
router.put("/:id", actualizarEvento);

module.exports = router;
