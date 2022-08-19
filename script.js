function Enviar() {
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");

if ((email.value == "teste@teste.com") && (senha.value == "123")) {
  alert('Funcionou!');
}
else {
  alert('Ops!');
}
}