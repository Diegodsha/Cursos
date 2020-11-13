// METODOS DE CADENAS-----------------------------
//strings-------------------------------------------------------
/*
let cadena = "esta es una cadena para prueba prueba";
let cadena2 = "prueba";
// buscar en cadenas y devuelve un valor
resultado = cadena.concat(cadena2); // concatena cadenas
resultado1 = cadena.startsWith(cadena2); // si la 1er cadena empieza con la 2da cadena lanza true si no, false
resultado2 = cadena.endsWith(cadena2); // lo mismo pero compara el final de las cadenas
resultado3 = cadena.includes(cadena2); // busca cadenas en cualquier parte de otra cadena
resultado4 = cadena.indexOf(cadena2); // devuelve la posicion del primer valor de la busqueda, si devuelve -1 no está
resultado5 = cadena.lastIndexOf(cadena2); // devuelve la posicion del ultimo valor de la busqueda si se repite, si devuelve -1 no está
// modificar cadenas
resultado6 = cadena.padStart(40,"dd"); // completa la cadena al principio con los valores necesarios para que sea igual al # de caracteres [#decaracteres, caracter]
resultado7 = cadena.padEnd(40,"dd"); //lo mismo pero al final
resultado8 = cadena.repeat(2); //repite la cadena el # de veces deseadas


document.write(
  resultado + "<br>"
+ resultado1 + "<br>" 
+ resultado2+ "<br>" 
+ resultado3+ "<br>" 
+ resultado4+ "<br>" 
+ resultado5+ "<br>" 
+ resultado6+ "<br>" 
+ resultado7+ "<br><br>" 
+ resultado8);
*/
/*
let cadena = "esta es una cadena PARA prueba prueba";
let cadena2 = "prueba";
let cadena3 = 6;
let cadena4 = "   diego  "

resultado = cadena.split(" "); // divide la cadena por partes tomando como divisor el valor que le pongamos (la cadena se convierte en un array)
resultado1 = cadena.substring(0,7); // te muestra el fragmento de cadena de acuerdo a los parametros que desees
resultado2 = cadena.toLowerCase(cadena2);
resultado3 = cadena.toUpperCase(cadena2);
resultado4 = cadena.toString(cadena3);
resultado5 = cadena4.trim(); //elimina los espacios que hay de sobra en ambos lados de los strings
resultado6 = cadena4.trimStart(); //elimina los espacios que hay de sobra al inicio 
resultado7 = cadena4.trimEnd(); // ya es obvio lo que hace no?

document.write(
    resultado + "<br>"
    + resultado1 + "<br>" 
    + resultado2+ "<br>"
    + resultado3+ "<br>"
    + resultado4+ "<br>"
    + resultado5.length+ "<br>"
    + resultado6.length+ "<br>"
    + resultado7.length
);
*/
// arrays------------------------------------------------------------------
/*
let cadena = ["cadena1", "cadena2", "cadena3"];
let cadena2 = ["cadena1", "cadena2", "cadena3"];
let cadena3 = [4, 3, 6, 2, 5, 1, "ana", "babo"];
let cadena4 = [1, 2, 3, "ana", "babo"]
let cadena5 = ["cadena1", "cadena2", "cadena3"];

//metodos transformadores
let resultado = cadena.pop()// elimina el ultimo dato del array y lo imprime para que veas cual es
let resultado1 = cadena.shift()// hace lo mismo pero con el primer dato
let resultado2 = cadena2.push("cadena4")// agrega uno o mas datos al final del array e imprime su posicion
let resultado3 = cadena2.reverse()// invierte el orden de los valores del array
let resultado4 = cadena2.unshift("cadena0")// en vez de quitar agrega uno o mas datos
let resultado5 = cadena3.sort()// ordena los datos alfanumericamente
let resultado6 = cadena4.splice(1, 3, "diego")//(desde que posicion quieres empezar,cuantos elemnetos quieres eliminar,"elemento para agregar") elimina los datos que esten dentrodel rango de posiciones, puede agregar datos (1,3,add)
//metodos accesores
let resultado7 = cadena4.join("-")// une todos los elementos de una matriz en una sola cadena y la devuelve.
let resultado8 = cadena5.slice(0,2)//devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
//metodos de repeticion
let resultado9 = cadena5.filter(numero =>{ document.write(numero+ "<br>") })//crea un nuevo array con todos los elementos que cumplan la condicion
//let resultado10 = cadena5.forEach((numero)=>{ document.write(numero+ "<br>") })//ejecuta la funcion indicada una vez por cada elemento del array

document.write(
  resultado + "<br>"
  + resultado1 + "<br>"
  + resultado2 + "<br>"
  + resultado3 + "<br>"
  + resultado4 + "<br>"
  + resultado5 + "<br>"
  + resultado6 + "<br>"
  + resultado7 + "<br>"
  + resultado8 + "<br>"
  + resultado9 + "<br>"
 // + resultado10
);
*/
// OBJETO MATH---------------------------------------------------------
/*
let numero1 = Math.sqrt(25);//muestra la raiz cuadrada
let numero2 = Math.cbrt(18); // raiz cubica
let numero3 = Math.max(4,65,57,86,45,345,100)//elige el numero mayor
let numero4 = Math.min(4,65,57,86,45,345,100)
let numero5 = Math.random()*100; //elige un numero pseudoaleatorio entre 0 y 1
let numero6 = Math.round(numero5)//redonde al numero entero mas cercano
let numero7 = Math.floor(4.9)// (redondea para abajo)devuelve el mayor entero menor que o igual a un numero
let numero8 = Math.fround(7.445566778899)//al chile no entendi
let numero9 = Math.trunc(9.9)//elimina los decimales
//propiedades--
let numero10 = Math.PI;// numero pi
let numero11 = Math.SQRT1_2;//RAIZ CUADRADA DE 1/2
let numero12 = Math.SQRT2;// RAIZ DE 2
let numero13 = Math.E;//constatnte de buler la base de los logaritmos
let numero14 = Math.LN2;// LOGARITMO NATURAL DE 2 aprox 0.693
let numero15 = Math.LN10;// log nat de 10 aprox 2.303
let numero16 = Math.LOG2E;//log de E con base 2 aprox 1.443
let numero17 = Math.LOG10E;//log de E con base 10 aprox 0.434



document.write(
  numero1
   + "<br>" + numero2
   + "<br>" + numero3
   + "<br>" + numero4
   + "<br>" + numero5
   + "<br>" + numero6
   + "<br>" + numero7
   + "<br>" + numero8
   + "<br>" + numero9
  )
*/
//COFLA 3(calculadora 6:27:00)-----------------------------------------------------------
//
//

