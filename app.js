const form = document.querySelector('#signup-form');
const message = document.querySelector('#form-message');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const verifyPasswordInput = document.querySelector('#verify-password');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const verifyPasswordError = document.querySelector('#verify-password-error');


if (
  !form ||
  !message ||
  !nameInput ||
  !emailInput ||
  !passwordInput ||
  !verifyPasswordInput ||
  !nameError ||
  !emailError ||
  !passwordError ||
  !verifyPasswordError
) {
  throw new Error('Missing expected elements in the page');
}

// tracks which fields have been touched
const touched = {
  name: false,
  email: false,
  password: false,
  verifyPassword: false
};

function setFieldError(input, errorEl, text) {
  if (text) {
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', errorEl.id);
    errorEl.textContent = text;
  } else {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    errorEl.textContent = '';
  }
}


function validate(showAllErrors = false) {
  message.textContent = '';
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const verifyPassword = verifyPasswordInput.value;

  let firstInvalid = null;

  // validates the inputs only if they have been touched or if all errors should be shown
  if (touched.name || showAllErrors) {
    if (!name) {
      setFieldError(nameInput, nameError, 'Enter your name.');
      firstInvalid ??= nameInput;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      setFieldError(nameInput, nameError, 'Name can only contain letters and spaces.');
      firstInvalid ??= nameInput;
    } else if (name.length < 2) {
      setFieldError(nameInput, nameError, 'Name must be at least 2 characters.');
      firstInvalid ??= nameInput;
    } else {
      setFieldError(nameInput, nameError, '');
    }
  }

  if (touched.email || showAllErrors) {
    if (!email) {
      setFieldError(emailInput, emailError, 'Enter your email address.');
      firstInvalid ??= emailInput;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError(emailInput, emailError, 'Enter a valid email address.');
      firstInvalid ??= emailInput;
    } else {
      setFieldError(emailInput, emailError, '');
    }
  }

  if (touched.password || showAllErrors) {
    if (!password) {
      setFieldError(passwordInput, passwordError, 'Enter a password.');
      firstInvalid ??= passwordInput;
    } else if (password.length < 8) {
      setFieldError(passwordInput, passwordError, 'Password must be at least 8 characters.');
      firstInvalid ??= passwordInput;
    } else {
      setFieldError(passwordInput, passwordError, '');
    }
  }

  if (touched.verifyPassword || showAllErrors) {
    if (!verifyPassword) {
      setFieldError(verifyPasswordInput, verifyPasswordError, 'Verify your password.');
      firstInvalid ??= verifyPasswordInput;
    } else if (verifyPassword !== password) {
      setFieldError(verifyPasswordInput, verifyPasswordError, 'Passwords do not match.');
      firstInvalid ??= verifyPasswordInput;
    } else {
      setFieldError(verifyPasswordInput, verifyPasswordError, '');
    }
  }

  return { ok: !firstInvalid, firstInvalid };
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { ok, firstInvalid } = validate(true); 
  if (!ok) {
    message.textContent = 'Fix the errors and try again.';
    message.style.color = 'red';
    firstInvalid.focus();
    return;
  }
  message.textContent = 'Success! Your account was created.';
  message.style.color = 'green';
  form.reset();

  // reset touched status
  touched.name = false;
  touched.email = false;
  touched.password = false;
  touched.verifyPassword = false;
});


form.addEventListener('input', () => {
  validate(false);
});

// field are marked as touched when it loses focus and validate.
nameInput.addEventListener('blur', () => {
  touched.name = true;
  validate(false);
});

emailInput.addEventListener('blur', () => {
  touched.email = true;
  validate(false);
});

passwordInput.addEventListener('blur', () => {
  touched.password = true;
  validate(false);
});

verifyPasswordInput.addEventListener('blur', () => {
  touched.verifyPassword = true;
  validate(false);
});