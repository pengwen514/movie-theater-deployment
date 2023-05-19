const express = require('express');
const app = express();
const routerShow = require('../routes/shows.js')
const routerUser = require('../routes/users.js')

app.use('/users', routerUser)
app.use('/shows', routerShow)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
module.exports = app;