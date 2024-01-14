const form = document.getElementById('myForm');
const verifyCheckbox = document.getElementById('verify');

function validateName() {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  const nameRegex = /^[a-zA-Z\s]+$/;

  if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = 'Invalid name (only letters and spaces allowed)';
    return false;
  } else {
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Invalid email address';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function validateOrganization() {
  const orgInput = document.getElementById('organization');
  const orgError = document.getElementById('orgError');
  const orgWords = orgInput.value.split(/\s+/).filter(word => word.length > 0);

  if (orgWords.length > 10) {
    orgError.textContent = 'Organization exceeds 10 words limit';
    return false;
  } else {
    orgError.textContent = '';
    return true;
  }
}

function validateTextbox() {
  const textboxInput = document.getElementById('textbox');
  const textboxError = document.getElementById('textboxError');
  const words = textboxInput.value.split(/\s+/).filter(word => word.length > 0);

  if (words.length > 100) {
    textboxError.textContent = 'Text exceeds 100 words limit';
    return false;
  } else {
    textboxError.textContent = '';
    return true;
  }
}

function validateCurrentField(event) {
  const currentField = event.target;

  if (currentField.id === 'name') {
    validateName();
  } else if (currentField.id === 'email') {
    validateEmail();
  } else if (currentField.id === 'organization') {
    validateOrganization();
  } else if (currentField.id === 'textbox') {
    validateTextbox();
  }
}

document.getElementById('name').addEventListener('input', validateCurrentField);
document.getElementById('email').addEventListener('input', validateCurrentField);
document.getElementById('organization').addEventListener('input', validateCurrentField);
document.getElementById('textbox').addEventListener('input', validateCurrentField);

form.addEventListener('input', function() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const orgInput = document.getElementById('organization');
  const textboxInput = document.getElementById('textbox');

  const fieldsFilled = nameInput.value.trim() !== '' &&
                        emailInput.value.trim() !== '' &&
                        orgInput.value.trim() !== '' &&
                        textboxInput.value.trim() !== '';

  verifyCheckbox.disabled = !fieldsFilled;
});

form.addEventListener('submit', function(event) {
  const nameValid = validateName();
  const emailValid = validateEmail();
  const orgValid = validateOrganization();
  const textboxValid = validateTextbox();

  const checkboxValid = verifyCheckbox.checked;

  if (!(nameValid && emailValid && orgValid && textboxValid && checkboxValid)) {
    event.preventDefault();
  }
});
