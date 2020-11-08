var array_Templates =   [["Educacional ","../img/template-educacional.jpg", false],
                        ["Cake Site", "../img/cake-site-template-img.png", true],
                        ["Investimentos", "../img/template-empresa-de-investimentos.jpg", false],
                        ["Sistema Completo", "../img/template-sistema-completo.png", false],
                        ["Tecnologia", "../img/template-tecnologia.jpg", false],
                        ["Web e Mobile", "../img/template-web-mobile.png", false]];
var carrinho = [];

$(document).ready(function(){

    $("#label").click(function(){
        $('ul').toggleClass('show')
    });
    $("#label").click(function(){
        $('#carousel').toggleClass('esconde')
    });

    $("#label").click(function(){
        $('.best-seller').toggleClass('esconde')
    });
    

    
    listaProdutos();

});


function listaProdutos(){

    
    for (var i = 0; i < array_Templates.length; i++){
        var conteudo = "";
            conteudo += '<div class="best-seller">';
            conteudo +=      '<h1 class="titulo-best-seller" align="center">'+array_Templates[i][0]+'</h1>';
                conteudo +=      '<img width="300px" height="200px" alt="'+array_Templates[i][0]+'" src="'+array_Templates[i][1]+'"class="imagem-best-seller">';
            if(array_Templates[i][2] == false){
                conteudo +=      '<button class="bAdicionarCarrinho" id_produto="'+i+'">Adicionar ao carrinho</button>';
            }
            else{
                conteudo +=      '<button class="bAdicionarCarrinho bAdicionado" id_produto="'+i+'">Adicionado ao carrinho</button>';
            }
            conteudo += '</div>';
        $(".div-best-sellers").append(conteudo);
        
    }
    $(".bAdicionarCarrinho").click(function(){
        window.alert(oi);
    });
    
    

}

