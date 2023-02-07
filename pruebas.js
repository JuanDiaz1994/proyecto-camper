// declaracion de variables

 /* let nombre = "andres";
 let apellido = "ruiz";

 console.log("nombre", typeof(nombre)); */ //typeof es para averiguar que tipo es el dato NOMBRE, es un string

 /*let saludo = "hola";
 let nombre = "andres";

 let mensaje = `${saludo} ${nombre}, todo bien?`; //backticks `` junto con ${}
 console.log(mensaje); */

 /* let entrada = prompt("Ingrese su nombre");
 let salida = "Hola" + " " + entrada;
 alert(salida);

--------------------------------------------                   -----------------------------------------------
                                                 //CICLOS                                        

  for(let turno = 1; turno <= 7; turno++){
     let nombre = prompt("ingrese su nombre para asignar un turno")
     let mensaje = `turno N°${turno} Nombre: ${nombre}`;
 
     alert(mensaje)
 }
 
 alert("turnos agotados")

---------------------------------------------

 El break "termina" el bucle, mientras que el continue "salta" de iteracion

 bucle de numeros 


 for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log("saltamos el paso: ", i);
        continue;
    }

    console.log(i);
 }

  for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log("termina en el paso: ", i);
        break;
    }

    console.log(i);
 }

 --------------------------------------------
bucle por condiciones (WHILE)

let usuario = prompt("ingrese el usuario");

while(usuario != "andres"){ // != significa "es distinto"
    alert("usuario incorrecto");
    usuario = prompt("ingrese su usuario");
}

alert("bienvenido Andres")


------------------------------------------------

estructura del SWITCH
///         === significa que es igual
switch(valor){
    case valor1:
        codigo a ejecutar en caso de que el valor === valor1 

}
BUSCA EN EL LISTADO HASTA ENCONTRAR LA CORRECTA Y LA MUESTRA EN CONSOLA
let moneda = "usd";

switch(moneda){
    case "cop":
        console.log("moneda de colombia");
        break;

    case "ars":
        console.log("moneda de argentina");
        break;

    case "usd":
        console.log("moneda de estados unidos");
        break;
}

----------------------------------------------------------------------------------------------
                                            FUNCIONES
una funcion es un conjunto de instrucciones en bloque para resolver un problema en particular

Estructura de la funcion

function nombre(){
    codigo de la funcion
}



function saludar(){
    let nombre = prompt("ingrese su nombre");
    let mensaje = `hola ${nombre}`;
    alert(mensaje);
}

saludar();

function sumar(num1, num2){
    let resultado = num1 + num2;
    let mensaje =`la suma es: ${resultado}`;
    alert(mensaje);
}

let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));

sumar(numero1, numero2);


---------------     CALCULADORA     -------------------
function calculadora(numero1, numero2, operacion){
    switch(operacion){
        case "+":
            return numero1 + numero2;
            break;

        case "-":
            return numero1 - numero2;
            break;
        
        case "/":
            return numero1 / numero2;
            break; 
            
        case "*":
            return numero1 * numero2;
            break;

        default:
            return "operacion no disponible";
            break;
    }
}

let numero1 = parseInt(prompt("ingrese el numero1"));
let numero2 = parseInt(prompt("ingrese el numero2"));
let operacion = prompt("ingrese la operacion deseada");

let resultado = calculadora(numero1, numero2, operacion);
let mensaje = `El resultado de la operacion es ${resultado}`;
alert(mensaje);


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                = resta(suma(500, iva(500)), 50);
                = resta(suma(500, 500 * 0.21), 50);
                = resta(500 + 500 * 0.21, 50);
                = (500 + 500 * 0.21) - 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);
----------------------------------------------------------------------------------------------
                                    OBJETOS   
                                    
            estructura de los objetos
    {clase1: valor1, clase2: valor2,, clase3: valor3, etc}    


const persona1 = {
    nombre: "pepito", 
    edad: 45, 
    direccion: "AV"
};

console.log(persona1.edad);


***********************************************************************
                            Constructores

function Persona(nombrePersona, edadPersona, direccionPersona){
    this.nombre = nombrePersona;
    this.edad = edadPersona;
    this.direccion = direccionPersona;
}

const persona1 = new Persona("pepito", 45, "AV")
console.log(persona1);

function Persona(info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
}

// COMO FUNCIONA MERCADO LIBRE
crea un objeto mapa y luego el usuario lo completa para crear su publicacion

    //      MAPA
function Producto(nombre, img, precio){
    this.nombre = nombre;
    this.img = img;
    this.precio = precio;
}
//                               this.nombre      this.img   this.precio  
const producto1 = new Producto("yamaha xt600r", "img.src moto", 24000);
const producto2 = new Producto("Hyundai Genesis", "img.src genesis", 18000);
const producto3 = new Producto("Volkswagen Scirocco", "img.src scirocco", 22000);

function Persona(nombrePersona, edadPersona, direccionPersona){
    this.nombre = nombrePersona;
    this.edad = edadPersona;
    this.direccion = direccionPersona;
    this.hablar = function () {return `hola soy ${this.nombrePersona}`}
}

const persona1 = new Persona("pepito", 45, "AV")

class Persona{
    constructor(nombre, edad, direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    hablar(){
        return `hola soy ${this.nombre}`;
    }
}

const persona1 = new Persona("homero", 39, "av. siempreviva 742")
console.log(persona1);
persona1.hablar();
console.log(persona1.hablar);

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    vender() {
        this.cantidad -= 1;
    }
}

const producto1 = new Producto(prompt("ingrese nombre de preducto"), prompt("ingrese valor"), parseInt(prompt("ingrese cantidad entrante")));
console.log(producto1);
producto1.vender()
console.log(producto1)

-------------------------------------------------------------------------------------------------
                        ARRAYS                      
es un arreglo de datos para organizar una posicion



const arreglo1 = []; //arreglo vacio cuando los corchetes no tienen nada dentro
const numeros = [1,4,6,8,120]; //el 1 seria posicion 0, el 4 es posicion 1 ,etc.
const nombres = ["camila", "andres", "juan"];
const valores = [false,true];
const variados = ["oscar", true, 4]

const nombres = ["camila", "andres", "juan", "marcos", "oriana"];

for(let i = 0; i < 3; i++){ //va a mostrar nombres hasta la opcion 2 (es decir los primeros 3)
    console.log(nombres[i]);
}


const nombres = ["camila", "andres", "juan", "marcos", "oriana"]; 
for(let i = 0; i < nombres.length; i++){  // con length dinamicamente agrega todos
    console.log(nombres[i]);
}


const nombres = ["camila", "andres", "juan", "marcos", "oriana", "mabel"]; 
nombres.push("adrian"); // agrega el valor al final
nombres.unshift("alba") // agrega el valor al principio
nombres.pop(); // quitar elementos del final
nombres.shift(); //quitar elementos del principio
nombres.splice(1, 2) // para eliminar 1 o varios elementos de un array
console.log(nombres)
console.log(nombres.join("-------------")) //aplica todo lo que escribas dentro del parentesis entre los datos



const nombres = ["camila", "andres", "juan", "marcos", "oriana", "mabel"]; 
const animales = ["toby", "moa", "zeus"]
const varios = nombres.concat(animales) // .concat junta los dos arreglos
console.log(varios);


const nombres = ["camila", "andres", "juan", "marcos", "oriana", "mabel"]; 
const fragmento = nombres.slice(1, 5) // crea una copia de un fragmento dado borrando los seleccionados
console.log(fragmento)

const nombres = ["camila", "andres", "juan", "marcos", "oriana", "mabel"]; 
console.log(nombres.indexOf("juan")); // te dice la posicion del valor seleccionado

const nombres = ["camila", "andres", "juan", "marcos", "oriana", "mabel"]; 
console.log(nombres.includes("juan")); // Incluye a juan en el arreglo? sirve para buscar un dato

const nombres = ["camila", "andres", "juan", "marcos", "oriana", "mabel"]; 
nombres.reverse() // da vuelta los datos del arreglo
console.log(nombres);

----------------------------- 
    ARREGLOS CON OBJETOS


const productos = [
{id : 1, nombre: "pantalon", precio: 700},//id es un dato extra nomas
{id : 2, nombre: "remera", precio: 1000},
{id : 3, nombre: "calzon", precio: 350},
{id : 4, nombre: "camisa", precio: 80}
]

for(const pepito of productos){
console.log(pepito.precio);
console.log(pepito.nombre);
}

----------------------------------- 
FUNCIONES DE ORDEN SUPERIOR


function operaciones(operacion){
    if(operacion === "sumar"){
        return(x , y) => x + y;
    }
    else if(operacion === "restar"){
        return(x , y) => x - y;
    }
    else if(operacion === "multiplicar"){
        return(x , y) => x * y;
    }
    else{
        return(x , y) => x / y;
    }
}

let suma = operaciones("sumar"); // return(x , y) => x + y;
console.log(suma(10, 5));

let resta = operaciones("restar"); // return(x , y) => x - y;
console.log(resta(8, 5));



const numeros = [1,2,3,4,5];

numeros.forEach(items => {  // sirve para recorrer los arreglos []
    console.log(items);
});



        // DOCUMENT.BODY ---> EN INSPECCIONAR MUESTRA TODO LO QUE HAY EN EL BODY
//  getElementById
let div = document.getElementById("aplicacion");   //selecciona la etiqueta "aplicacion"

console.log(div.innerHTML);  // muestra todo el CODIGO del DIV seleccionado
console.log(div.innerText);  // muestra el TEXTO del DIV seleccionado



let parrafo = document.getElementById("parrafo")
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);



        // getElementByClassName 
        // selecciona por CLASE

let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML); //selecciona el PRIMER dato de la clase Perritos
console.log(perritos[1].innerHTML); //selecciona el SEGUNDO dato de la clase Perritos
console.log(perritos[2].innerHTML); //selecciona el TERCER dato de la clase Perritos
---------------------
let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){             // muestra el html que hay dentro de la clase perritos tambien en consola
    console.log(perrito.innerHTML);
}
------------------------------
*/
/*

        // getElementByTagName
        // selecciona por TAG

let divs = document.getElementsByTagName("div")
//console.log(divs); // muestra todos los DIV, el padre div y los hijos parte1 y parte2
console.log(divs[0].innerHTML); // muestra el codigo div PADRE
console.log(divs[1].innerHTML); // muestra el codigo dentro del div parte1, como no tiene solo muestra el texto parte1
console.log(divs[2].innerHTML); // muestra el codigo dentro del div parte2, como no tiene solo muestra el texto parte2


let saludo = document.getElementById("saludo"); //selecciono la ID saludo del html
saludo.innerHTML = "tu vieja"  // modificar el texto del HTML desde JS


let saludo = document.getElementById("saludo");
let seccion =prompt("ingrese la seccion a visitar");

if(seccion === "carrito"){
    saludo.innerHTML = "bienvenido a mi carrito";
}
else if(seccion === "favoritos"){
    saludo.innerHTML = "bienvenido a los favoritos";
}
else
    saludo.innerHTML = "bienvenido a nuestra pagina"*/
