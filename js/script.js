let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.textOne`, {delay: 100})
sr.reveal(`.ventajas`, {delay: 700})
sr.reveal(`.camp`, {delay: 900})
sr.reveal(`.contacto`, {delay: 1100, origin: 'bottom'})