let res = document.getElementById('res')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const codReabastecimento = document.getElementById('codReabastecimento').value

    fetch(`http://localhost:3000/reabastecimento/${codReabastecimento}`,{
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(resposta => resposta.json())
    .then(reabastecimento => {
        res.innerHTML = reabastecimento.message
    })
    .catch((err) => {
        console.error('Erro ao apagar reabastecimento', err);
    })
})