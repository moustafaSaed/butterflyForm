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
    } else {
        firstNameError.textContent = "";
    }


    // last name validation
    const lastNameError = document.getElementById("lastNameError");
    if(lastName.value == "") {
        lastNameError.textContent = "Last Name Required ! ";
    } else {
        lastNameError.textContent = "";
    }


    // Email Validation
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value == "") {
        emailError.textContent = "! Email is Required ..";
    } else if(!emailRegex.test(email.value)) {
        emailError.textContent = "! invalid email address";
    } else {
        emailError.textContent = "";
    }

    // query validation 
    if(!document.querySelector("input[name='query']:checked")) {
        const queryError = document.getElementById("queryError");
        queryError.textContent = "! .. you should choose one query";
    } else {
        queryError.textContent = "";
    }
})
