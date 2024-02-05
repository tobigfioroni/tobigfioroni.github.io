// NAVBAR STICKY

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Copy paste email function

document.getElementById('copyEmail').addEventListener('click', function() {
  // Crear un elemento de entrada de texto oculto
  var inputElement = document.createElement('input');
  
  // Asignar el valor del correo electrónico al elemento de entrada de texto
  inputElement.value = 'tobigfioroni@gmail.com';
  
  // Adjuntar el elemento de entrada de texto al cuerpo del documento
  document.body.appendChild(inputElement);
  
  // Seleccionar el contenido del elemento de entrada de texto
  inputElement.select();
  
  // Copiar el contenido al portapapeles
  document.execCommand('copy');
  
  // Eliminar el elemento de entrada de texto después de copiar
  document.body.removeChild(inputElement);
});

