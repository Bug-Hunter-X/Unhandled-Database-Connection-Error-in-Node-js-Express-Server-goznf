const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This line will cause an error if the database connection fails
  res.send(dataFromDatabase);
});
app.listen(3000, () => console.log('Server started on port 3000'));