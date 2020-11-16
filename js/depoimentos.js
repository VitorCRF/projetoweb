var banco = window.localStorage;
var numeroItens = JSON.parse(banco.getItem("dadosProdutos"));
var array_Depoimentos =  [["../img/joao.jpg", "João Lucas Silva ", "Lorem ipsum dolor sit amet. Ut porta sed justo sodales rhoncus. Maecenas quis metus pellentesque, fermentum risus sit amet, imperdiet orci. Proin commodo porttitor ligula vitae lobortis."],
                        ["../img/maria.jpg", "Maria Gonçalves", "Morbi convallis, magna at luctus eleifend, dui felis tempus dolor, ut ultrices tortor diam in lorem. Phasellus sapien ligula, vehicula in augue non, euismod hendrerit ex."],
                        ["../img/augusto.jpg", "Augusto Nascimento", "Cras congue molestie mollis. Vivamus sed sapien vel tortor vehicula congue. Quisque congue ante in vehicula venenatis. Pellentesque vel quam elit. Morbi cursus lobortis iaculis. "],
                        ["../img/luciana.jpg", "Luciana Soares Mendez ", "Integer scelerisque tincidunt iaculis. Nunc a accumsan tellus. Duis semper turpis et sodales hendrerit. Cras cursus viverra dui. "],
                        ["../img/wagner.jpg", "Wagner Pereira", "Cras ut leo sem. Phasellus ullamcorper eros at neque posuere consectetur. Ut ac sapien bibendum urna lobortis imperdiet.."],
                        ["../img/andreia.jpg", "Andreia dos Santos", "Nullam ac nulla dapibus, imperdiet enim a, ultricies velit. Sed lorem urna, rutrum pharetra ante eu, malesuada pretium turpis. "]];


$(document).ready(function(){
    console.log(array_Depoimentos)
    $("#label").click(function(){
        $('ul').toggleClass('show')
    });
    $("#label").click(function(){
        $('#carousel').toggleClass('esconde')
    });

    $("#carrinho").click(function(){
        
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
    qtdeCarrinho();
    listaDepoimentos();

});
function listaDepoimentos(){

    $(".container-best-sellers").html("");
    console.log(array_Depoimentos)

    for (var i = 0; i < array_Depoimentos.length; i++){
        var conteudo = "";
        conteudo += '<div class="depoimento">';
        conteudo +=      '<img alt="user_image" class="imagem-depoimentos" src="'+array_Depoimentos[i][0]+'">';
        conteudo +=      '<h2 class="titulo-depoimento">'+array_Depoimentos[i][1]+'</h2>';
        conteudo += '<br>';
        conteudo +=      ' <p class="texto-depoimento">'+array_Depoimentos[i][2]+'</p>';
        conteudo += '</div>'
        $(".container-best-sellers").append(conteudo);
        
    }
}
function qtdeCarrinho(){
    $("#qtdeCarrinho").html("");
    var conteudo = "";
    conteudo += '<p id="qtdeItens">'+numeroItens.length+'</p>'
    $("#qtdeCarrinho").append(conteudo);

}