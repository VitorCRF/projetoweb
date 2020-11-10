$(document).ready(function(){

    var nome;
    var email;
    var verificaEmail;
    var telefone;
    var cep;
    var senha;
    var confirmaSenha;

    $("#botaoCadastro").click(function(){

        nome = $("#nome").val();
        email = $("#email").val();
        verificaEmail = $("#verificarEmail").val();
        telefone = $("#telefone").val();
        senha = $("#senha").val();
        confirmaSenha = $("#confirmaSenha").val();
        cep = $("#cep").val();

        /* verificacao de nome */
        if(nome != ""){

        }
        else{
            $("#nome").removeClass("campo-texto-formulario");
            $("#nome").addClass("campo-invalido");
        }

        /* verificacao de email */
        if (email != ""){

        } 
        else if(email != "" && confirmaSenha != ""){


        }
        else{
            $("#email").removeClass("campo-texto-formulario");
            $("#email").addClass("campo-invalido");
        }

        /* verificacao de confirmar email */
        if (verificaEmail != ""){

        }
        else{
            $("#verificarEmail").removeClass("campo-texto-formulario");
            $("#verificarEmail").addClass("campo-invalido");
        }

        /* verificacao de telefone */
        if (telefone != ""){

        } 
        else{
            
        }

        /* verificacao de cep */

        if (cep != ""){

        }
        else{
            $("#cep").removeClass("campo-texto-formulario");
            $("#cep").addClass("campo-invalido");
        }

        /* verificacao de senha */
        if (senha != "" && senha.length >= 6 && confirmaSenha === senha){
            alert("senha boa")

        }
        else if(senha != confirmaSenha){
            $("#confirmaSenha").removeClass("campo-texto-formulario");
            $("#confirmaSenha").addClass("campo-invalido");
            alert("A confirmação de senha não corresponde a senha inserida.")
        }
        else{
            $("#senha").removeClass("campo-texto-formulario");
            $("#senha").addClass("campo-invalido");
            alert("A senha não possui 6 dígitos.")
        }

        /* verificacao de confirma senha */
        if (confirmaSenha != ""){

        }
        else{
            $("#confirmaSenha").removeClass("campo-texto-formulario");
            $("#confirmaSenha").addClass("campo-invalido");
            alert("A confirmação de senha está vazia.")
        }

    });

});