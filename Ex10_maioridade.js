function verificarMaioridade(idade) {
    if (idade >= 18) {
        console.log(`Você tem ${idade} anos e é maior de idade.`);
    } else {
        console.log(`Você tem ${idade} anos e ainda é menor de idade.`);
    }
}

verificarMaioridade(20); // Maior de idade
verificarMaioridade(16); // Menor de idade
