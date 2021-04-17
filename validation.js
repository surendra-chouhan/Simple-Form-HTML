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
})