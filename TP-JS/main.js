import './style.css'



function suma(a, b) {
  let c = a + b;
  console.log("la suma de a y b es " + c);
}
function promptNombre() {
  let nombre = prompt("¿Cual es tu nombre?");
  console.log("Hola " + nombre + "!");
}

function numeroMasGrande(a, b) {
  let c;
  if (a > b) {
    c = a;
    console.log("El numero mas grande es " + c);
  } else if (a < b) {
    c = b;
    console.log("El numero mas grande es " + c);
  } else {
    console.log("Los numeros son iguales");
  }
}

function esPar(a) {
  if (a % 2 == 0) {
    console.log("El numero " + a + " es par");
  } else {
    console.log("El numero " + a + " es impar");
  }
}

function restarUnoHasta0() {
  let a = 10;
  while (a > 0) {
    console.log(a);
    a--;
  }
}

function esMayorA100() {
  let a;
  do {
    a = prompt("Ingrese un numero");
  } while (a <= 100) {
    console.log("El numero " + a + " es mayor a 100");
  }
}

function esParTrueorFalse(a) {
  return a % 2 === 0;
}
function convertirCelsiusALfahrenheit(a) {
  let b = a * 1.8 + 32;
  return console.log(a + "°C son equivalentes a " + b + " °F");
}

let Persona = {
  nombre: "Franco",
  edad: 25,
  ciudad: "Madrid",
};

let Libro = {
  titulo: "El libro de la vida",
  autor: "Carlos Fuentes",
  año: 2010,
};

function CambiarCiudad(ciudad) {
  Persona.ciudad = ciudad;
  console.log(Persona);
}

function libroAntiguo() {
  const actualDate = new Date().getFullYear();
  const edadLibro = actualDate - Libro.año;
  return edadLibro > 10;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];

function multiplicarNumerosPorDos() {
  console.log("numeros originales: " + numeros);
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] * 2;
  }
  console.log("Numeros multiplicados por 2: " + numeros);
}

function agregarSoloPares() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  console.log("Primeros 10 numeros pares: " + pares);
}

function cambiarColor() {
  const p1 = document.querySelectorAll('p1');
  p1.forEach((element) => {
    element.style.color = 'blue';
  });
}

function crearAlertaMensaje(mensaje) {
  alert("A ingresado: " + mensaje);
}

function mostrarElementoDeListaOnClick() {
  const lista = document.getElementById('lista');
  const elementos = lista.getElementsByTagName('li');

  for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', () => {
      console.log(elementos[i].innerText);
    });
  }
}

function habilitarCampo(campo) {
  campo.disabled = false;
}
function deshabilitarCampo(campo) {
  campo.disabled = true;
}

function guardarMail() {
  event.preventDefault();
  const correo = document.getElementById('correo').value;
  localStorage.setItem('correo', correo);
  mostrarCorreoGuardado();
}

function mostrarCorreoGuardado() {
  const correoGuardado = localStorage.getItem('correo');
  document.getElementById('resultadoCorreo').innerHTML = correoGuardado || "No hay correo guardado";
}



document.querySelector('#app').innerHTML = `
  <div>
    </a>
    <h1>TP Javascript</h1>
    </div>
    <div>
      <button id="suma">Sumar</button>
      <button id="promptNombre">Ingresa nombre</button>
      <button id="restar">Restar hasta cero</button>
      <button id= "mayora100">Mayor a 100?</button>
      <button id="cambiarCiudad">Cambiar ciudad</button>
      <button id="libroAntiguo">Libro antiguo?</button>
      <button id="multiplicarNumerosPorDos">Multiplicar por 2</button>
      <button id="agregarSoloPares">Primeros pares</button>
    </div>
    <div>
    <input type= "number" id="numero1" placeholder="Numero 1">
      <input type= "number" id="numero2" placeholder="Numero 2">
      <button id= "numeroMasGrande">Comparar mayor</button>
      </div>
      <div>
      <input type= "number" id="numero3" placeholder="Ingrese un numero">
      <button id= "numeroPar">Es par?</button>
      <input type= "number" id="numero4" placeholder="Ingrese un numero">
      <button id= "numeroPar2">Es par? v2</button>
      <div>
      <input type= "number" id="numero5" placeholder="Ingrese un valor en Celsius">
      <button id="ConvertirF">Convertir a °F</button>
      </div>
      <div>
      <p1>Primer texto</p1>
      <p1>Segundo texto</p1>
      <p1>Tercer texto</p1>
      <button id="CambiarColor">Cambiar textos a Color Azul</button>
      </div>
      <div>
      <input type= "text" id="mensaje" placeholder="Ingrese un mensaje">
      <button id="CrearAlerta">Crear Alerta</button>
      </div>
      <h4>Lista de elementos</h4>
      <ul id="lista">
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
      </div>
      <div>
      <input type= "text" id="mensaje2" placeholder="Ingrese un mensaje">
      <button id="deshabilitar">Deshabilitar campo de texto</button>
      <button id="habilitar">Habilitar campo de texto</button>
      </div>
      <div>
      <form id="formulario">
        <input type= "email" id="correo" placeholder="Ingrese su correo">
        <button id="EnviarCorreo">Guardar email</button>
      </form>
      <div id="resultadoCorreo">
        <p>Correo guardado ${localStorage.getItem('correo')}</p>
      </div>
        </div>
      <div>
      <h2>Franco Suarez</h2>
      </div>
  </div>
`

