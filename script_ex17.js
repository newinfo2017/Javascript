document.getElementById("trocarCor").addEventListener("click", function() {
    let cores = ["red", "blue", "green", "yellow", "purple"];
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
});
