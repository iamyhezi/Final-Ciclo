(function() {
    const sliders = [...document.querySelectorAll(".campo__sobre")];
    const arrowNext = document.querySelector("#next");
    const arrowBefore = document.querySelector("#before");
    let value;

    arrowNext.addEventListener("click", () => changePosition(1));

    arrowBefore.addEventListener("click", () => changePosition(-1));

    function changePosition(change) {

        const currentElement = Number(document.querySelector(".campo__ver").dataset.id);

        value = currentElement;
        value += change;

        console.log(sliders.length)
        if (value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }
        sliders[currentElement - 1].classList.toggle("campo__ver");
        sliders[value - 1].classList.toggle("campo__ver");
    }
})()


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

// SECCIÓN UN PROBLEMA CONSTANTE

sr.reveal(".problema-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".problema-imagenes", { origin: "top", distance: "-100px" })

// SECCIÓN ESCENARIO

sr.reveal(".escenario-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".escenario-formas", { origin: "top", distance: "-100px" })

// SECCIÓN CAMPO

sr.reveal(".campo-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".campo-slider", { origin: "top", distance: "-100px" })

// SECCIÓN TERRITORIO

sr.reveal(".territorio-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".territorio-imagenes", { origin: "top", distance: "-100px" })

// SECCIÓN ACTORES

sr.reveal(".actores__master", { origin: "top", distance: "-100px" })
sr.reveal(".actores__contenedor", { origin: "bottom", distance: "-100px" })

// SECCIÓN MAPEO

sr.reveal(".mapeo-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".mapeo-imagenes", { origin: "top", distance: "-100px" })

// SECCIÓN COLECTIVO

sr.reveal(".colectivo__master", { origin: "top", distance: "-100px" })
sr.reveal(".colectivo__cuadro", { origin: "bottom", distance: "-100px" })

// SECCIÓN MIDAS

sr.reveal(".midas-contenido", { origin: "bottom", distance: "-100px" })
sr.reveal(".midas-imagenes", { origin: "top", distance: "-100px" })

// SECCIÓN FOOTER

sr.reveal(".footer-contenedor", { origin: "top", distance: "-100px" })
sr.reveal(".footer-extra", { origin: "top", distance: "-100px" })