document.getElementById("registrar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const contraseña = document.getElementById("contraseña").value;

  const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
  
  //Verifica si el email ya está registrado
  const emailRegistrado = usuariosRegistrados.find(usuario => usuario.email === email);
  if (emailRegistrado) {
    Swal.fire({
      icon: 'error',
      title: 'El email ingresado ya se encuentra registrado',
    });
    return;
  }

  //guardo el nuevo usuario en el localStorage
  const nuevoUsuario = {
    nombreyapellido: nombre,
    email,
    contraseña,
  };

  usuariosRegistrados.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
  localStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));
  console.log(usuariosRegistrados);

  Swal.fire({
    icon: 'success',
    title: 'Tu usuario ha sido registrado',
    showConfirmButton: false,
    timer: 1500
  });
});