function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é Par.`);
    } else {
        console.log(`${numero} é Ímpar.`);
    }
}

// Teste com alguns números
verificarParOuImpar(10);
verificarParOuImpar(7);
verificarParOuImpar(25);
