// Select General Elements 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const query = document.querySelector("input[name='query']:checked");
const submit = document.querySelector("input[type='submit']");

submit.addEventListener("click",(a)=>{
    a.preventDefault();

    // first name validation
    const firstNameError = document.getElementById("firstNameError");
    if(firstName.value == "") {
        firstNameError.textContent = "First Name Required ! ";
    }


    // last name validation
    const lastNameError = document.getElementById("lastNameError");
    if(lastName.value == "") {
        lastNameError.textContent = "Last Name Required ! ";
    }


    // Email Validation
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value == "") {
        emailError.textContent = "! Email is Required ..";
    } else if(emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "! invalid email address";
    }
})
