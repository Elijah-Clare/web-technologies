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
    let elements = document.querySelectorAll("#title1", "#title2", "#title3");
    elements.forEach( element => {
        element.innerHTML = "Updated Heading";
        element.style.color = "blue";
    })
}