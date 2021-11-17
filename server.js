const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const sequelize = require('./config/connection');
const { User, Category, Recipe } = require('./models');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

 app.use(express.static('drink_catalog/main'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/drink_catalog/main/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/recipe/main/index.html'))
);

sequelize.sync({ force: false }).then(() => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
