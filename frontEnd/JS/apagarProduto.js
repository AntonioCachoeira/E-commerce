let res = document.getElementById('res')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const codProduto = document.getElementById('codProduto').value

    fetch(`http://localhost:3000/produto/${codProduto}`,{
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(resposta => resposta.json())
    .then(produto => {
        res.innerHTML = produto.message
    })
    .catch((err) => {
        console.error('Erro ao apagar produto', err)
    })
})