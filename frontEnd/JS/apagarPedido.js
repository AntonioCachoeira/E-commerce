let res = document.getElementById('res')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const codPedido = document.getElementById('codPedido').value

    fetch(`http://localhost:3000/pedido/${codPedido}`,{
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(resposta => resposta.json())
    .then(pedido => {
        res.innerHTML = pedido.message
    })
    .catch((err) => {
        console.error('Erro ao apagar pedido', err);
    })
})