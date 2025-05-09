let res = document.getElementById('res')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const codEstoque = document.getElementById('codEstoque').value

    fetch(`http://localhost:3000/estoque/${codEstoque}`,{
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(resposta => resposta.json())
    .then(estoque => {
        res.innerHTML = estoque.message
    })
    .catch((err) => {
        console.error('Erro ao apagar estoque', err);
    })
})