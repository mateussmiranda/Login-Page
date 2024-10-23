const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.button__password');

const minlength = document.getElementById('min__length');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const specialChar = document.getElementById('special__char');



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

    const minLengthIsValid = newPassword.value.length >= 8;
    const containsUppercase = /[A-Z]/.test(newPassword.value);
    const containsNumber = /\d/.test(newPassword.value);
    const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword.value);

    minlength.classList.toggle('valid', minLengthIsValid);
    minlength.classList.toggle('invalid', !minLengthIsValid);

    uppercase.classList.toggle('valid', containsUppercase);
    uppercase.classList.toggle('invalid', !containsUppercase);

number.classList.toggle('valid' , containsNumber);
number.classList.toggle('invalid' , !containsNumber);

specialChar.classList.toggle('valid' , containsSpecialChar);
specialChar.classList.toggle('invalid' , !containsSpecialChar);






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

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
