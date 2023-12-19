const express = require('express');
const app = express();
const PORT = 3000;


// Middleware para habilitar CORS
app.use(cors());

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

  // Verificar si el usuario con el ID proporcionado existe en el array users
  if (users[userId]) {
    // Si existe, actualizar los datos del usuario
    users[userId] = updatedUser;
    res.json(updatedUser); // Enviar una respuesta JSON con los datos actualizados del usuario
  } else {
    // Si no existe, enviar un mensaje de error 404
    res.status(404).json({ error: 'El usuario no existe' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
