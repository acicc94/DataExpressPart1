const express = require('express');
const pug = require('pug');
const cookie_parser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const express_sessions = require('express-sessions');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes')


const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

const urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

app.get('/', routes.index);
app.get('/signUp', routes.signUp);
app.post('/signUp',urlEncodedParser,routes.createUser);
app.get('/account/:id',routes.account);
app.get('/editInfo/:id', routes.editInfo);
app.post('/editInfo/:id', urlEncodedParser, routes.editUser);
app.get('/login',routes.login);
app.post('/account',urlEncodedParser,routes.checkLogin);



app.listen(3000);