// server.js
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/update-data', (req, res) => {
  const updatedData = req.body.data;
  fs.writeFile('data.csv', updatedData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating data');
    } else {
      res.send('Data updated successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});