const express = require('express');
const app = express();
const port = 3000;

app.use('/backend', require('./backend/routes.js'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Fullhouse listening on port ${port}!`))