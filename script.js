let password = document.getElementById('password');
let confirmPassword = document.getElementById('passwordConfirm');

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords don\'t match');
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;