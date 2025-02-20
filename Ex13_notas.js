function calcularNotaFinal(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    let resultado = media >= 7 ? "Aprovado" : media >= 5 ? "Recuperação" : "Reprovado";
    
    return `Média: ${media.toFixed(2)} - Situação: ${resultado}`;
}

console.log(calcularNotaFinal(8, 7, 9)); // Aprovado
console.log(calcularNotaFinal(5, 6, 4)); // Recuperação
console.log(calcularNotaFinal(3, 4, 2)); // Reprovado
