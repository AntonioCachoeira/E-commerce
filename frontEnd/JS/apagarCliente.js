let res = document.getElementById('res')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const codCliente = document.getElementById('codCliente').value

    fetch(`http://localhost:3000/cliente/${codCliente}`,{
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(resposta => resposta.json())
    .then(cliente => {
        res.innerHTML = cliente.message
    })
    .catch((err) => {
        console.error('Erro ao apagar Cliente', err);
    })
})