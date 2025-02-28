let usuario = { nome: "Rafael Francisco", idade: 45, cidade: "Mauá" };

// Adicionar chave
usuario.email = "rafael_1960@gmail.com";
console.log("Usuário atualizado:", usuario);

// Remover chave
delete usuario.cidade;
console.log("Usuário após remoção:", usuario);

// Modificar chave
usuario.idade = 55;
console.log("Usuário com idade modificada:", usuario);
