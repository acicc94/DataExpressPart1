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
app.get('/signUp', routes.signUp)
app.get('/account',routes.account)
app.get('/editInfo', routes.editInfo)
app.get('/login',routes.login)


app.listen(3000);