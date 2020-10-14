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

});