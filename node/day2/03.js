var util = require("util");
function Person(){
    this.eat = function(){
        console.log("Eating")
    },
    this.say = function(){
        console.log("saying")
    }
}
function Teacher(){
    Person.call(this);
    util.inherits(Teacher,Person);
    this.say = function(){
        console.log("Teaching")
    }
}

var person = new Person();
person.say();
person.eat();
var teacher = new Teacher();
teacher.say();
teacher.eat();