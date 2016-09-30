function ClickTrack (click){ 
if(window.trackClick) trackClick(click); }

function getMarketingName()
 {
    var uas = window.uas || {};
    return uas.marketing_name ? uas.marketing_name : 'Android';
 }


 $(document).ready(function() {
 	var d = new Date();
    var n = d.getFullYear();
    document.getElementById("godina").innerHTML = n;

// DISABLE ENTER KEY
$('.phone').keypress(function(e){
 if ( e.which == 13 ) return false; 
});


/*RIGHT CLICK DISABLE*/
$(function() {
$(this).bind("contextmenu", function(e) {
e.preventDefault();
});
$('#webopt_msisdn').keypress(function(e){
 if ( e.which == 13 ) return false; 
});
}) 
});



