function Enviar() {
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");

if((email.value == "teste@teste.com") && (senha.value == "123")) {
  alert("Login efetuado com sucesso! Clique em OK para ser redirecionado", SucessoLogin())
  //SucessoLogin();
} 
else {
  //ErroLogin();
  alert("Erro! Clique em OK para saber mais", ErroLogin())
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