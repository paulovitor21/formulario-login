function validar() {
    var cpf = document.getElementById("cpf");
    var password = document.getElementById("password");

    // não permite que o usuario digite dados invalidos
    if (cpf.value == "") {
        alert("Preencha o campo CPF 😖");
        cpf.focus();
        return;
    }
    if (cpf.value == "00000000000"){
        alert("Preencha o campo senha 😖");
        cpf.focus();
        return;
    }
        
    return alert("Bem-Vindo!. Carregando o sistema... 🤗");
}