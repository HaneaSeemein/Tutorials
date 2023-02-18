const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const URL = 'mongodb://127.0.0.1:27017'; //Connection URL
const dbname = 'signincredentials'; //Database name
const client = new MongoClient(URL, { useNewUrlParser: true });
client.connect(function(err) {
    assert.equal(null, err);
    console.log("mongodb connection made");
    const db = client.db(dbname);
    client.close();
})


// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/signup.html');
// });
// app.post('/', function(req, res) {
//     res.write('welcome, ' + req.body.Name);
//     res.write('\nemail: ' + req.body.email);
//     // if (res.body.Password == res.body.retypedPassword) {
//     //     res.write('<script> alert("cool password") </script>')
//     // }
//     // client.connect();
//     res.write('\nPassword: ' + req.body.Password);
//     res.write('\nPassword: ' + req.body.retypedPassword);
//     res.send();
// })


// app.listen(3000, function(req, res) { console.log("listening at http://localhost:3000") })