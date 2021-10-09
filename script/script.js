const acc = document.querySelectorAll(".question__accordion");
// const panel = document.querySelectorAll(".question__panel");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", () => {
        acc[i].classList.toggle("active");
        const panel = acc[i].nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}