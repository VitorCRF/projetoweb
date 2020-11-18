var banco = window.localStorage;
var users = window.localStorage;
var numeroItens = JSON.parse(banco.getItem("dadosProdutos"));
var contasStorage = localStorage.getItem("contasStorage");
$(document).ready(function(){
    contasStorage = JSON.parse(contasStorage);
     /* verificacao para ver se o local storage está vazio, e se estiver inicia-lo como um array */ 
     if (contasStorage == null){
        contasStorage = [];
    }
    
    $("#label").click(function(){
        $('ul').toggleClass('show')
    });
    $("#label").click(function(){
        $('#carousel').toggleClass('esconde')
    });

    $("#bAdicionarCarrinho").click(function(){
        if(contasStorage == "")
            alert("Você precisa estar logado para fazer uma compra!")
        if(contasStorage[0][5] == true){
            if(numeroItens.length >= 1){
                window.open('https://pag.ae/7WB69MQ7H/button', '_blank');
                window.localStorage.clear();
                location.reload();
            }
            else
                window.alert("O seu carrinho está vazio!")
        }
        else{
            alert("Você precisa estar logado para fazer uma compra!")
        }
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