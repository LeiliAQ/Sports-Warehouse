const navBtn= document.querySelector('.nav__btn-line')
const navMenu= document. querySelector('.nav-menu')
navOpen= false;
navBtn.addEventListener('click',function(){
    if(navOpen){
        navBtn.classList.remove("nav__btn-line--open")
        navOpen= false;
        navMenu.classList.remove("nav-menu--open")
    }
    else{
        navBtn.classList.add("nav__btn-line--open")
        navOpen= true;
        navMenu.classList.add("nav-menu--open")
    }
})

// Add container class in Desktop mode
document.addEventListener("DOMContentLoaded", function () {
    function updateLogosClass() {
        const logos = document.querySelector(".logos");
        if (window.innerWidth >= 768) {
            logos.classList.add("container");
        } else {
            logos.classList.remove("container");
        }
    }

    updateLogosClass(); // Run on load
    window.addEventListener("resize", updateLogosClass); // Run on resize
});
