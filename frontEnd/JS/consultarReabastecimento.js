let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{

    const codReabastecimento = document.getElementById('codReabastecimento').value

    fetch(`http://localhost:3000/reabastecimento?codReabastecimento=${codReabastecimento}`)
    .then(res => res.json())
    .then(reabastecimento => { 
                res.innerHTML = `<strong>Estoque ID: </strong>`+ reabastecimento.estoqueId + '<br>'
                res.innerHTML += `<strong>Nome Produto: </strong>`+ reabastecimento.nomeProduto + '<br>'
                res.innerHTML += `<strong>Quantidade Estoque: </strong>`+ reabastecimento.quantidadeEstoque + '<br>'
                res.innerHTML += `<strong>Data: </strong>`+ reabastecimento.dataReabastecimento + '<br>'
    })
    .catch((err)=>{
        console.error('Erro ao consultar reabastecimento', err)
    })
})