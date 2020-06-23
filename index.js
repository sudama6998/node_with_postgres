const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const indexRoute = require('./api/routes/index');

app.use(cors());
app.use(bodyParser.json());
app.use(logger('common'));

app.use('/api', indexRoute);
app.listen(5000, () => (console.log("Server Listening .....")))

module.exports = app;