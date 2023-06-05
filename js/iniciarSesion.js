document.getElementById("registrar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const contraseña = document.getElementById("contraseña").value;

  const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
  const nuevoUsuario = {
    nombreyapellido: nombre,
    email,
    contraseña,
  };

  usuariosRegistrados.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
  localStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));
  console.log(usuariosRegistrados);
});