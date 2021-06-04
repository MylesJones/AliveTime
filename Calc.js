function AliveTime() {

    birthDate = document.getElementById("birthdate").value;

    var dateArray = birthDate.split("-")
    var years = parseInt(dateArray[0])
    var months = parseInt(dateArray[1]) -1 //zero indexed
    var days = parseInt(dateArray[2])

    birth = new Date(years, months, days)
    var now = new Date();

    

    


    document.getElementById("results").innerHTML = "Your birthday is: " + birth + " and now is " + now;
}