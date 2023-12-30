// wow 
// new WOW().init();
// toggle active class on header
let menuBtn = document.querySelectorAll('.list-links .nav-item')
menuBtn.forEach((li) => {
    li.addEventListener("click", (e) => {
        menuBtn.forEach((el) => el.classList.remove("active"));
        li.classList.add("active");
    });
});
