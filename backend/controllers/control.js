const Eventos = require('../models/Eventos'); 
 
exports.crearEventos = async (req, res) => { 
  try { 
    const nuevaEventos = new Eventos(req.body); 
    await nuevaEventos.save(); 
    res.status(201).json({ mensaje: 'Evento creada con éxito' }); 
  } catch (err) { 
    res.status(500).json({ error: 'Error al guardar Evento' }); 
  } 
}; 
 
exports.obtenerEventos = async (req, res) => { 
  try { 
    const Eventoss = await Eventos.find(); 
    res.json(Eventoss); 
  } catch (err) { 
    res.status(500).json({ error: 'Error al obtener el Evento' }); 
  } 
}; 