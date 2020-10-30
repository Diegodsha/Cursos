//--------------------------------------------

//function favoriteAnimal(animal)
//    console.log(animal + " is my favorite animal")
//}

//favoriteAnimal("crocodile")

 //----------------------------------------

//let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

//for(let i = 1; i <= answer; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//        console.log("Fizz")
//    } else if (i % 5 === 0) {
//            console.log("Buzz")
//        } else if (i % 3 === 0){
//            console.log("FizzBuzz")
//        }
//     else{
//    console.log(i)
//    }
//}
//document.write(answer)
//PROBLEMA#1 COFLA condicionales if, esle if------------------------------------------------------

/*dineroCofla = prompt("Cofla, cuanto dinero tienes?")
dineroRoberto = prompt("Roberto, cuanto dinero tienes?")
dineroPedro = prompt("Pedro, cuanto dinero tienes?")

dineroCofla = parseInt(dineroCofla) //parseInt convierte a entero para poder realizar operaciones aritmeticas

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprate helado de agua");
    alert("y te sobra " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("comprate helado de crema");
    alert("y te sobra" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("comprate helado de heladix");
    alert("y te sobra" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("comprate helado de heladovich");
    alert("y te sobra" + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("comprate helado de helardo");
    alert("y te sobra" + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
    alert("comprate helado con confites o el pote de 1/4kg");
    alert("y te sobra" + (dineroCofla - 2.9));
}
else {
    alert("lo siento Colfa pobre de mierda, no te alcanza para nada")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("comprate helado de agua")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("comprate helado de crema")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("comprate helado de heladix")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("comprate helado de heladovich")
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("comprate helado de helardo")
}
else if (dineroRoberto >= 2.9) {
    alert("comprate helado con confites o el pote de 1/4kg")
}
else {
    alert("lo siento Roberto pobre de mierda, no te alcanza para nada")
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("comprate helado de agua")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("comprate helado de crema")
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("comprate helado de heladix")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("comprate helado de heladovich")
}
else if(dineroPedro >= 1.8 && dineroPedro <b 2.9) {
    alert("comprate helado de helardo")
}
else if (dineroPedro >= 2.9) {
    alert("comprate helado con confites o el pote de 1/4kg")
}
else {
    alert("lo siento Pedro pobre de mierda, no te alcanza para nada")
}
*/
// ARRAYS--------------

/*let frutas = ["banana", "manzana", "pera",5,8,"pedro"];

document.write(frutas[5])
*/

// array asosiativo
/*
let pc = {
    nombre: "Diego Acer",
    procesador: " AMD A10",
    ram: "12GB",
    memoria: "1TB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let memoria = pc["memoria"];

frase = `el nombre de mi Pc es:<b> ${nombre}</b> <br>
         el procesador es:<b> ${procesador}</b> <br>
         la memoria ram es:<b> ${ram}</b> <br>
         el espacio en disco es de: <b>${memoria}</b>`;

document.write(frase);
*/
//BUCLES E ITERACION------------------------------------
//while......... repite infinitamente hasta que no se cumpla la condición
/* 
let numero = 0;

 while (numero < 6) {
     numero++;

 document.write(numero + "<br>" )
 }
 */
// do while.........la diferencia es que do primero ejecuta la operacion y luego while pregunta si se cumple
/*
let numero = 0;

do { 
     numero++;

 document.write(numero + "<br>" )
 }

 while (numero < 6)
 */
