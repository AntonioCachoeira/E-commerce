let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{

    const codPedido = document.getElementById('codPedido').value

    fetch(`http://localhost:3000/pedido?codPedido=${codPedido}`)
    .then(res => res.json())
    .then(pedido => { 
                res.innerHTML = `<strong>Cliente ID: </strong>`+ pedido.clienteId + '<br>'
                res.innerHTML += `<strong>Data: </strong>`+ pedido.dataPedido + '<br>'
                res.innerHTML += `<strong>Valor: </strong>`+ pedido.valorPedido + '<br>'
    })
    .catch((err)=>{
        console.error('Erro ao consultar pedido', err)
    })
})