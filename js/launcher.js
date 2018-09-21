var isDynamicBgEnabled = true;

/* Clock Mechanism */
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

/* Explore Pane Toggler */
function showExplore() {
    document.getElementById("explorePane").style.width = "100%";
    //$("#notification-wrapper").fadeOut(400);
}

function closeExplore() {
    document.getElementById("explorePane").style.width = "0";
}

/* Apps Pane Toggler */
function showApps() {
    document.getElementById("appsPane").style.width = "100%";
}

function closeApps() {
    document.getElementById("appsPane").style.width = "0";
}

/* App Launcher */

function launchApp() {
    document.getElementById("applicationExecutor").style.height = "100%";
}

function closeApp() {
    document.getElementById("applicationExecutor").style.height = "0";
}

/* Functions that need to be executed at start */
displayDateTime();