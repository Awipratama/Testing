const animatedElements = document.querySelectorAll("animate")

function animatedElements() {
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "0.5";
            element.style.transform = "translateY(0)";
        }, 500 * index);
    });
}
animatedElements();