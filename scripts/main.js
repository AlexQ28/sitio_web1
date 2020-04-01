//var miTitulo = document.querySelector('h1');
//miTitulo.innerHTML = 'Hello World!';

/* 
El texto del título ha sido cambiado por "Hello world!" usando JavaScript.
Hicimos esto primero usando la función querySelector() para obtener una referencia al título y almacenarla en una variable llamada miTitulo.
Esto es muy similar a lo que hicimos con CSS usando selectores — queremos hacer algo con un elemento, así que tenemos que seleccionarlo primero.

Después de eso, establecimos el valor de la propiedad innerHTML de la variable miTitulo (que representa el contenido del título) como "Hello world!".

*/

//var myName = 'Alex'; //Una cadena de texto. Para indicar que la variable es una cadena, debes  escribirlo entre comillas.

//var myNumber = 10; // Un número. Los números no tienen comillas.

//var myCredit = true; //Tienen valor verdadero/falso. true/false son palabras especiales en JS, y no necesitan comillas.

// Array 	Una estructura que te permite almacenar varios valores en una sola referencia.
/*
var myArray = [1, 'Bob', 'Steve', 10]; 
    myArray[0], myArray[1];

// Object  Básicamente cualquier cosa. Todo en JavaScript es un objeto y puede ser almacenado en una variable. Mantén esto en mente mientras aprendes.
var miVariable = document.querySelector('h1');
*/
// Esto es un comentario

/*
Esto es un comentario
de varias líneas.
*/

//------CONDICIONALES--------

/* 
Las Condicionales son estructuras de código que
permiten comprobar si una expresión devuelve true o no,
y después ejecuta un código diferente dependiendo del
resultado. La forma de condicional más común es 
la llamada  if ... else. Entonces, por ejemplo:
*/
/*
var helado = 'chocolate';
if (helado === 'chocolate') {
    alert('¡Si, amo el helado de chocolate!');
}else {
    alert('Awwww, pero mi favorito es el de chocolate...');
}
*/

/*
La expresión dentro de if ( ... ) es el criterio — este usa al operador de identidad (descrito arriba) para comparar
la variable helado con la cadena chocolate para ver si las dos son iguales. Si esta comparación devuelve true, 
el primer bloque de código se ejecuta. Si no, ese código se omite y se 
ejecuta el segundo bloque de código después de la declaración else

*/

//-------FUNCIONES-----------

/*
Las funciones son una manera de encapsular una funcionalidad que quieres reutilizar, 
de manera que puedes llamar esa función con un solo nombre, y no tendrás que escribir el código entero
cada vez que la utilices. Ya has visto algunas funciones más arriba, por ejemplo:

var nombreDeLaVariable = document.querySelector('h1');
alert('Hola!');

Estas funciones están integradas en el navegador para poder utilizarlas en cualquier momento.

Si ves algo que parece un nombre de variable, pero tiene paréntesis — () — al final, probablemente es una función. 
Las funciones con frecuencia toman arguments — pedazos de datos que necesitan para hacer su trabajo. Estos se colocan dentro de los paréntesis,
y se separan con comas si hay más de uno.

Por ejemplo, la función alert() hace aparecer una ventana pop-up dentro de la ventana del navegador, pero nosotros
necesitamos asignarle una cadena como un argumento para decirle qué mensaje se debe escribir en la ventana pop-up.

Las buenas noticias son que podemos definir nuestras propias funciones — en el siguiente ejemplo escribimos una función
simple que toma dos números como argumentos y los multiplica entre si:

function multiplica(num1,num2) {
     return num1 * num2;
}
var resultado = multiplica(4,7);
console.log(resultado);

function multiplica(num1,num2) {
  var resultado = num1 * num2;
  return resultado;
}
multiplica(4,7);

*/

//------------EVENTOS------------
/*
Para crear una interacción real en tu sitio WEB, debes usar eventos — Estos son unas estructuras de código que captan lo que sucede en el navegador, y permite que en respuesta a las acciones que suceden se ejecute un código. El ejemplo más obvio es un click (click event), que se activa al hacer click sobre algo. Para demostrar esto, prueba ingresando lo siguiente en tu consola, luego haz click sobre la pagina actual:

document.querySelector('html').onclick = function() {
    alert('Ouch! Deja de pincharme!');
}

Hay muchas maneras de enlazar un evento a un elemento; aquí hemos seleccionado el elemento HTML y le asignamos a su propiedad onclick una función anónima  (función sin nombre) que contiene el código que se ejecutará cuando el evento suceda.

*/

/*
var miImage = document.querySelector('img');

miImage.onclick = function(){
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox.png') {
       miImage.setAttribute('src','images/firefox2.jpg'); 
    }else {
        miImage.setAttribute('src','images/firefox.png');
    }
}
*/

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}



