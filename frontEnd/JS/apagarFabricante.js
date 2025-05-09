let res = document.getElementById('res')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const codFabricante = document.getElementById('codFabricante').value

    fetch(`http://localhost:3000/fabricante/${codFabricante}`,{
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(resposta => resposta.json())
    .then(fabricante => {
        res.innerHTML = fabricante.message
    })
    .catch((err) => {
        console.error('Erro ao apagar fabricante', err);
    })
})