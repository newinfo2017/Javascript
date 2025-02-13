function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return `${ano} é um ano bissexto.`;
    } else {
        return `${ano} não é um ano bissexto.`;
    }
}

console.log(ehBissexto(2024)); // Bissexto
console.log(ehBissexto(2023)); // Não bissexto
console.log(ehBissexto(2000)); // Bissexto
console.log(ehBissexto(1900)); // Não bissexto
