'use strict'

const form = document.getElementById('form');
const avatar = document.getElementById('avatar');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit');

function enableBtn () {
    submitBtn.removeAttribute('disabled')
};



email.addEventListener('input', function(){
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Поле не может быть пустым'); 
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail введен некорректно'); 
    } else {
        setSuccessFor(email); 
        enableBtn ();      
    }
});


avatar.addEventListener('change', function(){
    if (avatar.files[0].size > 1000000) {
        setErrorFor(avatar, 'Размер файла не должен превышать 1мб');
    } else if (avatar.files[0].type !== 'image/png') {
        setErrorFor(avatar, 'Загрузите фото с расширением png');
    } else  
        setSuccessFor(avatar); 
        enableBtn ();       
});


firstName.addEventListener('input', function (){
    const firstNameValue = firstName.value.trim();
    if (firstNameValue === '') {
        setErrorFor(firstName, 'Поле не может быть пустым');
    } else 
        setSuccessFor(firstName); 
        enableBtn ();    
});

lastName.addEventListener('input', function (){
    const lastNameValue = lastName.value.trim();
    if (lastNameValue === '') {
        setErrorFor(lastName, 'Поле не может быть пустым'); 
    } else 
        setSuccessFor(lastName); 
        enableBtn ();        
});

age.addEventListener('input', function (){
    const ageValue = age.value.trim();
    if (ageValue === '') {
        setErrorFor(age, 'Поле не может быть пустым');
    } else if (isNaN(ageValue)) {
        setErrorFor(age, 'Возраст введен некорректно'); 
    } else if (ageValue < 0) {
        setErrorFor(age, 'Возраст не может быть отрицательным числом'); 
    } else if (ageValue > 100) {
        setErrorFor(age, 'Введите свой возраст'); 
    } else 
        setSuccessFor(age); 
        enableBtn ();    
});


password.addEventListener('input', function (){
    const passwordValue = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    if (!this.value.match(passwordValue)) {
        setErrorFor(password, 'Минимум 8 символов, содержащий буквы верхнего и нижнего регистра, цифру и спец.символ'); 
    } else 
        setSuccessFor(password); 
        enableBtn ();       
})


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};




