// Import express package
const express = require('express');

// our local port 
const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

// route to the homepage
app.get('/', (req, res) => res.send('homepage'));


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
