function validateForm(event) {

    event.preventDefault();

    let valid = true;


    // To clear old errors from the form
    document.querySelectorAll('.error').forEach(error => error.textContent = "");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const feedback = document.getElementById("feedback");
    feedback.style.display = "none";

    // Validate customer name should be entered
    if (!name) {
        document.getElementById("nameError").textContent = "Please enter your name.";
        valid = false;
    }

    
    // custom email regex: it allows letters, numbers, dot and domain with 2 and more characters
    const emailRagex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;

    // validate email contains "@" symbole and check fully email formate
    if(!emailRagex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    
    // Validate phone number should have 10 digits
    const phoneRegex = /^\d{10}$/;
    if(!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits.";
        valid = false;
    }

    // Validate the messages is exists in the form request
    if (!message) {
        document.getElementById("messageError").textContent = "Please enter your message.";
        valid = false;
    }

    // Show success alert only if form is valid
    if (valid) {
        feedback.style.display = "block";
    }


    return false;
}