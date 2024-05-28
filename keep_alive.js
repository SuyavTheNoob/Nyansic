const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Logged in as Pawoo'));

app.listen(port, () => console.log(`Pawoo is listening to http://localhost:${port}`));