// Mostrar/Ocultar secciones
function mostrar(id) {
  const seccion = document.getElementById(id);
  seccion.style.display = seccion.style.display === "block" ? "none" : "block";
}

// Botón de bienvenida
document.getElementById("btnBienvenido").addEventListener("click", () => {
  alert("Bienvenido al Tarot del Caos");
});

// Modo oscuro
const botonModo = document.getElementById("modo");
botonModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  botonModo.textContent = document.body.classList.contains("dark") ? "Modo Claro" : "Modo Oscuro";
});

// Tirar una carta aleatoria
const cartas = [
  "El Loco", "El Mago", "La Sacerdotisa", "La Emperatriz",
  "El Emperador", "El Hierofante", "Los Enamorados",
  "La Rueda de la Fortuna", "La Muerte"
];

document.getElementById("tirarCarta").addEventListener("click", () => {
  const carta = cartas[Math.floor(Math.random() * cartas.length)];
  const resultado = document.getElementById("resultadoCarta");
  resultado.textContent = "Tu carta es: " + carta;
});

// Efecto de giro al hacer clic en cartas
document.querySelectorAll(".carta").forEach(carta => {
  carta.addEventListener("click", () => {
    carta.classList.toggle("girada");
  });
});
