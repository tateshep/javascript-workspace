// Function Constructor
/*
var john = {
    name:'john',
    yearOfBirth: 1990,
    job:'teacher',
    
};



var Person = function(name, yearOfBirth , job){
    this.name = name ; 
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}


Person.prototype.calculateAge = function () {
        console.log(2018 - this.yearOfBirth);
    };

var john = new Person('John',1990, ' teacher' );

john.calculateAge();

*/


var Character = function(name, color,  health, speed, attack) {
    this.name = name;
    this.color = color;
    this.health = health;
    this.speed = speed;
    this.attack = attack;
}


Character.prototype.playerMove = function () {
    console.log(this.name + ' will move ' + this.speed)
};

Character.prototype.playerAttack = function () {
    console.log(this.name + ' will attack and do ' + this.attack + ' damage')
};

var player1 = new Character ('player1','Blue',100,1.25,10);
var player2 = new Character ('player2','Red',120,0.8,15);
var player3 = new Character ('player3','Yellow',95,1.3,8);
var player4 = new Character ('player4','Green',80,1.5,6);
