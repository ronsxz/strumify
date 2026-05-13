document.addEventListener("DOMContentLoaded", () => {

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

// REGISTER
signupBtn.addEventListener("click", () => {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    fetch("register.php", {
        method: "POST",
        headers: {"Content-Type":"application/x-www-form-urlencoded"},
        body: `name=${name}&email=${email}&password=${password}`
    })
    .then(res => res.text())
    .then(data => {
        if (data === "success") {
            alert("Registered successfully!");
        } else {
            alert("Error registering");
        }
    });
});

// LOGIN
loginBtn.addEventListener("click", () => {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    fetch("login.php", {
        method: "POST",
        headers: {"Content-Type":"application/x-www-form-urlencoded"},
        body: `email=${email}&password=${password}`
    })
    .then(res => res.text())
    .then(data => {
        if (data === "success") {
            alert("Login successful!");
            window.location.reload();
        } else if (data === "wrong") {
            alert("Wrong password");
        } else {
            alert("User not found");
        }
    });
});

});