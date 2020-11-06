$(document).ready(function(){

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