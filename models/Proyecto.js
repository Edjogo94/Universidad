const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  numero: { type: String, required: true, unique: true },
  titulo: { type: String, required: true },
  fechaIniciacion: { type: Date, default: Date.now },
  cliente: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  },
  universidad: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Universidad'
  },
  valor: { type: Number, required: true },
  tipoProyecto: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoProyecto'
  },
  fechaEntrega: { type: Date },
  etapa: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Etapa'
  },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);
