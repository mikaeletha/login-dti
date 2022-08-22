function Enviar() {
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");

if ((email.value == "teste@teste.com") && (senha.value == "123")) {
  SucessoLogin();
}
else {
  ErroLogin();
}
}

function SucessoLogin(){
  window.location="sucesso-login.html";
}

function ErroLogin(){
  window.location="erro-login.html";
}

function Logout() {
  window.location="index.html";
}