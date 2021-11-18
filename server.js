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

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => {
  res.render('home');
});

// GET Route for recipe pages
app.get('/category/recipe/:id', (req, res) => {
  res.render('recipe');
});

// GET Route for Login Page
app.get('/login', (req, res) => {
  res.render('login');
});

// GET Route for Sign Up
app.get('/signup', (req, res) => {
  res.render('signup');
});

// GET Route for vodka list
app.get('/vodka', (req,res) => {
  res.render('results')
});

// GET Route for results list
app.get('/gin', (req,res) => {
  res.render('results')
});

// GET Route for results list
app.get('/whiskey', (req,res) => {
  res.render('results')
});

// GET Route for results list
app.get('/bourbon', (req,res) => {
  res.render('results')
});

// GET Route for results list
app.get('/tequila', (req,res) => {
  res.render('results')
});

// GET Route for results list
app.get('/rum', (req,res) => {
  res.render('results')
});

// GET Route for results list
app.get('/wine', (req,res) => {
  res.render('results')
});

// GET Route for results list
app.get('/brandy', (req,res) => {
  res.render('results')
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
  });
});
