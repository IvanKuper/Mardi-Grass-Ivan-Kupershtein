//ולידציה
function sendClick(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    if (firstName.length < 1) {
        alert("Your first name is too short!");
    } else if (lastName.length < 1) {
        alert("Your last name is too short!");
    } else if (email.indexOf("@") == -1) {
        alert("Please enter valid email!");
    } else if (email.indexOf(".") == -1) {
        alert("Please enter valid email!");
    } else {
        alert("Sent!");
    }
}