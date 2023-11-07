const password = document.querySelector('#password');
const cnfrm_password = document.querySelector('#confirm_pass');
const bothPasswords = document.querySelectorAll("[type=password]");
const error = document.querySelector('.confirm-error');
const btn = document.querySelector('.btn');

function checkPasswords(e){
    if(password.value == cnfrm_password.value){
        error.textContent = '';
    }else{
        error.textContent = '*REQUIRED: PASSWORDS SHOULD MATCH';
        error.classList.add('match-error');
    }
}

bothPasswords.forEach((onePassword) => onePassword.addEventListener('keyup', checkPasswords));
bothPasswords.forEach((onePassword) => onePassword.addEventListener('focus', checkPasswords));

btn.addEventListener('click', () => {
    if(password.value !== cnfrm_password.value){
        event.preventDefault();
    }
});




