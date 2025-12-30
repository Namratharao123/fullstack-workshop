let user = document.querySelector('#user');
let password = document.querySelector('#pass');
let email = document.querySelector('#email');
let submit = document.querySelector("#submit");
let confirm = document.querySelector('#confirm');
let form = document.querySelector('.form');

let usermsg = document.querySelector('#usermsg');
let emailmsg = document.querySelector('#emailmsg');
let passwordmsg = document.querySelector('#passwordmsg');
let confirmmsg = document.querySelector('#confirmMsg');

let isUserValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;

user.addEventListener('blur',function(){
    let userValue = user.value;
    let userPattern = /^[a-zA-Z0-9]{5,13}$/;
    if(userValue.length>3 && userValue.length<15 && userPattern.test(userValue)){
        isUserValid = true;
        usermsg.textContent = "✅";

    }
    else{
        usermsg.textContent = "Username must be 5-13 characters";
    }
    checkAllValid();
});

email.addEventListener('blur',function(){
    let emailValue = email.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(emailValue)){
        isEmailValid = true;
        emailmsg.textContent = "✅";

    }
    else{
        emailmsg.textContent = "Invalid email format";
    }
    checkAllValid();
});

password.addEventListener('blur',function(){
    let passwordValue = password.value;
    if(passwordValue.length>8 && /[A-Z]/.test(passwordValue) && /\d/.test(passwordValue) && /[!@#$%^&*]/.test(passwordValue)){
        isPasswordValid = true;
        passwordmsg.textContent = "✅";

    }
    else{
        passwordmsg.textContent = "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character";
    }
    checkAllValid();
});

confirm.addEventListener('blur',function(){
    if(confirm.value === password.value && isPasswordValid){
        isConfirmValid = true;
        confirmmsg.textContent = "✅";

    }
    else{
        confirmmsg.textContent = "Passwords do not match";
    }
    checkAllValid();
});

function checkAllValid(){
    if(isUserValid && isEmailValid && isPasswordValid && isConfirmValid){
        submit.disabled = false;
    }
    else{
        submit.disabled = true;
    }
}

form.addEventListener('submit',function(e){
    if(!(isUserValid && isEmailValid && isPasswordValid && isConfirmValid)){
        e.preventDefault();
    }
});