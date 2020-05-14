const bcrypt = require('bcryptjs');

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://DRoberts:kjlznSK3OYevJB7d@cluster0-wfrbk.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

 


let mdb = mongoose.connection;
mdb.on("error", console.error.bind(console, "connection error:"));
mdb.once("open", (callback) => {});

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
    title: "sign Up"
    
  });
  
  salt =  bcrypt.genSaltSync(12);
  hash = bcrypt.hashSync(userSchema.Password,salt);
  console.log(hash);
};



exports.account = (req,res) => {
  User.findById(req.params.id, (err,user) =>{
      if(err) return console.error(err);
      res.render('details', {
          title: user.Username + "'s Details",
          user
      });
  });
};

exports.editInfo = (req,res) => {
  res.render('editInfo', {
    title: 'Edit Info'
  });
};

exports.login = (req,res) => {
  res.render('login', {
    title: 'login'
  });
};

