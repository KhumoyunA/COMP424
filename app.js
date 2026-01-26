console.log("app.js loaded");

const form = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const message = document.querySelector("#form-message");

if (!form || !emailInput || !message) {
  throw new Error("Missing expected elements in the page");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
        message.textContent = "Please enter an email.";
        return;
    }
    message.textContent = `Thanks. We will contact ${email}!`;
    console.log("Form submitted with email:", email);
    form.reset();
});

const toggle = document.querySelector("#theme-toggle");
if (!toggle) {
  throw new Error("Missing #theme-toggle");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});