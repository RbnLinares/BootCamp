const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  connectionString: 'postgres://username:password@localhost/trading_social_db',
});

app.use(express.json());

let users = [];

// Función para hashear una contraseña
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Función para verificar una contraseña
const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Verificar si el usuario ya existe
  const existingUser = users.find(user => user.username === username);
  if (existingUser) return res.status(400).send({ message: 'Username already exists' });

  // Hashear la contraseña
  const hashedPassword = await hashPassword(password);

  // Agregar el nuevo usuario
  const newUser = { id: Date.now(), username, password: hashedPassword };
  users.push(newUser);

  res.status(201).send({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Buscar al usuario
  const user = users.find(u => u.username === username);

  if (!user) return res.status(400).send({ message: 'Invalid username or password' });

  // Verificar la contraseña
  const isValid = await verifyPassword(password, user.password);
  if (!isValid) return res.status(400).send({ message: 'Invalid username or password' });

  // Generar token JWT
  const token = jwt.sign({ userId: user.id }, 'your_secret_key');
  res.send({ token });
});

app.post('/ideas', authenticateToken, (req, res) => {
  const { title, description, assetType, assetName, riskLevel, analysis } = req.body;
  pool.query('INSERT INTO ideas (title, description, asset_type, asset_name, risk_level, analysis) VALUES ($1, $2, $3, $4, $5, $6)', [title, description, assetType, assetName, riskLevel, analysis], (err, result) => {
    if (err) throw err;
    res.status(201).send({ message: 'Idea added successfully' });
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3001, () => console.log('Server running on port 3001'));
