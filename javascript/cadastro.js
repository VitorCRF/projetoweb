$(document).ready(function(){

    var contasStorage = localStorage.getItem("contasStorage");
    contasStorage = JSON.parse(contasStorage);

    /* verificacao para ver se o local storage está vazio, e se estiver inicia-lo como um array */ 
    if (contasStorage == null){
        contasStorage = [];
    }

    var nome;
    var email;
    var verificaEmail;
    var telefone;
    var cep;
    var senha;
    var confirmaSenha;

    var prosseguir = true;

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
            prosseguir = true;
            $("#nome").removeClass("campo-invalido");
            $("#nome").addClass("campo-texto-formulario");
        }
        else{
            $("#nome").removeClass("campo-texto-formulario");
            $("#nome").addClass("campo-invalido");
            prosseguir = false;
        }

        /* verificacao de email */
        if (email != ""){
            prosseguir = true;
            $("#email").removeClass("campo-invalido");
            $("#email").addClass("campo-texto-formulario")
        } 
        else{
            $("#email").removeClass("campo-texto-formulario");
            $("#email").addClass("campo-invalido");
            alert("Email inválido.")
            prosseguir = false;
        }

        /* verificacao de confirmar email */
        if (verificaEmail != "" && verificaEmail === email){
            prosseguir = true;
            ("#verificarEmail").removeClass("campo-invalido");
            ("#verificarEmail").addClass("campo-formulario-texto")
        }
        else if (verificaEmail != email){
            $("#verificarEmail").removeClass("campo-texto-formulario");
            $("#verificarEmail").addClass("campo-invalido");
            alert("O email de confirmação não é igual ao email inserido.")
        }
        else{
            $("#verificarEmail").removeClass("campo-texto-formulario");
            $("#verificarEmail").addClass("campo-invalido");
            prosseguir = false;
        }

        /* verificacao de telefone */
        if (telefone != ""){
            prosseguir = true;
        } 
        else{
            telefone = "(00) 90000-0000"
            prosseguir = true;
        }

        /* verificacao de cep */

        if (cep != "" && cep.length === 8){
            prosseguir = true;
            $("#cep").removeClass("campo-invalido")
            $("#cemp").addClass("campo-texto-formulario")
        }
        else{
            $("#cep").removeClass("campo-texto-formulario");
            $("#cep").addClass("campo-invalido");
            prosseguir = false;
        }

        /* verificacao de senha */
        if (senha != "" && senha.length >= 6 && confirmaSenha === senha){
            prosseguir = true;
            $("#senha").removeClass("campo-valido")
            $("#senha").addClass("campo-texto-formulario")
        }
        else if(senha != confirmaSenha){
            $("#confirmaSenha").removeClass("campo-texto-formulario");
            $("#confirmaSenha").addClass("campo-invalido");
            alert("A confirmação de senha não corresponde a senha inserida.")
            prosseguir = false;
        }
        else{
            $("#senha").removeClass("campo-texto-formulario");
            $("#senha").addClass("campo-invalido");
            alert("A senha não possui 6 dígitos.")
            prosseguir = false;
        }

        /* verificacao de confirma senha */
        if (confirmaSenha != ""){
            prosseguir = true;
            $("#confirmaSenha").removeClass("campo-invalido");
            $("#confirmaSenha").addClass("campo-texto-formulario");
        }
        else{
            $("#confirmaSenha").removeClass("campo-texto-formulario");
            $("#confirmaSenha").addClass("campo-invalido");
            alert("A confirmação de senha está vazia.")
            prosseguir = false;
        }

        /* verificacao para realizar cadastro */
        if (prosseguir === true){
            alert("Cadastro realizado com sucesso.")
            Adicionar();
        }
        else{
            alert("O cadastro não foi realizado. Por favor verifique as informações inseridas e tente novamente.")
        }

    });

    function Adicionar(){

        /* funcao para adicionar um novo usuario ao local storage */ 

        var newUser = [];
        newUser.push(nome, email, senha, cep, telefone)

        contasStorage.push(newUser);
        localStorage.setItem("contasStorage", JSON.stringify(contasStorage));

        alert("Mando pro storage")

        Retornar()

    }

    function Retornar(){
        var user = JSON.parse(localStorage.getItem("contasStorage"))

        console.log(user)
    }

    function Editar(){

        var userEdit;
        

    }

    function Remover(){

    }

});