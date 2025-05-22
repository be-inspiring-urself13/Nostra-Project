 // Closing temprorary offer bar
var ad = document.getElementById("ad");
var closead = document.getElementById("closead");

closead.addEventListener("click", function () {
    ad.style.display = "none"
});
 
 // Toggle menu
function showmenu() {
   document.getElementById("mobile-menu").classList.add("show");
}

function closemenu() {
   document.getElementById("mobile-menu").classList.remove("show")
}