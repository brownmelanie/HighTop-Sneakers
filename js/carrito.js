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


let cantidadShop = parseInt(prompt(`Ingrese la cantidad de productos seleccionados`))
let contadorShop = 1;
let totalShop = 0;

while (isNaN(cantidadShop)) {   //correccion anterior: se me pidio corroborar que lo ingresado sea un numero
    cantidadShop = parseInt(prompt(`Por favor, ingrese un número válido para la cantidad de productos seleccionados`));
  }
while (contadorShop<=cantidadShop){
    precio = parseInt(prompt("Ingrese el precio del producto"));
    totalShop = totalShop + precio;
    contadorShop++;
}
document.write(`Los productos selecionados fueron ${cantidadShop} y el total es $${totalShop}`);