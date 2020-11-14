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

  $("#botao-cadastrar").click(function () {
    window.location.href = "cadastro copy.html";
  });
});
