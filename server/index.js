const express = require('express');
const path = require('path');
const parser = require('body-parser');
const logger = require('morgan');
const db = require('../db');
const router = require('../server/resources/mainPageRouter');

const app = express();
const PORT = process.env.PORT || 3018;

app.use(logger('dev'));

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(PORT, () => console.log(`Successfully connected to PORT: ${PORT}`));