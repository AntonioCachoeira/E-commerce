let res = document.getElementById('res')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const codPagamento = document.getElementById('codPagamento').value

    fetch(`http://localhost:3000/pagamento/${codPagamento}`,{
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(resposta => resposta.json())
    .then(pagamento => {
        res.innerHTML = pagamento.message
    })
    .catch((err) => {
        console.error('Erro ao apagar pagamento', err)
    })
})