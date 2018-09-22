setTimeout(function() {
    $('#upgradeInfo').hide();
    $('.circle-loader').show();
    $('.circle-loader').toggleClass('load-complete');
    $('.checkmark').toggle();
    setTimeout(function() {
        window.location.replace("index.html");
    }, 2000);
} , 5000);