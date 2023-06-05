//cargo los productos
const productos = [
  {nombre:"Adidas Forum 84 Low", precio:58999, imagen:"../img/forumLow.jpg"},
  {nombre:"Adidas Ultraboost Light", precio:89999, imagen:"../img/ultraboost.jpg"},
  {nombre:"Adidas Rivarly Low", precio:55999, imagen:"../img/rivarly.jpg"},
  {nombre:"Nike Dunk High", precio:59999, imagen:"../img/dunk.jpg"},
  {nombre:"Nike Air Presto", precio:69999, imagen:"../img/presto.jpg"},
  {nombre:"Nike Metcon 8", precio:63999, imagen:"../img/metcon.jpg"},
  {nombre:"New Balance 550", precio:55149, imagen:"../img/550.jpg"},
  {nombre:"New Balance X-Racer", precio:48449, imagen:"../img/racer.jpg"},
  {nombre:"New Balance 574", precio:37349, imagen: "../img/574.jpg"},
];

//muestro los productos en el HTML
const sectionContainer = document.querySelector("section.shop");
productos.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <div class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3 class="titulo">${producto.nombre}</h3>
      <div class="precioContainer">
          <b>$</b>
          <b class="precio">${producto.precio}</b>
      </div>
      <button id="boton1">Comprar</button>
  </div>
  `
  sectionContainer.appendChild(div);
});

//carrito
const comprar = document.querySelectorAll("button");
let carrito = [];

comprar.forEach(button => {
  button.addEventListener("click", agregarCarrito);
});

function agregarCarrito(e) {
  const button = e.target;
  const item = button.closest('.card');
  const titulo = item.querySelector('.titulo').textContent;
  const precio = parseFloat(item.querySelector('.precio').textContent);
  const nuevoItem = {
    titulo: titulo,
    precio: precio,
    cantidad: 1,
  };
  agregarItem(nuevoItem);
};

function agregarItem(nuevoItem) {
  carrito.push(nuevoItem);
  renderCarrito();
};

function renderCarrito() {
  console.log(carrito);
  let total = carrito.reduce((acum, item) => acum + item.precio, 0);
  console.log("Total: $" + total); //MUESTRA EL TOTAL DEL CARRITO EN CONSOLA, no logre ponerlo como document.write para que lo muestre en pantalla
};