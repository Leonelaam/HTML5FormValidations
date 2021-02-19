
function formValidation(event) {
    event.preventDefault();
    //reconocimiento por id
    let myform = document.getElementById("myform");
    let myalert = document.getElementById("alert");
    let card = document.getElementById("inputCard");
    let cvc = document.getElementById("inputCVC");
    let amount = document.getElementById("inputAmount");
    let name = document.getElementById("inputName");
    let lastName = document.getElementById("inputLastName");
    let city = document.getElementById("inputCity");
    let states = document.getElementById("inputState");
    let postalCode = document.getElementById("inputZip");
    let cardType = document.getElementById("inlineRadioOptions");
    let checkInput = document.getElementById("checkInput");
    let message = document.getElementById("floatingMessage");
    let submitForm = false;

    //validacion digitos de la tarjeta de credito
    if (!(card.value.length === 16)) {
        myalert.style.display = "block"
        myalert.textContent = "Debe tener 16 cantidades"
        card.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        card.style.backgroundColor = "white";
        submitForm = true;
    }
    //validacion digitos del CVC
    if (cvc.value.length != 3) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        cvc.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        cvc.style.backgroundColor = "white";
        submitForm = true;
    }
    //validacion amount
    if (amount.value.length === 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        amount.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        amount.style.backgroundColor = "white";
        submitForm = true;
    }

    // validar name
    if (name.value.lenght === 0) {
        myalert.style.display = "block";
        myalert.textContent = "CVC debe ingresar apellido";
        name.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        name.style.backgroundColor = "white";
        submitForm = true;
    }
    //validar lastname
    if (lastName.value.length === 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        lastName.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        lastName.style.backgroundColor = "white";
        submitForm = true;
    }

    // validar city
    if (city.value.length === 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        city.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        city.style.backgroundColor = "white";
        submitForm = true;
    }
    // validar states
    if (states.value === "Pick a State") {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        states.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        states.style.backgroundColor = "white";
        submitForm = true;
    }
    // validar postalcode
    if (postalCode.value.length === 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        postalCode.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        postalCode.style.backgroundColor = "white";
        submitForm = true;
    }
    // validacion tarjeta de credito
    let checkOption = false;
    for (let i = 0; i < cardType.length; i++) {
        if (cardType[i].checked) {
            checkOption = true;
        }
    }
    if (checkOption === false) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        checkInput.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        checkInput.style.backgroundColor = "white";
        submitForm = true;
    }
    //validacion mensaje
    if (message.value.length === 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        message.style.backgroundColor = "rgb(236, 205,208)";
        submitForm = false;
    } else {
        message.style.backgroundColor = "white";
        submitForm = true;
    }
    if(submitForm === true) {
        myform.submit();
    }
}