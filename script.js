const password = document.querySelector('#password');
const cnfrm_password = document.querySelector('#confirm_pass');
const error = document.querySelector('.confirm-error');
const btn = document.querySelector('.btn');



cnfrm_password.addEventListener('keyup',() => {

    if(password.value !== cnfrm_password.value){
        error.textContent = '*REQUIRED: PASSWORD SHOULD MATCH';
        error.classList.add('match-error');

    }else{
        error.textContent = '';
    }
});

btn.addEventListener('click', () => {
    if(password.value !== cnfrm_password.value){
        event.preventDefault();
    }
});




