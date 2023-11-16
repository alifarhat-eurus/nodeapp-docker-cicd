// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(' Hello, baroooo :D ');
});

const port = 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
