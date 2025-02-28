let listaCompras = ["Arroz", "Feijão", "Leite"];

// Adicionar item
listaCompras.push("Macarrão");
console.log("Lista após adição:", listaCompras);

// Remover último item
listaCompras.pop();
console.log("Lista após remoção:", listaCompras);

// Alterar item
listaCompras[1] = "Carne";
console.log("Lista após alteração:", listaCompras);

// Buscar item
console.log("Tem Macarrão?", listaCompras.includes("Macarrão"));