//AQUI YA SE EMPIEZA A MODIFICAR EL HTML EN BASE A FUNCIONES CON JAVASCRIPT
//DOM---------------------------------------------------------------------
//METODOS DE SELECCIONDE ELEMENTOS-----------------------------------------
/*
document.getElementById("parrafo1") // elemento por su id
document.getElementsByTagName("p")// elemento por su nombre de etiqueta
document.querySelector(".parrafo2")// el primer elemnto por su clase
document.querySelectorAll(".parrafo2")// toodos los lementos que coincidan con la clase

// definir, obtener y eliminar valores de atributos--------------------------------------

const rangoEtario = document.querySelector(".rangoEtario")

rangoEtario.setAttribute("type","text")// modificar o agregar atributos
//-valorDelAtributo = rangoEtario.getAttribute("type")// muestra lo que hay en el atributo deseado
rangoEtario.removeAttribute("type")// remueve el atributo deseado

//-document.write(valorDelAtributo)
*/
//ATRIBUTOS GLOBALES---------------------------------------------------------------
/*
const titulo = document.querySelector(".titulo");

//--titulo.setAttribute("contentEditable","true") // edita el contenido del
//titulo.setAttribute("dir","rtl")// muuestra la direccion rightToLeft o LeftToRight
//titulo.setAttribute("hidden", "")// oculta el contenido
//titulo.setAttribute("tabindex","0")// para poner focus en un elemento 
//titulo.setAttribute("title","jajaja xd")// le da titulo a los elementos
*/
//atributos de inputs---------------------------------------------------------
/*
const input = document.querySelector(".input-normal")
const input2 = document.querySelector(".input-normal2")


document.write("<br>" + input.className)// muestra lo que hay en el atributo
document.write("<br>" + input.value)// muestra el valor del input
input.accept = "image/jpg"// para que acepte el tipo de archivo deseado
input2.minLength = 4;// el minimo de caracteres que debe tener el input
input2.placeholder = "hola mami"//modifica el placeholder
input2.required = " "// es necesario completar 
*/
//style----------------------------------------------------------
/*
const titulo = document.querySelector(".titulo");

titulo.style.padding = "30px"
titulo.style.backgroundColor = "#48e"
*/
// clases classList y sus metodos------------------------------------------------------------
/*
const titulo = document.querySelector(".titulo");

titulo.classList.add("grande")// agrega una clase 
titulo.classList.remove("grande")// remueve una clase
let valor = titulo.classList.item(0)// muestra las clases en base a su posicion
//document.write(valor)
let valor2 = titulo.classList.contains("titulo")// devuelve true si el elmento contiene la clase o false si no
//console.log(valor2)
titulo.classList.toggle("grandisimo")// si tiene la clase la quita y si no la tiene la agrega
titulo.classList.replace("pequeño","chico")
let valor3 = titulo.textContent;// devuelve el puro texto del elemento sin el html (sin modificaciones)
//document.write(valor3);
*/
// para crear elementos en HTML-------------------------------------------------------
/*
const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for (i = 0; i < 20; i++){
  const item = document.createElement("LI");// crea un elemento nuevo el texto debe ir con mayusculas 
const textDeItem = document.createTextNode("elemeneto de una lista")
item.appendChild(textDeItem); //modifica los child 
contenedor.appendChild(item);
}

contenedor.appendChild(fragmento)
console.log(contenedor)
*/
// obtencion y modificacion de childs--------------------------------------------------
/*
const contenedor = document.querySelector(".contenedor");
const primerHijo = contenedor.firstElementChild;//muestra el primer elemento hijo
const ultimoHijo = contenedor.lastElementChild;//muestra el ultimo elemento hijo
const todosHijos = contenedor.childNodes;// muestra todos los nodos hijos

const parrafo_nuevo = document.createElement("P");
const h2_nuevo = document.createElement("H2");
parrafo_nuevo.innerHTML = "cambie el parrafo usando replaceChild y le agregue una clase con toggle"
h2_nuevo.innerHTML = "cambie el Titulo usando replaceChild";
 

parrafo_antiguo = document.querySelector(".p");
h2_antiguo = document.querySelector(".h2");
h4 = document.querySelector("h4");

contenedor.replaceChild(h2_nuevo,h2_antiguo);// se reemplaza el viejo por el nuevo (nuevo,viejo)
contenedor.replaceChild(parrafo_nuevo,parrafo_antiguo);

parrafo_nuevo.classList.toggle("nuevoParrafo");

contenedor.removeChild(h4);//elimina un elemento hijo
contenedor.
//console.log(todosHijos)
*/
// elementos siblings-----------------------------------------------------------
/*
const contenedor = document.querySelector(".contenedor");

const parrafo_nuevo = document.createElement("P");
const h2_nuevo = document.createElement("H2");

h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.nextElementSibling);// muestra el sibling siguiente
console.log(h2_antiguo.previousElementSibling);// muestra el sibling anterior

const div = document.querySelector(".h4");

console.log(div.closest(".contenedor"));// muestra el contenedor ascendente que contenga ese elemento
*/
//COFLA #4
/*
const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre, modelo, precio) {
  img = "<img src='llave.png' width='200'>";
  nombre = `<h2>${nombre}</h2>`;
  modelo = `<h3>${modelo}</h3>`;
  precio = `<p>Precio: <b>$${precio}</b></p>`;

  return [img, nombre, modelo, precio];
}

let fragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
  let modeloRandom = Math.round(Math.random() * 10000);
  let precioRandom = Math.round(Math.random() * 10 + 30);
  let llave = crearLlave(
    `llave: ${i}`,
    `modelo: ${modeloRandom}`,
    `${precioRandom}`
  );
  let div = document.createElement("DIV");
  div.tabIndex = i;
  div.classList.add(`item-${i}`, "flex-item");
  div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
  fragment.appendChild(div);
}

contenedor.appendChild(fragment);
*/
/*
function reverseString(str) {
  var x = str.length;
  var invStr = "";

  while (x >= 0) {
    invStr = invStr + str.charAt(x);
    x--;
  }

  return invStr;
}

let resultado = reverseString("hello");

document.write(resultado);
*/
/*
function findLongestWordLength(str) {
  let word = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > maxLength) {
      maxLength = word[i].length;
    }
  }
  return maxLength;
}

let res = findLongestWordLength("The quick brown fox jumped over the lazy dog");

document.write(res);
*/
/*
function confirmEnding(str, target) {
  let endsW = str.endsWith(target);
  return endsW;
}

let res = confirmEnding("Bastian", "n");

//

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("Diego", "o");
*/
/*
function truncateString(str, num) {
  let truncateString = str.substring(0, num).concat("...");

  return truncateString;
}

let res = truncateString("A-tisket a-tasket A green and yellow basket", 8);

document.write(res);
*/
/*
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("i'm a little tea pot");
*/
/*
function frankenSplice(arr1, arr2, n) {
  let arrSl = arr2.slice();
  arrSl.splice(n, 0, ...arr1);

  return arrSl;
}

let res = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(res);
*/
/*
function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

let res = getIndexToIns([30, 40, 60], 50);
console.log(res);
*/
/*
function chunkArrayInGroups(arr, size) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/
/*
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (i = min; i <= max; i++) sum += i;
  return sum;
}

let res = sumAll([1, 4]);
console.log(res);
*/
/*
function largestOfFour(arr) {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    var maxNmber = arr[i][0];
    for (let s = 1; s < arr[i].length; s++) {
      if (arr[i][s] > maxNmber) {
        maxNmber = arr[i][s];
      }
    }
    result[i] = maxNmber;
  }

  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

let res = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(res);
*/
/*
function gradingStudents(grades) {
  if (grades > 0 && grades <= 100) {
    if (grades > 40) {
      grades = Math.ceil(grades / 5) * 5;
    } else {
      return grades;
    }
  }
}
let res = gradingStudents(67);
console.log(res);
*/
/*
function gradingStudents(grades) {
  let roundGrade = Math.ceil(grades / 5) * 5;
  let finalGrade = roundGrade - grades;

  if (grades > 0 && grades <= 100 && grades >= 38 && finalGrade < 3) {
    return roundGrade;
  } else {
    return grades;
  }
}
let res1 = gradingStudents(73);
let res2 = gradingStudents(67);
let res3 = gradingStudents(38);
let res4 = gradingStudents(33);

console.log(res1, res2, res3, res4);
*/
