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

// SECCIÓN IDEA CREATIVA

sr.reveal(".idea-contenido", { origin: "top", distance: "-100px" })

// SECCIÓN ESTILO

sr.reveal(".estilo-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".estilo-imagenes", { origin: "top", distance: "-100px" })

// SECCIÓN ESTRUCTURA

sr.reveal(".estructura-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".estructura-imagenes", { origin: "top", distance: "-100px" })

// SECCIÓN CROMÁTICA

sr.reveal(".cromatica-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".cromatica-imagenes", { origin: "top", distance: "-100px" })

// SECCIÓN BOCETOS

sr.reveal(".bocetos-contenido", { origin: "top", distance: "-100px" })
sr.reveal(".bocetos-imagenes", { origin: "bottom", distance: "-100px" })

// SECCIÓN CONSEJOS

sr.reveal(".consejos-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".consejos-propuesta", { origin: "top", distance: "-100px" })

// SECCIÓN FOOTER

sr.reveal(".footer-contenedor", { origin: "top", distance: "-100px" })
sr.reveal(".footer-extra", { origin: "top", distance: "-100px" })