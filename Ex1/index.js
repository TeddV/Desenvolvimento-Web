let receita = {
    titulo: "Receita de Cafe",
    porcoes: 1,
    ingredientes: ["Acucar", "Po de cafe", "Agua"]
}

console.log("Titulo", receita.titulo)
console.log("Porcoes", receita.porcoes)
receita.ingredientes.forEach(function(index, element) {
console.log("Ingrediente", index)
});