// var a = 7;
// var b = 5;

// console.log(a+b);
// console.log(typeof (a+b));
// console.log(Math.round(7.8));
// console.log(Math.floor(7.8));
// console.log(Math.ceil(7.8));
// console.log(Math.max(7, 4, 9, 8));



// function getAverage(a,b) {

//     var average = (a + b)/2; //local variable
//     console.log(average);
//     return average;

// }

// var myResult = getAverage(7,12); //global variable

// function logResult() {
//     console.log("the average is " + myResult + " inside the function"); 
// }

// logResult();


// var a = 6;
// var b = 5;

// // double negative
// if (isNaN(a)) {
//     console.log("that aint even a number, thickie");
// } else {
//     console.log("meaning of life is " + (a*b));
// }

// From Exercise 24
var string1 = "Abc";
var string2 = "Bcd";

console.log(string1 < string2);

// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "hello";

// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = "Shaun";
// myCar.drive = function() { console.log("now driving");};

// myCar.drive();


//From Exercise 29
// var myCar = {
//     maxSpeed: 70, 
//     driver: "Net Ninja", 
//     drive: function(speed, time) { 
//         console.log(speed * time);
//     }, 
//     // test: function() {
//     //     console.log(this);
//     // }
//     logDriver: function() {
//         console.log("driver name is " + this.driver);
//     }
// };

// myCar.logDriver();
// // myCar2.test();
// console.log(myCar.maxSpeed);
// myCar.drive(50, 3);

//Exercise 30
var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) { 
        console.log(speed * time);
    }; 
    this.logDriver = function() {
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "Humpty Dumpty");
var myCar3 = new Car(10, "Shaun");
var myCar4 = new Car(90, "James Bond");

myCar.drive(30,5);
myCar3.logDriver();