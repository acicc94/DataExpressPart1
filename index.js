const express = require('express');
const pug = require('pug');
const cookie_parser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const express_session = require('express-session');
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



const checkAuth = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect("/");
    }
};

app.use(express_session({
    secret: "what",
    saveUninitialized: true,
    resave: true,
  })
);



app.get('/', routes.index);
app.get('/signUp', routes.signUp);
app.post('/signUp',urlEncodedParser,routes.createUser);
app.get('/account',checkAuth,routes.account);
app.get('/editInfo', routes.editInfo);
app.post('/editInfo', urlEncodedParser, routes.editUser);
app.get('/login',routes.login);
app.post('/account',urlEncodedParser,routes.checkLogin);
app.get('/logout',routes.logout)




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