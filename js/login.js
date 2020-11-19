var logado = false;
$(document).ready(function () {
  $("#label").click(function () {
    $("ul").toggleClass("show");
  });
  $("#label").click(function () {
    $("#carousel").toggleClass("esconde");
  });

  $("#carrinho").click(function () {});



  $("#botao-cadastre-se").click(function () {
    window.location.href = "cadastro.html";
  });

  $("#botao-voltar").click(function () {
    window.location.href = "../index.html";
  });

  /* botao para logar */ 
  $("#botaoLogin").click(function(){

    var users = JSON.parse(localStorage.getItem("contasStorage"));
    var email = $("#emailLogin").val();
    var senha = $("#senhaLogin").val();

    console.log(users)

    for(var i = 0; i < users.length; i++){

      if (users[i][1] === email && users[i][2] === senha){
        logado = true
        alert("login realizado")
        window.location.href = "../index.html";
        users.append(logado);
        
      }

    }
    if (logado == false)
    alert("Usuario ou senha incorretos")

  });

});
