var mapa;
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

    $(".carousel").on("afterChange", function(){
        atualizarInformacoes();
    });

    $("#label").click(function(){
        $('ul').toggleClass('show')
    });
    $("#label").click(function(){
        $('#carousel').toggleClass('esconde')
    });
    
    $("#produtos").click(function(){
        $('#produtos').addClass('active')
        $('#home').removeClass('active')
        $('#depoimentos').removeClass('active')
        $('#servicos').removeClass('active')
    });
    $("#home").click(function(){
        $('#home').addClass('active')
        $('#produtos').removeClass('active')
        $('#depoimentos').removeClass('active')
        $('#servicos').removeClass('active')
    });
    $("#depoimentos").click(function(){
        $('#depoimentos').addClass('active')
        $('#produtos').removeClass('active')
        $('#home').removeClass('active')
        $('#servicos').removeClass('active')
    });
    $("#servicos").click(function(){
        $('#servicos').addClass('active')
        $('#produtos').removeClass('active')
        $('#home').removeClass('active')
        $('#depoimentos').removeClass('active')
    });
    
    

});
function initMap() {

    var configuracoes = {
      center: {lat: -25.45212754, lng: -49.25276682},
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