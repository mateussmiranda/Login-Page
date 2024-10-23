const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.button__password');
const successMessage = document.getElementById('successMessage');

const togglePassword = document.getElementById('togglePassword');
const newPassword = document.getElementById('newPassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

const minlength = document.getElementById('min__length');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const specialChar = document.getElementById('special__char');

document.addEventListener('DOMContentLoaded', () => {
    const newPasswordInput = document.getElementById('newPassword');
    const passwordRequirements = document.getElementById('password__requerements');

    passwordRequirements.style.display = 'none';

    newPasswordInput.addEventListener('input', () => {
        passwordRequirements.style.display = newPasswordInput.value.length > 0 ? 'block' : 'none';
    });
});

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [email, newPassword, confirmPassword] = inputs;

    const emailIsValid = email.value.includes('@') && email.value.includes('.');

    const validations = [
        { isValid: newPassword.value.length >= 8, element: minlength },
        { isValid: /[A-Z]/.test(newPassword.value), element: uppercase },
        { isValid: /\d/.test(newPassword.value), element: number },
        { isValid: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword.value), element: specialChar }
    ];
    
    validations.forEach(({ isValid, element }) => {
        element.classList.toggle('valid', isValid);
        element.classList.toggle('invalid', !isValid);
    });

    
    const passwordsAreValid = newPassword.value.length >= 8 && confirmPassword.value.length >= 8 && newPassword.value === confirmPassword.value;

    if (emailIsValid && passwordsAreValid) {
        button.removeAttribute('disabled');
        button.style.backgroundColor = 'var(--red)';
    }

    else {
        button.setAttribute('disabled', '');
        button.style.backgroundColor = 'var(--medium-grey)';
    }
}

button.addEventListener('click', () => {
    successMessage.textContent = `Sua nova senha "${newPassword.value}" foi gerada com sucesso!`;
    successMessage.style.display = "block";

    const passwordRequirements = document.getElementById('password__requerements');
    passwordRequirements.style.display = 'none';

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000);
});

function togglePasswordVisibility(toggleId, inputId) {
    const toggleIcon = document.getElementById(toggleId);
    const passwordInput = document.getElementById(inputId);

    toggleIcon.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);


        this.classList.toggle('bi-eye-fill');
        this.classList.toggle('bi-eye-slash');
    });
}

togglePasswordVisibility('togglePassword', 'newPassword');
togglePasswordVisibility('toggleConfirmPassword', 'confirmPassword');



inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
