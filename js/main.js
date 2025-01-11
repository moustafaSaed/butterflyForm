// Select General Elements 
const form = document.querySelector(".contact-form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const query = document.querySelector("input[name='query']:checked");
const submit = document.querySelector("input[type='submit']");

submit.addEventListener("click", (a) => {
    a.preventDefault();
    // first name validation
    const firstNameError = document.getElementById("firstNameError");
    if (firstName.value == "") {
        firstNameError.textContent = "First Name Required .. !";
    } else {
        firstNameError.textContent = "";
    }


    // last name validation
    const lastNameError = document.getElementById("lastNameError");
    if (lastName.value == "") {
        lastNameError.textContent = "Last Name Required .. !";
    } else {
        lastNameError.textContent = "";
    }


    // Email Validation
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value == "") {
        emailError.textContent = "Email is Required .. !";
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = "Invalid email address !!";
    } else {
        emailError.textContent = "";
    }

    // query validation 
    if (!document.querySelector("input[name='query']:checked")) {
        const queryError = document.getElementById("queryError");
        queryError.textContent = "You should choose one query .. !";
    } else {
        queryError.textContent = "";
    }


    // cookie validation 
    const cookieError = document.getElementById("cookieError");

    if (!document.querySelector("input[name='cookie']:checked")) {
        cookieError.textContent = "Please select this !";
    } else {
        cookieError.textContent = "";
    }
    if (cookieError.textContent == "" && queryError.textContent == "" && emailError.textContent == "" && firstNameError.textContent == "" && lastNameError.textContent == "") {
        window.localStorage.setItem("firstName", firstName.value);
        window.localStorage.setItem("lastName", lastName.value);
        window.localStorage.setItem("email", email.value);

        form.style.opacity = "0";

        const end = document.querySelector(".end");
        end.textContent = "hello " + firstName.value + " " + lastName.value + " ,, we receive your info , and we will contact you soon .. ";
        end.style.scale = "1";

    }
})
