let res = document.getElementById('res')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const codEntrega = document.getElementById('codEntrega').value

    fetch(`http://localhost:3000/entrega/${codEntrega}`,{
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(resposta => resposta.json())
    .then(entrega => {
        res.innerHTML = entrega.message
    })
    .catch((err) => {
        console.error('Erro ao apagar entrega', err);
    })
})