let livros = [
    {
        titulo: "Assim Falou Zaratustra",
        autor: "Friedrich Nietzsche",
        lido: true,
    },
    {
        titulo: "Ser e tempo",
        autor: "Martin Heidegger",
        lido: false,
    },
    {
        titulo: " Crítica da Razão Pura",
        autor: "Immanuel Kant",
        lido: true,
    },
    {
        titulo: "O Principe",
        autor: "Nicolau Maquiavel",
        lido: false,
    }
]
livros.forEach(element => {
    if (element.lido) {
        console.log(`Você já leu este livro – ${element.titulo} – ${element.autor}`)
    } else {
        console.log(`Você não leu este livro – ${element.titulo} – ${element.autor}`)
    }
}); 
