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
