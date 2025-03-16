document.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        document.querySelector("header").classList.add("scrolledHeader");
    } else {
        document.querySelector("header").classList.remove("scrolledHeader");
    }
});
