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

// Image slider
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-image-container")
var slidermargin = 0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})

sliderleftbutton.addEventListener("click",function(){
    if(slidermargin==0)
    {
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{
        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})

//like button function
document.querySelectorAll(".like-button").forEach((heart) => {
    heart.addEventListener("click",() => {
if(heart.src.includes("plain-heart.png")){
    heart.src = "./imagesz/red_heart.png";
}
else{
    heart.src = "./imagesz/plain-heart.png";
}

    });
});

//Windows opacity
window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})
