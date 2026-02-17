function my_function() {
    let firstName = prompt("What is your first name?");
    let lastName = prompt("What is your last name?");
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