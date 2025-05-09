let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{

    const codPagamento = document.getElementById('codPagamento').value

    fetch(`http://localhost:3000/pagamento?codPagamento=${codPagamento}`)
    .then(res => res.json())
    .then(pagamento => { 
                res.innerHTML = `<strong>Pedido ID: </strong>`+ pagamento.pedidoId + '<br>'
                res.innerHTML += `<strong>Vencimento: </strong>`+ pagamento.dataVencimento + '<br>'
                res.innerHTML += `<strong>Valor: </strong>`+ pagamento.valorPagamento + '<br>'
    })
    .catch((err)=>{
        console.error('Erro ao consultar pagamento', err)
    })
})