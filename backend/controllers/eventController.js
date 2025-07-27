const Eventos = require("../models/Eventos");

exports.crearEvento = async (req, res) => {
  try {
    const nuevoEvento = new Eventos(req.body);
    await nuevoEvento.save();
    res.status(201).json({
      mensaje: "Evento creado con éxito",
      evento: nuevoEvento,
    });
  } catch (err) {
    console.error("Error al crear evento:", err);
    res.status(500).json({ error: "Error al guardar evento" });
  }
};

exports.obtenerEventos = async (req, res) => {
  try {
    const eventos = await Eventos.find().sort({ createdAt: -1 });
    res.json(eventos);
  } catch (err) {
    console.error("Error al obtener eventos:", err);
    res.status(500).json({ error: "Error al obtener eventos" });
  }
};

exports.obtenerEventoPorId = async (req, res) => {
  try {
    const evento = await Eventos.findById(req.params.id);
    if (!evento) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json(evento);
  } catch (err) {
    console.error("Error al obtener evento:", err);
    res.status(500).json({ error: "Error al obtener evento" });
  }
};

exports.actualizarEvento = async (req, res) => {
  try {
    const evento = await Eventos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!evento) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json({
      mensaje: "Evento actualizado con éxito",
      evento,
    });
  } catch (err) {
    console.error("Error al actualizar evento:", err);
    res.status(500).json({ error: "Error al actualizar evento" });
  }
};
