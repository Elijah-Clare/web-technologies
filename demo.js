// Invoked when an event happens
function my_function() {
    let firstName = prompt("What is your first name?");
    console.log("firstName: " + firstName);

    let lastName = prompt("What is your last name?");
    console.log("lastName: " + lastName);

    let fullName = firstName + ' ' + lastName;

    let userConfirmed = confirm("Hello! " + fullName + " Welcome to CSCI4410! Click OK to continue!");

    if(userConfirmed) {
        alert("You clicked OK! Enjoy the course!");
        console.log(fullName + " has joined the course!");
    } else {
        alert("You clicked cancel. Please let us know if you nedd help.");
        console.log(fullName + " denied to continue.");
    }
}

// Invoke when called from JavaScript
function greet() {
    console.log("Hello, welcome to JavaScript!");
}

greet();

// Invoked with an event listener
function showMessage() {
    alert("Button Clicked! Fucntion invoked using event listener");
}

document.getElementById("myButton").addEventListener("click", showMessage);

//
let title = document.getElementById("heading");
console.log(title.innerHTML);

//
let box = document.querySelector(".box");
console.log(box.innerHTML);

//
function changeText() {
    let elements = document.querySelectorAll("#title1, #title2, #title3");
    elements.forEach( element => {
        element.innerHTML = "Updated Heading";
        element.style.color = "blue";
    })
}

let cars = ["Toyota", "Honda", "Ford", "BMW"];
let carLength = cars.length;
console.log("Array length: " + carLength);
console.log("Before Sorting: ");
console.log(cars);
cars.sort();
console.log("After sorting: ");
console.log(cars);

cars.pop();
console.log("After pop: ");
console.log(cars);

cars.push("Nissan");
console.log("After push: ");
console.log(cars);

cars.shift();
console.log("After shift: ");
console.log(cars);

cars.unshift("Honda");
console.log("After unshift: ");
console.log(cars);

document.getElementById("demo").innerHTML = cars;

console.log(Array.isArray(cars));

cars.forEach((car) => {
    console.log(car);
});

console.log("=====================");

for(let car of cars) {
    console.log(car);
};

let fruits = ["banana", "orange", "apple", "mango"];
let text = "<ul>";

// for loop
// for(let i = 0; i < fruits.length; i++) {
//     text += "<li>" + fruits[i] + "</li>"
// }

//for each
fruits.forEach((fruit) => {
    text += "<li>" + fruit + "</li>"
})

text += "</ul>";

document.getElementById("demo2").innerHTML = text;

fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
    console.log("------------------");
    console.log("Index " + index + ": " + fruit);
})

//constructor
function Person(name, age) {
    this.name = name;
    this.age = age;

    // this.greet = function() {
    //     return "Hello, my name is: " + this.name;
    // }
}

Person.prototype.greet = function() {
    return "Hello, my name is: " + this.name;
}

let person1 = new Person("Alice", 18);
let person2 = new Person("Bob", 25);
console.log(person1.greet());
console.log(person2.greet());

console.log(person1.name + " " + person1.age);
console.log(person2.name + " " + person2.age);

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,

    getPersonInfo: function() {
    return "First Name: " + this.firstName + " " + "Last Name: " + this.lastName;
}
};
console.log(person.getPersonInfo());

person.greet = function() {
    return "Hello, my name is " + this.firstName + " " + this.lastName;
};
console.log(person.greet());

console.log(person["firstName"] + " " + person.lastName);
console.log(person);

person.email = "john@example.com";
console.log(person.email);
person.age = 18;
console.log(person.age);
delete person.isStudent;
console.log(person.isStudent);

console.log(person);

let car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2022;
console.log(car);

// document.getElementById("heading").addEventListener("click", function() {
//     let elements = document.querySelectorAll("#title1, #title2, #title3");
//     elements.forEach( element => {
//         element.innerHTML = "Updated Heading";
//         element.style.color = "blue";
//     });
// });