const botonSuma = document.getElementById('suma');
const botonPrompt = document.getElementById('promptNombre');
const botonComparar = document.getElementById('numeroMasGrande');
const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const botonPar = document.getElementById('numeroPar');
const inputNumero3 = document.getElementById('numero3');
const botonRestar = document.getElementById('restar');
const botonMayora100 = document.getElementById('mayora100');
const botonPar2 = document.getElementById('numeroPar2');
const inputNumero4 = document.getElementById('numero4');
const botonConvertirF = document.getElementById('ConvertirF');
const inputNumero5 = document.getElementById('numero5');
const botonCambiarCiudad = document.getElementById('cambiarCiudad');
const botonLibroAntiguo = document.getElementById('libroAntiguo');
const botonMultiplicarNumerosPorDos = document.getElementById('multiplicarNumerosPorDos');
const botonAgregarSoloPares = document.getElementById('agregarSoloPares');
const p1 = document.getElementsByTagName('p1');
const botonCambiarColor = document.getElementById('CambiarColor');
const botonCrearAlerta = document.getElementById('CrearAlerta');
const mensaje = document.getElementById('mensaje');
const botonDeshabilitar = document.getElementById('deshabilitar');
const botonHabilitar = document.getElementById('habilitar');
const botonEnviarCorreo = document.getElementById('EnviarCorreo');
const correo = document.getElementById('correo');
const resultadoCorreo = document.getElementById('resultadoCorreo');
const formulario = document.getElementById('formulario');

botonSuma.addEventListener('click', () => {
  suma(10, 5);
});
botonPrompt.addEventListener('click', promptNombre);

botonComparar.addEventListener('click', () => {
  const num1 = parseInt(inputNumero1.value);
  const num2 = parseInt(inputNumero2.value);
  numeroMasGrande(num1, num2);
});

botonPar.addEventListener('click', () => {
  const num3 = parseInt(inputNumero3.value);
  esPar(num3);
});

botonRestar.addEventListener('click', () => {
  restarUnoHasta0();
});

botonMayora100.addEventListener('click', esMayorA100);

botonPar2.addEventListener('click', () => {
  const num4 = parseInt(inputNumero4.value);
  console.log("El numero " + num4 + " ingresado es par? " + esParTrueorFalse(num4));
});

botonConvertirF.addEventListener('click', () => {
  const num5 = parseInt(inputNumero5.value);
  convertirCelsiusALfahrenheit(num5);
});

botonCambiarCiudad.addEventListener('click', () => {
  const ciudad = prompt("Ingresa la nueva ciudad");
  CambiarCiudad(ciudad);
});

botonLibroAntiguo.addEventListener('click', () => {
  console.log("El libro " + Libro.titulo + " es antiguo: " + libroAntiguo());
});

botonMultiplicarNumerosPorDos.addEventListener('click', () => {
  multiplicarNumerosPorDos();
});

botonAgregarSoloPares.addEventListener('click', () => {
  agregarSoloPares();
});

botonCambiarColor.addEventListener('click', () => {
  cambiarColor();
});

botonCrearAlerta.addEventListener('click', () => {
  crearAlertaMensaje(mensaje.value);
});

mostrarElementoDeListaOnClick();

botonHabilitar.addEventListener('click', () => {
  habilitarCampo(mensaje2);
});

botonDeshabilitar.addEventListener('click', () => {
  deshabilitarCampo(mensaje2);
});

botonEnviarCorreo.addEventListener('click', () => {
  guardarMail();
});