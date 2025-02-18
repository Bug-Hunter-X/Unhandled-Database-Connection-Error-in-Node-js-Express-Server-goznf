const express = require('express');
const app = express();
const db = require('./database'); // Assume this module handles database connection

app.get('/', async (req, res) => {
  try {
    const dataFromDatabase = await db.getData();
    res.send(dataFromDatabase);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server started on port 3000'));