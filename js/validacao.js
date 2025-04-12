document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Emails e senhas predefinidos
    const credenciais = [
        { email: "aluno@gmail.com", senha: "senha123", redirect: "../aluno/a-perfil.html" },
        { email: "admin@gmail.com", senha: "senha123", redirect: "../aluno/adm-painel.html" },
        { email: "professor@gmail.com", senha: "senha123", redirect: "../professor/p-professor.html" }
    ];

    // Obtém os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o email e a senha correspondem a alguma credencial
    const credencialValida = credenciais.find(credencial => 
        credencial.email === email && credencial.senha === senha
    );

    if (credencialValida) {
        // Redireciona para a página correspondente
        window.location.href = credencialValida.redirect;
    } else {
        alert("Email ou senha incorretos!");
    }
});