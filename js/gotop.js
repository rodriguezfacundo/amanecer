document.getElementById("button-up"). addEventListener("click", scrollUp);

function scrollUp() {


    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 13));
        buttonUp.style.transform = "scale(0)";
    } 
}

scrollUp();

buttonUp = document.getElementById("button-up");
window.onscroll = function (){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 1200){
        buttonUp.style.transform = "scale(1)";
    }else if (scroll < 1200){
        buttonUp.style.transform = "scale(0)";
    }
}