let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/gato.jpg') {
      miImage.setAttribute('src','images/gato2.png');
    } else {
      miImage.setAttribute('src', 'images/gato.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'A que te gustan los misus ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'A que te gustan los misus ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}