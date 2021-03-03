function updateCountryView(){
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value = "Yes"){
        divCountry.classList.remove("invisible");
    } else{
        divCountry.classList.add("invisible");
    }
}

function validateForm(){

    var DoB = document.querySelector("#textDOB");
    var divDoBError = document.querySelector("#divDoBError");
    var formIsValid = true;

    if(DoB.value == ""){
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of birth can not be empty.";
        DoB.classList.add("hasError");
        formIsValid = false;
    }else{
        var DoBDate = new Date (DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate){
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "Date of birth must be before today's date.";
            Dob.classList.add("hasError");
            formIsValid = false;
        }else{
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = "";
            Dob.classList.remove("hasError");
        }
    }

    var ddCountry = document.querySelector("#ddCountry")

    if(ddCountry.value == "Yes"){
        var whichCountry = document.querySelector("#txtWhichCountry");
        var divCountryError = document.querySelector("#divCountryError");
        if(whichCountry.value == ""){
            divCountryError.classList.remove("invisible");
            divCountryError.innerHTML = "You must enter at least one country.";
            formIsValid = false;
        }else{
            divCountryError.classList.add("invisible");
            divCountryError.innerHTML = "";
        }
    }

    var elements = document.getElementsByTagName("input");
    var invalidChars = ['#', '!', '~'];
    for(let i = 0; i < elements.length; i++){
        for(let j = 0; j <invalidChars.length; j++){
            if(elements[i].value.indexOf(invalidChars[j]) != -1){
                elements[i].classList.add("hasError");
                formIsValid = false;
                var divInvalidChar = document.querySelector("#divInvalidCharError");
                divInvalidChar.classList.remove("invisible");
                divInvalidChar.innerHTML = "You have entered an invalid char(#, !, ~) in the form. Please remove the char and try again."
            }
        }
    }

    return formIsValid;
}