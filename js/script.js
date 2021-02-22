function updateCountryView(){
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value = "Yes"){
        divCountry.classList.remove("invisible");
    } else{
        divCountry.classList.add("invisible");
    }
}

var Dob = document.querySelector("#txtDOB");
var divDoBError = document.querySelector('#divDoBError');