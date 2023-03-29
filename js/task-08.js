
const formEl = document.querySelector('.login-form')
const inputPasswordEl = document.querySelector('input[type="password"]')
const inputMailEl = document.querySelector('input[type="email"]')

formEl.addEventListener('submit', onFormSubmit)


function onFormSubmit(_event) {
    _event.preventDefault();

    const formElementsWay = _event.currentTarget.elements;

    const mail = formElementsWay.email.value;
    const password = formElementsWay.password.value;
    
    const formData = {
        mail,
        password,
    }
    
    if (mail === "" || password === "") {
        alert('Fill in all input fields!')
        return;
    } 
    else {console.log(formData)}
    
    formEl.reset()
};

