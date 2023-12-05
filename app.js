const express = require('express');
const app = express();
const port = 3000; // El puerto en el que correrá el servidor

// Middleware para parsear json
app.use(express.json());

// Ruta de prueba para asegurarse de que todo funciona
app.get('/', (req, res) => {
  res.send('El servidor está funcionando!');
});

// Iniciar el servidor para que escuche en el puerto especificado
app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
