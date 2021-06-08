function AliveTime() {

    birthDate = document.getElementById("birthdate").value;

    var dateArray = birthDate.split("-");
    var years = parseInt(dateArray[0]);
    var months = parseInt(dateArray[1]) -1; //zero indexed
    var days = parseInt(dateArray[2]);

    birth = new Date(years, months, days);
    var now = new Date();
    
    //totalTimeAlive
    tTA = now.getTime() - birth.getTime();

    //total Seconds
    tTS = tTA / 1000;

    //total Minutes
    tTM = tTS / 60;
    
    //total Hours
    tTH = tTM / 60;
    
    //total Days
    tTD = tTH / 24;

    //total years alive, rounded down
    tTY = now.getFullYear() - birth.getFullYear();

    if (!birthdayYet(days, months)) { tTY -= 1};


    document.getElementById("results1").innerHTML = "Your birthday is {0}, and now is {1}, you have been alive for approximately {2} years".f(birth, now, tTY);
    document.getElementById("results2").innerHTML = "That is: {0} seconds, {1} minutes, {2} hours and {3} days!".f(Math.round(tTS), Math.round(tTM), Math.round(tTH), Math.round(tTD)) 
}


//Borrowed a format string function I found on stack exchange
String.prototype.format = String.prototype.f = function () {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

function birthdayYet(birthDays, birthMonth) {
    currentDate = new Date();

    if (currentDate.getMonth() <= birthMonth) {
        if ((currentDate.getMonth() == birthMonth) && (currentDate.getDate() >= birthDays)) {
            return true;
        }
        return false;
    } else{
        return true;
    }
}