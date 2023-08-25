let menuIcon = document.getElementById("menu");
let nav = document.querySelector("nav");
let body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
    if(menuIcon.classList.contains("active")) {
        menuIcon.classList.remove("active");
        menuIcon.classList.add("inactive");
        nav.classList.remove("on");
        body.style.overflowY = 'auto';
    } else {
        menuIcon.classList.add("active");
        menuIcon.classList.remove("inactive");
        nav.classList.add("on");
        window.scrollTo({
            top:0,
            left: 0,
            behavior: 'smooth'
        });
        body.style.overflowY = 'hidden';
    }
});