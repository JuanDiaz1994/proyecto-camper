//Mostrar carrito de compras desplegable
const carritoIcono = document.querySelector('.carrito__icono');
const carritoDesplegado = document.querySelector('.carrito-desplegable');

carritoIcono.addEventListener('click', ()=>{
    carritoDesplegado.classList.toggle('mostrar');
})

const productos = [
    { id: 1, URL:"../imagenes/Remera.png", nombre: "Let's Roll!", precio: 1000 },
    { id: 2, URL:"../imagenes/Gorra.png",nombre: "Gorra Patagonia", precio: 700 },
    { id: 3, URL:"../imagenes/Termo.png",nombre: "Termo Stanley", precio: 2000 },
    { id: 4, URL:"../imagenes/Camisa.png",nombre: "Camisa Leñador", precio: 1500 },
  ];
  
/*var jsonProductos = JSON.stringify(productos)
console.log(jsonProductos)*/

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



const agregarAlCarrito = (id) => {
  const producto = productos.find((item) => item.id === id);
  carrito.push(producto);
  saveLocal()
  const divProducto = document.createElement("div");
  divProducto.classList.add("carrito-desplegable__detalles-container");
  divProducto.innerHTML = `
    <img class ="carrito-desplegable__imagen" src="${producto.URL}" alt="${producto.nombre}">
    <p class ="carrito-desplegable__producto">${producto.nombre}</p>
    <p class ="carrito-desplegable__precio">Precio: $${producto.precio}</p>
  `;
  document.querySelector(".carrito-desplegable__lista").append(divProducto);
};

productos.forEach((item) => {
    let section = document.createElement("section");
    section.innerHTML = `
      <div class="tienda">
        <h2 class = "noShow">ID: ${item.id}</h2>
        <img  class="tienda__remera1"src=" ${item.URL}"> 
        <p class="tienda__remeraTitulo">${item.nombre}</p>
        <b class="tienda__precio">$${item.precio}</b>
        <button class="tienda__agregar" id="boton${item.id}">Agregar</button>
      </div>
    `;
  
    document.body.append(section);
    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregarAlCarrito(item.id));


});
    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    };

    const eliminarTodoDelCarrito = () => {
        const carritodesplegable__lista = document.querySelector(".carrito-desplegable__lista");
        carritodesplegable__lista.innerHTML = ""
        carrito.length = 0;
    }

    
    const deleteAllButton = document.getElementById("deleteAll");
    deleteAllButton.addEventListener("click", eliminarTodoDelCarrito);



  
  
  

/*
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

let remera = new Producto ("Remera", 1000, 5)
let gorra = new Producto ("Gorra", 800, 10)
let Gafas = new Producto ("Gafas", 600, 20)


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

while (unidad == "remeras","gorras","gafas"){

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
    break
        }
    }   
if (precioTotal != 0){
    alert("el precio total es: " + precioTotal)
}
*/