const bcrypt = require("bcryptjs");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://DRoberts:kjlznSK3OYevJB7d@cluster0-wfrbk.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

let mdb = mongoose.connection;
mdb.on("error", console.error.bind(console, "connection error:"));
mdb.once("open", (callback) => { });


let userSchema = mongoose.Schema({
  Username: String,
  Password: String,
  email: String,
  age: String,
  Q1: String,
  Q2: String,
  Q3: String,
});

let User = mongoose.model("User_Data", userSchema);

exports.index = (req, res) => {
  res.render("index", {
    title: "index",
  });
};

exports.signUp = (req, res) => {
  res.render("signUp", {
    title: "sign Up",
  });
};

exports.createUser = (req, res) => {
  salt = bcrypt.genSaltSync(12);
  hash = bcrypt.hashSync(req.body.password, salt);
  let user = new User({
    Username: req.body.username,
    Password: hash,
    email: req.body.email,
    age: req.body.age,
    Q1: req.body.Q1,
    Q2: req.body.Q2,
    Q3: req.body.Q3
  });
  user.save((err, user) => {
    if (err) return console.error(err);
    console.log(req.body.username + " added");
  });
  res.redirect("/login");
};

exports.account = (req, res) => {
  res.render('account', {
    title: "account",
    user: req.session.user
  })
};



exports.editInfo = (req, res) => {
  res.render('editInfo', {
    title: 'Edit Info',
    user: req.session.user
  });
};

exports.editUser = (req, res) => {
  User.findOne({ Username: req.session.user.Username }, (err, user) => {
    if (err) return console.error(err);
    user.Username = req.body.username;
    user.email = req.body.email;
    user.age = req.body.age,
      user.Q1 = req.body.Q1,
      user.Q2 = req.body.Q2,
      user.Q3 = req.body.Q3
    user.save((err, user) => {
      if (err) return console.error(err);
      console.log(req.body.username + ' updated.');
      req.session.user = user
      res.redirect('/account');
    });
  });

};




exports.login = (req, res) => {
  res.render("login", {
    title: "login",
  });
};





exports.checkLogin = (req, res) => {
  User.findOne({ Username: req.body.username }, (err, user) => {
    if (err) {
      res.render("login", {
        title: "login",
      });
      return;
    } else {
      bcrypt.compare(req.body.password, user.Password, (err, login) => {
        if(err) {
          console.log(err)
        }
        if (login) {
          req.session.user = user,
            res.redirect('/account')
        } else {
          res.redirect("/login");
        }
      });
    }
  });
};


exports.logout = (req,res) =>{
  req.session.destroy((err) =>{
    if(err){
      console.log(err);
    } else{
      res.redirect("/");
    }
  });
}

exports.api = async(req, res) => {

  const questionData = {
    "Question 1": [
      0, 0, 0, 0
    ],
    "Question 2": [
      0, 0, 0, 0
    ],
    "Question 3": [
      0, 0, 0, 0
    ]
  };

  const cursor = User.find().cursor();

  for (let user = await cursor.next(); user != null; user = await cursor.next()) {
    switch (user.Q1) {
      case "red":
        questionData[0][0] += 1;
        break;
      case "blue":
        questionData[0][1] += 1;
        break;
      case "green":
        questionData[0][2] += 1;
        break;
      case "yellow":
        questionData[0][3] += 1;
        break;
    }

    switch (user.Q2) {
      case "pizza":
        questionData[1][0] += 1;
        break;
      case "cheeseBurger":
        questionData[1][1] += 1;
        break;
      case "iceCream":
        questionData[1][2] += 1;
        break;
      case "steak":
        questionData[1][3] += 1;
        break;
    }

    switch (user.Q3) {
      case "classical":
        questionData[2][0] += 1;
        break;
      case "rock":
        questionData[2][1] += 1;
        break;
      case "rap":
        questionData[2][2] += 1;
        break;
      case "edm":
        questionData[2][3] += 1;
        break;
    }
  }

  res.json(questionData);
};