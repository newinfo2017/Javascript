function calcularDesconto(preco, tipo) {
    let desconto;

    switch (tipo.toLowerCase()) {
        case "bronze":
            desconto = 0.05; // 5%
            break;
        case "prata":
            desconto = 0.10; // 10%
            break;
        case "ouro":
            desconto = 0.15; // 15%
            break;
        default:
            desconto = 0; // Sem desconto
    }

    let precoFinal = preco - (preco * desconto);
    return `Preço original: R$${preco.toFixed(2)} | Desconto: ${desconto * 100}% | Preço final: R$${precoFinal.toFixed(2)}`;
}

console.log(calcularDesconto(100, "prata")); // 10% de desconto
console.log(calcularDesconto(250, "ouro")); // 15% de desconto
console.log(calcularDesconto(80, "bronze")); // 5% de desconto
console.log(calcularDesconto(50, "nenhum")); // Sem desconto
