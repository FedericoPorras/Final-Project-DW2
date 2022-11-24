function textValidation (text, moreChars) {
    let validChars = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789_." + moreChars
    for (let i=0; i<text.length; i++) {
        if (validChars.indexOf(text[i]) == -1) {console.log(`${text[i]} (pos ${i})`); return false}
    }
    return true
}

function emailValidation (text) {
    let validChars = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789_.@"
    if (!textValidation(text, "@")) {return false}
    if (
        text.indexOf("@") == -1 ||
        text.indexOf(".") == -1
    ) {return false}
    return true
}

function passwordValidation(text) {
    if (!textValidation(text, "._:-"))  {console.log("a"); return false}

    let lowerCase = "abcdefghijklmnñopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    let specialChars = "._:-"

    let lowerValid = false
    let upperValid = false
    let specialValid = false

    for (let i=0; i<text.length; i++) {
        if (lowerCase.indexOf(text[i]) != -1) {lowerValid = true}
        if (upperCase.indexOf(text[i]) != -1) {upperValid = true}
        if (specialChars.indexOf(text[i]) != -1) {specialValid = true}
    }

    if (
        (!lowerValid) || (!upperValid) || (!specialValid)
    ) 
    {return false}

    return true
}

document.getElementById("register-button").addEventListener("click", function AnswerRegister(){
    let name = document.getElementById("II1").value
    let email = document.getElementById("II2").value
    let password = document.getElementById("II3").value

    var error = ""

    // This errors will be ordered by importance (least important first, most important last)
    if(!passwordValidation(password, "")){error = "Contraseña Invalida: Debe contener por lo menos una letra en minuscula, una en mayuscula, y un caracter especial"}  
    if(password.length <= 4) {error = "Contraseña Invalida: Debe contener por lo menos 5 caracteres"}
    if(!emailValidation(email, "")){error = "Email Invalido"}
    if(name.length <= 4) {error = "Nombre Invalido: Debe contener por lo menos 5 caracteres"}
    if(!textValidation(name, "")){error = "Nombre Invalido: Solo puedes ingresar caracteres alfanumericos, barras bajas o puntos"}
    if(password != document.getElementById("II4").value) {error = "Las contraseñas ingresadas no son iguales"}

    if (error == "") {
        document.getElementById("possibleAnswerInvalidAccountR").textContent = ""
        alert("Registrado con exito")
        document.getElementById("II1").value = ""
        document.getElementById("II2").value = ""
        document.getElementById("II3").value = ""
        document.getElementById("II4").value = ""
        window.location.href = "./index.html" // redirecting
    }
    else {
        var show = document.getElementById("possibleAnswerInvalidAccountR")
        show.style.display = "block"
        show.textContent = error
        show.style.color = "red"
    }
})

var vision = document.getElementById("seePassword")
var pass1 = document.getElementById("II3")
var pass2 = document.getElementById("II4")
var PPartner = document.getElementById("PPartner")

function showPassword(){
    vision.style.color = "pink"
    PPartner.style.color = "pink"
    pass1.setAttribute("type", "text")
    pass2.setAttribute("type", "text")
    vision.setAttribute("onclick", "hidePassword()")
}

function hidePassword() {
    vision.style.color = "white"
    PPartner.style.color = "white"
     pass1.setAttribute("type", "password")
    pass2.setAttribute("type", "password")
    vision.setAttribute("onclick", "showPassword()")
}