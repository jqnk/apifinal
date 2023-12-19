const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear el body de las peticiones
app.use(express.json());

let users = [];

// Obtener todos los usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

// Crear un nuevo usuario
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Actualizar un usuario existente
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  users[userId] = updatedUser;
  res.json(updatedUser);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
