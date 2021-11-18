const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/auth');
// const api = require('./routes/index.js');

const sequelize = require('./config/connection');
const { User, Category, Recipe } = require('./models');

const PORT = 3001;

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

app.use(express.static('/public'));

// GET Route for homepage
app.get('/', (req, res) => {
  res.render('home');
});

// GET Route for feedback page
app.get('/feedback', (req, res) =>{
  res.sendFile(path.join(__dirname, '/recipe/main/index.html'))
});

// GET Route for Login Page
app.get('/login', (req, res) => {
  res.render('login');
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
  });
});
