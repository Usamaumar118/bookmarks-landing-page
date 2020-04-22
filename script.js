
// Form Validation 
const form = document.getElementById('form')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})


function checkInputs(){

    const emailValue = email.value.trim()

    if(emailValue === '' || emailValue === null){
        setErrorFor(email, 'Email cannot be empty')
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Whoops, make sure it\'s email')
    }else{
        console.log('email is ok')
    }

}

function setErrorFor(input, msg){

    const formControl = input.parentElement
    const errorMsg = document.querySelector('.error-msg')

    formControl.classList = "cta__content__form--input-container error";
    errorMsg.innerText = msg;
}


function isEmail(email){
    
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}