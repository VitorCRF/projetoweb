var banco = window.localStorage;
var numeroItens = JSON.parse(banco.getItem("dadosProdutos"));
$(document).ready(function(){

    $("#label").click(function(){
        $('ul').toggleClass('show')
    });
    $("#label").click(function(){
        $('#carousel').toggleClass('esconde')
    });

    $("#carrinho").click(function(){
        
    });

    
    qtdeCarrinho();
    listaProdutos()

});
function listaProdutos() {
    var conteudo = "";
    var dados = JSON.parse(banco.getItem("dadosProdutos"))
    for (var i = 0; i < dados.length; i++){
        var conteudo = "";
            conteudo += '<div class="best-seller">';
            conteudo +=      '<h1 class="titulo-best-seller" align="center">'+dados[i][0]+'</h1>';
            conteudo +=      '<img width="300px" height="200px" alt="'+dados[i][0]+'" src="'+dados[i][1]+'"class="imagem-best-seller">';
            conteudo += '</div>';
        $(".container-best-sellers").append(conteudo);
        
    }

}
function qtdeCarrinho(){
    $("#qtdeCarrinho").html("");
    var conteudo = "";
    conteudo += '<p id="qtdeItens">'+numeroItens.length+'</p>'
    $("#qtdeCarrinho").append(conteudo);

}