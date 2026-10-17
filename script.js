const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "" || clave === "") {
    mensaje.textContent = "Por favor completa todos los campos.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Datos completos. Ingreso simulado.";
    mensaje.style.color = "green";
  }
});