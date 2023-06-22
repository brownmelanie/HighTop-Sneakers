//cargo los productos en .json y los muestro en un div
const traerDatos = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();
  let productos = data; //mantiene una copia original de todos los productos para que el carrito tambien funcione despues de usar el buscador

  function mostrarProductos(productos) {
    shop.innerHTML = ""; //limpia los productos actuales

    if (productos.length === 0) {
      //muestra un mensaje si no se encontraron resultados
      const mensaje = document.createElement("p");
      mensaje.textContent = "No se encontraron productos.";
      shop.appendChild(mensaje);
    } else {
      //muestra los productos encontrados
      productos.forEach((publicacion) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="card">
            <img src="${publicacion.img}" alt="${publicacion.nombre}">
            <h2 class="titulo">${publicacion.nombre}</h2>
            <div class="precioContainer">
              <b>$</b>
              <b class="precio">${publicacion.precio}</b>
            </div>
            <button class="comprar">Comprar</button>
          </div>
        `;
        shop.append(div);
      });
    };

    //vincula la funcionalidad de agregar al carrito a los nuevos button de comprar (a los que se generan cuando se usa el buscador)
    const comprar = document.querySelectorAll(".comprar");
    comprar.forEach((button) => {
      button.addEventListener("click", agregarCarrito);
    });
  };

  //funcion que filtra los productos que coinciden con lo que se busco
  function buscarProductos() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const resultados = data.filter((publicacion) =>
      publicacion.nombre.toLowerCase().includes(searchTerm)
    );
    mostrarProductos(resultados);
  };

  const shop = document.getElementById("shop");
  const searchInput = document.querySelector(".search");
  const btnBuscar = document.getElementById("btnBuscar");
  mostrarProductos(productos);

  btnBuscar.addEventListener("click", (event) => {
    event.preventDefault(); //evita la recarga de la página, sin esto buscaba los productos pero se borraban a los milisegundos
    buscarProductos();
  });
  searchInput.addEventListener("input", buscarProductos);


  //creo el carrito como un array vacío para agregar los productos seleccionados
  let carrito = [];
  let total = 0;

  function agregarCarrito(e) {
    const button = e.target;
    const item = button.closest(".card");
    const titulo = item.querySelector(".titulo").textContent;
    const precio = parseFloat(item.querySelector(".precio").textContent);
    const nuevoItem = {
      titulo: titulo,
      precio: precio,
    };

    
    //buscar el título del producto en el archivo JSON para poder mostrarlo en el alerta de SweetAlert, sino sale como object
    const productoEncontrado = data.find(
      (publicacion) => publicacion.nombre === titulo
    );
    const tituloProducto = productoEncontrado
      ? productoEncontrado.nombre
      : "Producto Desconocido";

    carrito.push(nuevoItem);
    total += precio;
    console.log("Se agregó al carrito:", nuevoItem);
    console.log("Carrito actual:", carrito, "Total: $" + total);

    Swal.fire({
      icon: "success",
      title: "Agregado al carrito",
      text: `Producto: ${tituloProducto}`,
      footer: `Total del carrito: $${total}`,
    });
  };
};

traerDatos();


