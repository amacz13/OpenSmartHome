var isDynamicBgEnabled = true;
var isTransparentPanesEnabled = true;

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
    if (isTransparentPanesEnabled) {
        document.getElementById("content").classList.add("blur");
        document.getElementById("exploreBtn").classList.add("blur");
        document.getElementById("appsBtn").classList.add("blur");
    }
    //$("#notification-wrapper").fadeOut(400);
}

function closeExplore() {
    document.getElementById("explorePane").style.width = "0";
    if (isTransparentPanesEnabled) {
        document.getElementById("content").classList.remove("blur");
        document.getElementById("exploreBtn").classList.remove("blur");
        document.getElementById("appsBtn").classList.remove("blur");
    }
}

/* Apps Pane Toggler */
function showApps() {
    document.getElementById("appsPane").style.width = "100%";
    if (isTransparentPanesEnabled) {
        document.getElementById("content").classList.add("blur");
        document.getElementById("exploreBtn").classList.add("blur");
        document.getElementById("appsBtn").classList.add("blur");
    }
}

function closeApps() {
    document.getElementById("appsPane").style.width = "0";
    if (isTransparentPanesEnabled) {
        document.getElementById("content").classList.remove("blur");
        document.getElementById("exploreBtn").classList.remove("blur");
        document.getElementById("appsBtn").classList.remove("blur");
    }
}

/* App Launcher */

function launchApp() {
    $("#homeInAppBtn").show();
    $("#backInAppBtn").show();
    document.getElementById("applicationExecutor").style.height = "100%";
    
}

function closeApp() {
    $("#homeInAppBtn").hide();
    $("#backInAppBtn").hide();
    document.getElementById("applicationExecutor").style.height = "0";
}

function launchVoiceAssistant() {
    const artyom = new Artyom();
    //console.log(artyom.getVoices());
    //artyom.say("Bonjour, je suis Mila votre assistante virtuelle. Contrairement aux autres assistants disponibles, mon but est de simplifier votre vie. Vous pouvez ainsi définir vos propres actions depuis l'application Paramètres. Vous pouvez aussi proposer du contenu aux développeurs afin de m'améliorer. Nous allons commencer par régler quelques détails et je serais prête à répondre à vos demandes d'ici quelques minutes. Allons-y !");
    artyom.say("Que puis-je faire pour vous?");
    artyom.fatality();
    var UserDictation = artyom.newDictation({
        lang:"fr-FR",
        continuous:true, // Enable continuous if HTTPS connection
        onResult:function(text){
            // Do something with the text
            console.log(text);
        },
        onStart:function(){
            console.log("Dictation started by the user");
        },
        onEnd:function(){
            alert("Dictation stopped by the user");
        }
    });
    UserDictation.start();
}

function upgradeOS() {
    showModal("Mise à jour disponible","Une mise à jour du système est disponible. Souhaitez-vous la télécharger et l'installer maintenant ?","Oui","Non");
}

function showModal(title,message,actionBtn,closeBtn) {
    $("#modal-header").html(title);
    $("#modal-msg").html(message);
    $("#modal-yes").html(actionBtn);
    $("#modal-no").html(closeBtn);
    $('#modal').show();
}

function closeModal() {
    $('#modal').hide();
}

/* Functions that need to be executed at start */
displayDateTime();
if (isTransparentPanesEnabled) {
    document.getElementById("explorePane").classList.add("transparent");
    document.getElementById("appsPane").classList.add("transparent");
}