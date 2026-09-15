const formulario = document.getElementById("formLogin");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Analisa os campos através da sequência
    let nome = document.querySelectorAll(".campo")[0];
    let email = document.querySelectorAll(".campo")[1];
    let senha = document.querySelectorAll(".campo")[2];

    let camposVazios = [];

    // Limpa as bordas
    nome.style.border = "";
    email.style.border = "";
    senha.style.border = "";

    // Verifica os campos vazios
    if (nome.value.trim() === "") {
        camposVazios.push("Nome");
        nome.style.border = "2px solid red";
    }


    if (email.value.trim() === "") {
        camposVazios.push("E-mail");
        email.style.border = "2px solid red";
    }

    if (senha.value.trim() === "") {
        camposVazios.push("Senha");
        senha.style.border = "2px solid red";
    }

    // Verifica os campos vazios
    if (camposVazios.length > 0) {

        mensagem.style.display = "block";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#842029";

        mensagem.innerHTML =
            "⚠️ Preencha os seguintes campos: " +
            camposVazios.join(", ") + ".";

        return;
    }

    // Regex para validar senha forte
    const regexSenhaForte =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

    // Verifica a força da senha
    if (!regexSenhaForte.test(senha.value)) {

        mensagem.style.display = "block";
        mensagem.style.backgroundColor = "#fff3cd";
        mensagem.style.color = "#856404";

        mensagem.innerHTML =
            "🔒 A senha deve ter no mínimo 8 caracteres, " +
            "1 letra maiúscula, 1 letra minúscula, " +
            "1 número e 1 caractere especial.";

        senha.style.border = "2px solid red";

        return;
    }

    // Cadastro realizado com sucesso
    mensagem.style.display = "block";
    mensagem.style.backgroundColor = "#d1e7dd";
    mensagem.style.color = "#0f5132";

    mensagem.innerHTML =
        "✅ Cadastro realizado com sucesso!";

    sessionStorage.setItem("logado", "true"); 

    // Envia para a segunda página
    setTimeout(function() {
        window.location.href = "segundo.html";
    }, 1000);

});