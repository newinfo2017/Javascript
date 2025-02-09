function calcular(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero!";
        default:
            return "Operador inválido!";
    }
}

console.log(calcular(10, 5, "+")); // 15
console.log(calcular(8, 2, "-"));  // 6
console.log(calcular(6, 3, "*"));  // 18
console.log(calcular(9, 0, "/"));  // Erro: Divisão por zero!
