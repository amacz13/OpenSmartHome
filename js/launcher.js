function displayDateTime(){
    var d = new Date(),
    seconds = d.getSeconds(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    
    var dots = "&nbsp;:&nbsp;";
    if ((seconds % 2) == 0) dots = "&nbsp;&nbsp;&nbsp;";
    
    var dispClock = hours + dots + minutes;
    var dispDate = days[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()];
    document.getElementById("clock").innerHTML = dispClock;
    document.getElementById("date").innerHTML = dispDate;
    
    setTimeout(displayDateTime, 1000);
}

function toggleExplore() {
    $("#notification-wrapper").hide();
}

displayDateTime();