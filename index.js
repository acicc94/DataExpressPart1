const express = require('express');
const pug = require('pug');
const cookie_parser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const express_sessions = require('express-sessions');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const cookieParser = require('cookie-parser');
let visited = 0;


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

// app.use(cookieParser('This is my passphrase'));

// app.get('/', (req, res) => {
//   visited++;
//   res.cookie('visited', visited, {maxAge: 99999999999});
//   if(req.cookies.beenHereBefore == 'yes') {
//     res.send(`You have been here ${req.cookies.visited} times before.`);
//   } else {
//     res.cookie('beenHereBefore', 'yes', {maxAge: 99999999999});
//     res.cookie('visited', 0, {maxAge: 99999999999});
//     res.send('This is your first time here');
//   }
// });

// app.get('/clear', (req, res) => {
//   res.clearCookie('beenHereBefore');
//   res.cookie('visited', 0, {maxAge: 99999999999});
//   res.redirect('/');
// });

app.listen(3000);