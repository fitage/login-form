let form = document.getElementById("signUpForm")
let nameField = document.getElementById("fullnameField")
let emailField = document.getElementById("emailField")
let passwordField = document.getElementById("passwordField")
let nameErrorMessage = document.getElementById("nameErrorMessage")
let emailErrorMessage = document.getElementById("emailErrorMessage")
let passwordErrorMessage = document.getElementById("PasswordErrorMessage")
let nameErrorIcon = document.getElementById("nameErrorIcon")
let emailErrorIcon = document.getElementById("emailErrorIcon")
let passwordErrorIcon = document.getElementById("passwordErrorIcon")
let nameSuccessIcon = document.getElementById("nameSuccessIcon")
let emailSuccessIcon = document.getElementById("emailSuccessIcon")
let passwordSuccessIcon = document.getElementById("passwordSuccessIcon")
let button = document.getElementById("button")






form.addEventListener("submit", function(event){
event.preventDefault()
formValidation()
})


function formValidation(){

// validation for full name

if(nameField.value.trim() === ""){
nameErrorMessage.innerText = "Please Enter a valid Full name"
nameField.style.border = "1px solid red"
nameErrorIcon.style.visibility = "visible"
nameErrorIcon.style.color = "red"
nameSuccessIcon.style.visibility = "hidden"

}else if(nameField.value.trim().length <6){
    nameErrorMessage.innerText = "Fullname has to be more than 6 characters"
    nameField.style.border = "1px solid red"
    nameErrorIcon.style.visibility = "visible"
    nameErrorIcon.style.color = "red"
    nameSuccessIcon.style.visibility = "hidden"
}else{
    nameErrorIcon.style.visibility = "hidden"
    nameField.style.border = "1px solid green"
    nameErrorMessage.style.visibility = "hidden"
    nameSuccessIcon.style.visibility = "visible"
    nameSuccessIcon.style.color = "green"
    }

// validation for email field

if(emailField.value.trim()  === ""){
    emailErrorMessage.innerText = "Please enter a valid email address"
    emailField.style.border = "1px solid red"
    emailErrorIcon.style.visibility = "visible"
    emailErrorIcon.style.color = "red"
}else if(validEmail(emailField.value)){
    emailErrorIcon.style.visibility = "hidden"
    emailField.style.border = "1px solid green"
    emailErrorMessage.style.visibility = "hidden"
    emailSuccessIcon.style.visibility = "visible"
    emailSuccessIcon.style.color = "green"
    
}
    
}

function validEmail(emailOfUser){
    const regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let myTest = regularExpression.test(emailOfUser)
    return myTest
}


// validation of password field

    