$(document).ready(function () {
  $("#label").click(function () {
    $("ul").toggleClass("show");
  });
  $("#label").click(function () {
    $("#carousel").toggleClass("esconde");
  });

  $("#carrinho").click(function () {});

  $("#produtos").click(function () {
    $("#produtos").addClass("active");
    $("#home").removeClass("active");
    $("#depoimentos").removeClass("active");
    $("#servicos").removeClass("active");
  });
  $("#home").click(function () {
    $("#home").addClass("active");
    $("#produtos").removeClass("active");
    $("#depoimentos").removeClass("active");
    $("#servicos").removeClass("active");
  });
  $("#depoimentos").click(function () {
    $("#depoimentos").addClass("active");
    $("#produtos").removeClass("active");
    $("#home").removeClass("active");
    $("#servicos").removeClass("active");
  });
  $("#servicos").click(function () {
    $("#servicos").addClass("active");
    $("#produtos").removeClass("active");
    $("#home").removeClass("active");
    $("#depoimentos").removeClass("active");
  });

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
        var login = true
        alert("login realizado")
      }
      else{

      }

    }

  });

});
