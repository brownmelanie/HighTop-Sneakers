const productos = [
    {nombre:"Adidas Forum 84 Low", precio:58999},
    {nombre:"Adidas Ultraboost Light", precio:89999},
    {nombre:"Adidas Rivarly Low", precio:55999},
    {nombre:"Nike Dunk High", precio:59999},
    {nombre:"Nike Air Presto", precio:69999},
    {nombre:"Nike Metcon 8", precio:63999},
    {nombre:"New Balance 550", precio:55149},
    {nombre:"New Balance X-Racer", precio:48449},
    {nombre:"New Balance 574", precio:37349},
];

let mensaje = "Los productos disponibles son:\n\n";
productos.forEach(producto =>{
  mensaje = mensaje + `${producto.nombre}
  $${producto.precio}\n`;
});
alert(mensaje);

let precioMinimo = parseInt(prompt("Ingrese el precio minimo del producto"));
let precioMaximo = parseInt(prompt("Ingrese el precio maximo del producto"));

const encontrados = productos.filter(item => item.precio>precioMinimo && item.precio<precioMaximo);

if (encontrados.length === 0) {
    alert("No se encontraron productos en ese rango de precios.");
  }else {
    mensaje = "Los productos que se encuentran en ese rango de precios son:\n\n";
    encontrados.forEach(item =>{
      mensaje = mensaje + 
      `Nombre: ${item.nombre}
      Precio: ${item.precio}\n`;
    });
    alert(mensaje);
}