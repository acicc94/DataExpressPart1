let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://DRoberts:kjlznSK3OYevJB7d@cluster0-wfrbk.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true});

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', callback => {

});

let userSchema = mongoose.Schema({
    Username: String,
    Password: String,
    email: String,
    age: String,
    Q1: String,
    Q2: String,
    Q3: String
});

let User = mongoose.model('User_Data', userSchema);

exports.index = (req,res) =>{
    res.render('index',{
        'title': 'index'
    });
};