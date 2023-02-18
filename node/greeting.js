function hello(name) {
    console.log("hello " + name)
}

function hi(name) {
    console.log("hi " + name)
}

function hey(name) {
    console.log("hey " + name)
}

module.exports.sayhello = hello;
module.exports.sayhi = hi;
module.exports.sayhey = hey;