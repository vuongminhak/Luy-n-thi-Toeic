// Go to top
window.addEventListener("load", function(){
const toTop = document.querySelector(".btn-to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

// Smooth scroll to top when the button is clicked
toTop.addEventListener("click", (event) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
});
