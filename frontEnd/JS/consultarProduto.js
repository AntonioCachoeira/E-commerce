let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{

    const codProduto = document.getElementById('codProduto').value

    fetch(`http://localhost:3000/produto?codProduto=${codProduto}`)
    .then(res => res.json())
    .then(produto => { 
                res.innerHTML = `<strong>Fabricante ID: </strong>`+ produto.fabricanteId + '<br>'
                res.innerHTML += `<strong>Nome: </strong>`+ produto.nomeProduto + '<br>'
                res.innerHTML += `<strong>Quantidade: </strong>`+ produto.quantidadeProduto + '<br>'
                res.innerHTML += `<strong>Preço: </strong>`+ produto.precoProduto + '<br>'
                res.innerHTML += `<strong>Descrição: </strong>`+ produto.descricaoProduto + '<br>'
    })
    .catch((err)=>{
        console.error('Erro ao consultar produto', err)
    })
})