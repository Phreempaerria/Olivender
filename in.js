
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Ollivender" || password === "382") {
        alert("Please fill in both username and password.");
        return false; 
    }
    return true; 
}
