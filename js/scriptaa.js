const intro = document.getElementById("intro");
const main = document.getElementById("main");

function retrasoMain() {
  main.classList.remove("hide");
  main.classList.add("appear");
}

function retrasoHide() {
  intro.classList.add("hide");
}

function retrasoGone() {
  intro.classList.add("gone");
  setTimeout(retrasoHide, 900);
}

function init() {
  setTimeout(retrasoGone, 1500);
  setTimeout(retrasoMain, 1800);
}
window.addEventListener("load", init);

const contenedorBotones = document.getElementById("seleccion");
const secciones = document.querySelectorAll(".revista");

// Agregar un evento de clic al contenedor de botones
contenedorBotones.addEventListener("click", function (event) {
  const boton = event.target; // El botón en el que se hizo clic
  const seccionId = boton.id.replace("btn", "revista"); // El ID de la sección correspondiente al botón

  // Comprobar si se pudo obtener el ID de la sección
  if (seccionId) {
    // Mostrar la sección correspondiente y ocultar las demás
    secciones.forEach(function (seccion) {
      // Si el ID de la sección actual coincide con el ID de la sección buscada, la mostramos y la marcamos como activa
      seccion.classList.toggle("activo", seccion.id === seccionId);
      // Si el ID de la sección actual no coincide con el ID de la sección buscada, la ocultamos y la marcamos como pasiva
      seccion.classList.toggle("pasivo", seccion.id !== seccionId);
    });

    // Resaltar el botón seleccionado y desactivar los demás botones
    const botones = contenedorBotones.querySelectorAll("th");
    botones.forEach(function (boton) {
      // Si el botón actual es el mismo en el que se hizo clic, lo resaltamos como activo
      boton.classList.toggle("activo", boton === event.target);
      // Si el botón actual no es el mismo en el que se hizo clic, lo desactivamos
      boton.classList.toggle("pasivo", boton !== event.target);
    });
  }
});


const letrasPosibles = ['a', 'x', 'o']; // Letras posibles
const spanX = document.getElementById('x'); // Span con ID "x"
let letraActual = ''; // Almacenar la letra actual

// Función para obtener una letra aleatoria diferente de la actual
function obtenerLetraAleatoriaDiferente() {
  let nuevaLetra;
  do {
    nuevaLetra = obtenerLetraAleatoria();
  } while (nuevaLetra === letraActual);
  letraActual = nuevaLetra;
  return nuevaLetra;
}

// Función para obtener una letra aleatoria
function obtenerLetraAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * letrasPosibles.length);
  return letrasPosibles[indiceAleatorio];
}

// Función para actualizar la letra con animación
function actualizarLetraConAnimacion() {
  spanX.style.opacity = 0; // Ocultar la letra

  setTimeout(() => {
    const letraAleatoria = obtenerLetraAleatoriaDiferente();
    spanX.textContent = letraAleatoria;
    spanX.style.opacity = 1; // Mostrar la letra

    setTimeout(() => {
      spanX.style.opacity = 0; // Ocultar la letra nuevamente

      setTimeout(() => {
        spanX.style.opacity = 1; // Mostrar la letra
      }, 200); // Esperar 200 milisegundos antes de mostrar la letra nuevamente
    }, 200); // Esperar 200 milisegundos antes de ocultar la letra
  }, 200); // Esperar 200 milisegundos antes de mostrar la nueva letra
}

// Actualizar la letra inicial y luego cada tres segundos
actualizarLetraConAnimacion();
setInterval(actualizarLetraConAnimacion, 4000); // 4000 milisegundos = 4 segundos