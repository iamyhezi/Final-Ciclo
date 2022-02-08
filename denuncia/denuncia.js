const cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
})

document.addEventListener("click", () => {
    cursor.classList.add("click");
    setTimeout(() => {
        cursor.classList.remove("click");
    }, 400)

})

const sr = ScrollReveal({
    duration: 3000,
    reset: true
})

sr.reveal(".menu__logo", { origin: "bottom", distance: "-100px" })
sr.reveal(".menu__items", { origin: "bottom", distance: "-100px" })

sr.reveal(".home-items", { origin: "bottom", distance: "-100px" })
sr.reveal(".home-contenedor", { origin: "top", distance: "-100px" })

// SECCIÓN CONTENEDOR PRINCIPAL

sr.reveal(".home__info", { origin: "top", distance: "-100px" })

// SECCIÓN FOOTER

sr.reveal(".footer-contenedor", { origin: "top", distance: "-100px" })
sr.reveal(".footer-extra", { origin: "top", distance: "-100px" })