// break....rompe la sentencia de "while"
/*
let numero = 0;

while (numero < 100){ 
     numero++;
     document.write(numero + "<br>" );
     if (numero == 10){
         break;
     }

 }
*/
// for---------------------------------
//<<<(variable "i" [de "increment"]delacarada por dentro del for)
/*
for (let i = 0; i < 7; i++) {

    document.write(i + "<br>")
}
*/
// <<<variable declarada fuera del for
/*
let i = 6;

for (i; i >= 0; i--){
    document.write(i + "<br>")
}
*/
//<<<continue.... se salta el valor que desees que valga
/*
let i = 6;

for (i; i >= 0; i--){
    if (i == 4){
        continue;
    }
    document.write(i + "<br>")
}
*/
//<<< for in.... muestra la posicon de los elementos de un array
/*
let animales = ["gato","perro","tiranosaurio rex"];

for(animal in animales){
    document.write(animal + "<br>")
}
document.write("<br>")
//for of muestra los elementos del array sin su posicion
for(animal of animales){
    document.write(animal + "<br>")
}
*/
// label...es una etiqueta para los for para poder manipular los bucles internos
/*
array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1,"josefina"];

forRancio:
for (let array in array2) {
    if (array == 2){
        for (let array of array1) {
            document.write(array );
            break
        }

    }else {
        document.write(array)
    }
}
*/
// FUNCIONES, return, parametros-------------------------------
/*
function saludar (nombre) {
    
    let saludo = `Hola ${nombre} ¿Como estás?`;
    document.write(saludo);
    
}
saludar("Diego");
*/
//return
/*
function sumar (numero1, numero2) {
    
    let res = numero1 + numero2;
    
    return res
    
}
let resultado = sumar(10,15);
alert (resultado)
*/
// funcion flecha....
/*
const saludar = (nombre)=>{
    document.write (`hola ${nombre}, como estas?`)
}
saludar ("Diego")
*/
//COFLA # 2  que pasen solo los mayores de edad y la primer persona despues de las 2 am no paga los demas si-----------------------------------------------
/*
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
        if (time > 2 && time < 7 && free == false){
            alert("puedes pasar gratis, eres la primer persona despues de las 2AM");
            free = true
        }else{
            alert(`son las ${time}:00Hs y puedes pasar, pero tienes que pagar`)
        }
    }else {
        alert("mira papu, eres menor de edad por ende no as a pasar")
    }

}

validarCliente(8);
validarCliente(10);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
validarCliente(6);
validarCliente(7);
validarCliente(8);
validarCliente(8);
*/
// lista de asistencia no funcionó
/*
let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];

}

const tomarAsistencia = (nombre,p)=> {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; 1 < 30; i++){
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);

    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ____Asistencias: ${alumnosTotales[alumno][1]}<br>
    ____Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "Reprobado por faltas <br>";
    }else {
        resultado+= "<br><br>"
    }

document.write(resultado)
}
*/
// OBJETOS------------------------------------
/*
class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = especie = `Soy ${this.especie}, tengo ${this.edad} años, 
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>") // esto es un metodo
    }
}

const perro = new animal("perro",5,"marron");
const gato= new animal("gato",2,"negro");
const pajaro = new animal("pajaro",1,"verde")



//document.write(perro.info + "<br>")
//document.write(gato.info + "<br>")
//document.write(pajaro.info + "<br>")

//es mas facil crear un objeto usando metodos

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
*/
//herencia , polimorfismo, metodos estaticos, getter y setter------------
// polimorfismo-----------------------------------------------------------
/*
class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = especie = `Soy ${this.especie}, tengo ${this.edad} años, 
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>") // esto es un metodo
    }
    ladrar(){
    if (this.especie == "perro"){
        document.write ("Guau!!! <br>"); // polimorfismo es que los metodos hagan que los objetos se comporten diferente en base a sus propiedades
    } else {
        document.write("no puede ladrar ya que es un " + this.especie + "<br>");
    }
  }
}

const perro = new animal("perro",5,"marron");
const gato= new animal("gato",2,"negro");
const pajaro = new animal("pajaro",1,"verde")

perro.ladrar();
gato.ladrar();
pajaro.verInfo();

*/
// herencia---------------------------------------------------
/*
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = especie = `Soy ${this.especie}, tengo ${this.edad} años, 
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>") // esto es un metodo
    }
    

}

class Perro extends Animal {  // la nueva clase perro hereda las propiedades de la calse animal
    constructor(especie,edad,color, raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert("Guau")
        document.write(this.info)
    }
}

const perro = new Perro("perro",5,"marron","doberman");
const gato= new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde")

perro.ladrar();
gato.verInfo();
pajaro.verInfo();
*/
//metodos estaticos------------------------------------------
/*
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = especie = `Soy ${this.especie}, tengo ${this.edad} años, 
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>") // esto es un metodo
    }
    

}

class Perro extends Animal {  // la nueva clase perro hereda las propiedades de la calse animal
    constructor(especie,edad,color, raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    static ladrar(){  //el metodo sttatic permite ejecutar el metodo ladrar sin crear el objeto perro
        alert("Guau");
    }

}

const gato= new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde")

Perro.ladrar();
gato.verInfo();
pajaro.verInfo();
*/
// get y set --------------------------------------
/*
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = especie = `Soy ${this.especie}, tengo ${this.edad} años, 
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>") // esto es un metodo
    }
    

}

class Perro extends Animal {  // la nueva clase "Perro" hereda las propiedades de la calse animal
    constructor(especie,edad,color, raza){
        super(especie,edad,color);
        this.raza = null;
    }
    set setRaza(newName){ // set agrega o modifica propiedades 
        this.raza = newName;
    }
    get getRaza(){   // get obtiene el valor solicitado
        return this.raza;
    }
}

const perro = new Perro("perro",5,"marron","doberman"); 
const gato= new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde")

perro.setRaza = "French";
document.write(perro.getRaza);
*/
//COFLA #3---------------------------------------------------------------------------
/*
class Celular {
    constructor(color, peso, resolucionDePantalla, camara, RAM) {
        this.color = color;
        this.peso = peso;
        this.reso = resolucionDePantalla;
        this.camara = camara;
        this.RAM = RAM;
        this.info = `éste modelo es color ${color}, pesa${peso}
        la resolucion de su pantalla es ${resolucionDePantalla}, su cámara principal tiene ${camara}
        y su memoria RAM es de ${RAM}<br>`;
        this.encendido = false;
    }
    verInfo1(){
        document.write(this.info + "<br>");
    }
    tomarFoto(){
        alert("Tomaste una foto")
    }
    prender(){
        if(this.encendido == false ){
            alert("celular prendido");
            this.encendido = true;
        }else {
        alert("Tu celular está apagado")
        }
    }
    reiniciar(){
        alert("Reiniciando equipo")
    }
    grabar(){
        alert("comenzando a grabar video")
    }
}

class celAltaGama extends Celular{
    constructor(color, peso, resolucionDePantalla, camara, RAM,grabarCamaraLenta,camaraExtra,reconFacial){
    super(color, peso, resolucionDePantalla, camara, RAM);
    this.grabarCamaraLenta = grabarCamaraLenta;
    this.camaraExtra = camaraExtra;
    this.reconFacial = reconFacial;
    
  }
  grabarLento(){
      alert("grabando en camra lenta")
  }
  camaraSecundaria(){
    alert("estás usando la camara secundaria")
  }
  reconocimiento(){
    alert("inciando reconocimiento facial")
  }
  infoALtaGama(){
      document.write(this.info + `Resolucion de camara extra: ${this.camaraExtra}`)
  }
}

//const motorola = new Celular("negro","180gr","1200x900px", "12Mpx","4gb");
//const samsung = new Celular("gris oxford","120gr","1800x1200px","20Mpx","6gb");
//const huawei = new Celular("blanco","100gr","1800x1300","40Mpx","6gb");

//motorola.reiniciar();
//samsung.grabar();
//huawei.prender();
//huawei.prender();


const motorolaPremium = new celAltaGama("negro","180gr","1200x900px", "4k","6gb","1200fps","full hd",);
const samsungPremium = new celAltaGama("gris oxford","120gr","1800x1200px","4k","8gb","1100fps","hd");

motorolaPremium.infoALtaGama();
samsungPremium.infoALtaGama();
*/