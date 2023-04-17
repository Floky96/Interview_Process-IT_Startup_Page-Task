'use strict'

export const scrollToTop = () => {

    window.addEventListener("scroll", function () {
        const button = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            button.style.display = "block";
            button.style.opacity = 1;
        } else {
            button.style.opacity = 0;
            button.style.display = "none";
        }
    });

    document.getElementById("scrollToTopBtn").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

