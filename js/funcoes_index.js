var banco = window.localStorage;
var numeroItens = JSON.parse(banco.getItem("dadosProdutos"));
var mapa;
var array_BestSeller =   [["Educacional ","img/template-educacional.jpg"],
                        ["Cake Site", "img/cake-site-template-img.png"],
                        ["Investimentos", "img/template-empresa-de-investimentos.jpg"]];

var array_Depoimentos =  [["img/joao.jpg", "João Lucas Silva ", "Lorem ipsum dolor sit amet. Ut porta sed justo sodales rhoncus. Maecenas quis metus pellentesque, fermentum risus sit amet, imperdiet orci. Proin commodo porttitor ligula vitae lobortis."],
                        ["img/maria.jpg", "Maria Gonçalves", "Morbi convallis, magna at luctus eleifend, dui felis tempus dolor, ut ultrices tortor diam in lorem. Phasellus sapien ligula, vehicula in augue non, euismod hendrerit ex."],
                        ["img/augusto.jpg", "Augusto Nascimento", "Cras congue molestie mollis. Vivamus sed sapien vel tortor vehicula congue. Quisque congue ante in vehicula venenatis. Pellentesque vel quam elit. Morbi cursus lobortis iaculis. "]];

$(document).ready(function(){
    
    initMap();
    function atualizarInformacoes(){
        $("#nomeProduto").text($(".slick-center").data("name"));
        $("#precoProduto").text($(".slick-center").data("price"));
    }

    $(".carousel").on("init", function(){
        atualizarInformacoes();
    });

    $(".carousel").slick({

        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow: $("#seta-prev"),
        nextArrow: $("#seta-next"),
        autoplay: true,
        autoplaySpeed: 4500,
        
        
    });
    listaMaisVendidos();
    
    console.log(array_BestSeller);
    $(".carousel").on("afterChange", function(){
        atualizarInformacoes();
    });

    $("#label").click(function(){
        $('ul').toggleClass('show')
    });
    $("#label").click(function(){
        $('#carousel').toggleClass('esconde')
    });
    $("#label").click(function(){
        $('#chamadaCarrossel').toggleClass('esconde')
    });
    
    eventosClick();
    
    qtdeCarrinho();
    listaDepoimentos();

});
function initMap() {

    var configuracoes = {
      center: {lat: -25.441570, lng: -49.289771},
      zoom: 15
    }
        
    mapa = new google.maps.Map(document.getElementById('map'), configuracoes);
  
    var marcador = new google.maps.Marker({
      position: {lat: -25.45212754, lng: -49.25276682},
      title: "PUCPR",
      map: mapa
    });
    marcador = new google.maps.Marker({
        position: {lat: -25.441505, lng: -49.274801},  
        title: "Filial 1",
        map: mapa
      });
    marcador = new google.maps.Marker({
        position: {lat: -25.441570, lng: -49.289771}, 
        title: "Filial 2",
        map: mapa
      });
    marcador = new google.maps.Marker({
        position: {lat: -25.450735, lng: -49.278527},   
        title: "Filial 3",
        map: mapa
      });
      marcador = new google.maps.Marker({
        position: {lat: -25.438300, lng: -49.300866},    
        title: "Filial 4",
        map: mapa
      });
  
  }
  function listaMaisVendidos(){

    $(".container-best-sellers").html("");

    for (var i = 0; i < array_BestSeller.length; i++){
        var conteudo = "";
            conteudo += '<div class="best-seller">';
            conteudo +=      ' <h1 class="titulo-best-seller" align="center">'+array_BestSeller[i][0]+'</h1>';
            conteudo +=      '<img width="300px" height="200px" alt="Cake site template" src="'+array_BestSeller[i][1]+'"class="imagem-best-seller">';
            conteudo += '</div>';
        $(".container-best-sellers").append(conteudo);
        
    }
}
function listaDepoimentos(){

    $(".div-depoimentos").html("");
    console.log(array_Depoimentos)

    for (var i = 0; i < array_Depoimentos.length; i++){
        var conteudo = "";
        conteudo += '<div class="depoimento">';
        conteudo +=      '<img alt="user_image" class="imagem-depoimentos" src="'+array_Depoimentos[i][0]+'">';
        conteudo +=      '<h2 class="titulo-depoimento">'+array_Depoimentos[i][1]+'</h2>';
        conteudo += '<br>';
        conteudo +=      ' <p class="texto-depoimento">'+array_Depoimentos[i][2]+'</p>';
        conteudo += '</div>'
        $(".div-depoimentos").append(conteudo);
        
    }
}
function eventosClick(){
    $("#buttonMaisProdutos").click(function(){
        window.location.href = "paginas/produtos.html"
    });
}
function qtdeCarrinho(){
    $("#qtdeCarrinho").html("");
    var conteudo = "";
    conteudo += '<p id="qtdeItens">'+numeroItens.length+'</p>'
    $("#qtdeCarrinho").append(conteudo);

}