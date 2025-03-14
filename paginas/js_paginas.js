// Modal para la política de privacidad
const privacyLink = document.querySelector('a[data-bs-target="#privacyModal"]');
privacyLink.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('privacyModal'));
    modal.show();
});

//Modo oscuro 
let modo = document.getElementById("boton");
let body = document.body;

// Al cargar la página, revisa si el modo oscuro estaba activado
if (localStorage.getItem("modoOscuro") === "true") {
    body.classList.add("dark");
    document.getElementById("luna").className = "bi bi-sun"; // Cambia a icono de sol
}

modo.addEventListener("click", function () {
    body.classList.toggle("dark");

    // Guarda el estado del modo oscuro en localStorage
    let modoOscuroActivo = body.classList.contains("dark");
    localStorage.setItem("modoOscuro", modoOscuroActivo);

    // Cambia el icono entre luna y sol
    let icono = document.getElementById("luna");
    if (modoOscuroActivo) {
        icono.className = "bi bi-sun"; // Cambia a icono de sol
    } else {
        icono.className = "bi bi-moon"; // Cambia a icono de luna
    }
});