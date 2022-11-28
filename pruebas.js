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
*/

