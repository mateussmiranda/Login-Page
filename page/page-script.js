const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

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

togglePasswordVisibility('togglePassword', 'password');


function openInNewTab(buttonId, url) {
    document.getElementById(buttonId).addEventListener('click', function () {
        window.open(url, '_blank');
    });
}

openInNewTab('facebok__button', 'https://www.facebook.com');
openInNewTab('google__button', 'https://accounts.google.com');
openInNewTab('apple__button', 'https://appleid.apple.com/auth/authorize');


const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    }
    else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
