function gerarSenha(tamanho) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let senha = "";
    
    for (let i = 0; i < tamanho; i++) {
        let index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[index];
    }
    
    return senha;
}

console.log("Senha gerada:", gerarSenha(10));
