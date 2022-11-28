alert("Bienvenido/a!")

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let remera = new Producto ("Remera", 1500, 5)
let gorra = new Producto ("Gorra", 800, 10)
let Gafas = new Producto ("Gafas", 600, 20)

alert("estos son nuestros productos: Remeras, Gorras y Gafas")

let precioTotal = 0
function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}
function calculoStock(cantidad,stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}
let unidad = prompt("seleccione cual de los 3 productos desea comprar");

while (unidad == "remera","gorra","gafas"){

    if (unidad == "remera"){
        let cantidadProducto_Remera = prompt("ingrese que cantidad de " + remera.nombre + " desea comprar: ")
        calculoStock(cantidadProducto_Remera, remera.stock, remera.precio)
        remera.restarStock(cantidadProducto_Remera)
    break
        }
    else if(unidad == "gorra"){
        let cantidadProducto_gorra = prompt("ingrese que cantidad de " + gorra.nombre + " desea comprar: ")
        calculoStock(cantidadProducto_gorra, gorra.stock, gorra.precio)
        gorra.restarStock(cantidadProducto_gorra)
    break
    }
    else if(unidad == "gafas"){
        let cantidadProducto_gafas = prompt("ingrese que cantidad de " + Gafas.nombre + " desea comprar: ")
        calculoStock(cantidadProducto_gafas, Gafas.stock, Gafas.precio)
        Gafas.restarStock(cantidadProducto_gafas)
    break
    }
    else{
        alert("no tenemos ese producto en stock")
        }
    }   
if (precioTotal != 0){
    alert("el precio total es: " + precioTotal)
}

