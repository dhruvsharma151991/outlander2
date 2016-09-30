if (top !== self) top.location.href = self.location.href;

function ClickTrack(click) {
    if (window.trackClick) trackClick(click);
}

function getMarketingName() {
    var uas = window.uas || {};
    return uas.marketing_name ? uas.marketing_name : 'Android';
}


$(document).ready(function () {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("godina").innerHTML = n;

    // DISABLE ENTER KEY
    $('.phone').keypress(function (e) {
        if (e.which == 13) return false;
    });


    /*RIGHT CLICK DISABLE*/
    $(function () {
        $(this).bind("contextmenu", function (e) {
            e.preventDefault();
        });
        $('#webopt_msisdn').keypress(function (e) {
            if (e.which == 13) return false;
        });
    })
});

//Timer
var count = 60;
var counter = setInterval(timer, 1000);
function timer() {
    count = count - 1;

    if (count <= 0) {
        clearInterval(counter);
        document.getElementById("timer").innerHTML = "nekoliko";
        return;
    }
    document.getElementById("timer").innerHTML = count;
}

setTimeout(function () { $("audio").fadeIn("slow"); }, 0);
function Vibracija() {
    setTimeout(function () {
        navigator.vibrate([500, 500, 500]);

        var soundDiv = document.getElementById("sounddiv");
        soundDiv.innerHTML = "<audio src='http://startscanner.com/ugh0/audio/alert.mp3' preload='' autoplay></audio>";

    }, 10);
}
