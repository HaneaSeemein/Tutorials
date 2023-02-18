const express = require("express");
const app = express();
app.get("/", function(req, res) {
    console.log("at home");
    res.sendFile(__dirname + "/public/index.html");
    // res.send("<script>alert('home')</script>");
});
app.get("/contact", function(req, res) {
    console.log("at contact");
    res.send("<script>alert('haniya23seemein@gmail.com')</script>");
});
app.get("/about", function(req, res) {
    console.log("at about");
    // res.send("<script>alert('A student in PES University')</script>");
    res.json({ "name": "Haneyah Seemein", "age": "20", "course": "b.tech", "specialisation": "cse" });
});
app.listen("3000", () => console.log("listening at http://localhost:3000"));