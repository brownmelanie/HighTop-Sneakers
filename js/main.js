//USUARIO E INICIO DE SESION
alert("Cree su usuario");
let usuarioRegistrado = prompt("Ingrese su nombre de usuario");
let contraseñaRegistrada = prompt("Ingrese su contraseña");
let intentos = 3;

alert("Inicie sesión");
for (let contador = 1; contador <= intentos; contador++) {
    let usuarioIngresado = prompt("Ingrese su usuario");
    let contraseñaIngresada = prompt("Ingrese su contraseña");

    if (usuarioRegistrado === usuarioIngresado && contraseñaRegistrada === contraseñaIngresada) {
        document.write(`Bienvenido ${usuarioIngresado} al Shop Online de HighTop Sneakers`);
        break; //en la correcion anterior se me aconsejo no usar break, pero si no lo uso se crea un bucle infinito
    } else if (contador === intentos) {
        alert("Agotaste el número permitido de intentos. Ingresaras como invitado");
    } else {
        alert("Inicio de sesión inválido. Por favor intente de nuevo");
    }
}
