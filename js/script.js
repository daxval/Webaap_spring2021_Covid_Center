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

    var Dob = document.querySelector("#txtDOB");
    var divDoBError = document.querySelector("#divDoBError");

    if(DoB.value == ""){
        divDoBError.classList.remove("invisble");
        divDoBError.innerHTML = "The Date of birth can not be empty."
        Dob.classList.add("hasError");
    }else{
        var DoBDate = new Date (DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate){
            //error
        }
    }
}