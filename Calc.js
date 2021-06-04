function AliveTime() {

    birthDate = document.getElementById("birthdate").value;

    var dateArray = birthDate.split("-")
    var years = dateArray[0]
    var months = dateArray[1]
    var days = dateArray[2]
    


    document.getElementById("results").innerHTML = "Your birthday is: " + days + "/" + months + "/" + years;
}