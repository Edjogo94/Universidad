const mongoose = require('mongoose');

const etapaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final'] },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Etapa', etapaSchema);
