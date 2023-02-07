const carritoIcono = document.querySelector('.carrito__icono');
const carritoDesplegado = document.querySelector('.carrito-desplegable');


carritoIcono.addEventListener('click', ()=>{
    carritoDesplegado.classList.toggle('mostrar');
})


const obtenerProductos = async () => {
    const respuesta = await fetch("../productos.json");
    const productos = await respuesta.json();
    return productos;
  };
  
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];




const agregarAlCarrito = async (id) => {
    const productos = await obtenerProductos();
    const producto = productos.find((item) => item.id === id);
    carrito.push(producto);
    const divProducto = document.createElement("div");
    divProducto.classList.add("carrito-desplegable__detalles-container");
    divProducto.innerHTML = `
        <img class ="carrito-desplegable__imagen" src="${producto.URL}" alt="${producto.nombre}">
        <p class ="carrito-desplegable__producto">${producto.nombre}</p>
        <p class ="carrito-desplegable__precio">Precio: $${producto.precio}</p>
    `;
    document.querySelector(".carrito-desplegable__lista").append(divProducto);
    saveLocal();
};





carrito.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("carrito-desplegable__detalles-container");
    divProducto.innerHTML = `
        <img class ="carrito-desplegable__imagen" src="${producto.URL}" alt="${producto.nombre}">
        <p class ="carrito-desplegable__producto">${producto.nombre}</p>
        <p class ="carrito-desplegable__precio">Precio: $${producto.precio}</p>
    `;
    document.querySelector(".carrito-desplegable__lista").append(divProducto);
});

obtenerProductos().then(productos => {
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
  });
  


const eliminarTodoDelCarrito = () => {
    const carritodesplegable__lista = document.querySelector(".carrito-desplegable__lista");
    carritodesplegable__lista.innerHTML = ""
    carrito.length = 0;
}


const deleteAllButton = document.getElementById("deleteAll");
deleteAllButton.addEventListener("click", eliminarTodoDelCarrito);

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};