document.addEventListener("DOMContentLoaded", function () {
    const greenDiv = document.querySelector(".green");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    }

    function onScroll() {
        if (isElementInViewport(greenDiv)) {
            greenDiv.classList.add("visible");
        } else {
            greenDiv.classList.remove("visible");
        }
    }

    // Initial check to apply the effect if already in view
    onScroll();

    window.addEventListener("scroll", onScroll);
});
