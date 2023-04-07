const submitBtn = document.querySelector('.btn'),
error = document.querySelector('.error'),
inputEle = document.querySelector('#email'),
txtError = document.querySelector('.txt-error');

const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!validEmail.test(inputEle.value)){
        inputEle.style.border= '2px solid hsl(0, 93%, 68%)';
        error.classList.toggle('none');
        txtError.classList.toggle('none');
    }
    console.log(inputEle.value)
})