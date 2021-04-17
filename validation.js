const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');

text.addEventListener('input', function(){
    let nameregex = new RegExp('[A-Z]{1}[a-z]{3,}');

    if(nameregex.test(text.value)){
        textError.textContent = "";
    }
    else{
         textError.textContent = "Name is Incorrect"; 
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

email.addEventListener('input',function(){
    let emailregex = new RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

    if(emailregex.test(email.value)){
        emailError.textContent = "";
    }else{ emailError.textContent = "Email is Incorrect"; }
})

const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');

tel.addEventListener('input',function(){
    let phoneregex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

    if(phoneregex.test(tel.value)){
        telError.textContent = "";
    }else{ telError.textContent = "Phone Number is Incorrect"; }
});