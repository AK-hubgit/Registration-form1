// Form creation without using jquery

// document.querySelector('#form').innerHTML= 10
const form = document.querySelector('#form')
const Username = document.querySelector('#Username')
const Email = document.querySelector('#Email')
const Password = document.querySelector('#Password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs () {
    const UsernameVal = Username.value.trim()
    const EmailVal = Email.value.trim()
    const PasswordVal = Password.value.trim()
    const cpasswordVal = cpassword.value.trim()

    if (UsernameVal===''){
        setError(Username,'Username is required')
    }
    else {
        setSuccess(Username)
    }
    
    if (EmailVal===''){
        setError(Email,'Email is required')
    }
    else if (!validateEmail(Email)) {
        setError(Email,'Please enter a valid email')
    }
    else {
        setSuccess(Email)
    }

    if (PasswordVal===''){
        setError(Password,'Paswword is required')
    }
    else if (PasswordVal.lenght<8){
        setError(Password,'Paswword must have 8 characters lenght')
    }
    else {
        setSuccess(Password)
    }

    if (cpasswordVal===''){
        setError(cpassword,'Confirm password again')
    }
    else if (cpasswordVal!==PasswordVal){
        setError(cpassword,'Confirm password does not match')
    }
    else {
        setSuccess(cpassword)
    }
    

}
function setError (element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}
function setSuccess (element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = ' ';
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


