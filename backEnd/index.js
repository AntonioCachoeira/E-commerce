const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const controllerCliente = require('./controller/controllerCliente')
const controllerEntrega = require('./controller/controllerEntrega')
const controllerEstoque = require('./controller/controllerEstoque')
const controllerFabricante = require('./controller/controllerFabricante')
const controllerItemPedido = require('./controller/controllerItemPedido')
const controllerPagamento = require('./controller/controllerPagamento')
const controllerPedido = require('./controller/controllerPedido')
const controllerProduto = require('./controller/controllerProduto')
const controllerReabastecimento = require('./controller/controllerReabastecimento')

const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.post('/cliente',controllerCliente.cadastrarCliente)
app.post('/entrega',controllerEntrega.cadastrarEntrega)
app.post('/estoque',controllerEstoque.cadastrarEstoque)
app.post('/fabricante',controllerFabricante.cadastrarFabricante)
app.post('/itemPedido',controllerItemPedido.cadastrarItemPedido)
app.post('/pagamento',controllerPagamento.cadastrarPagamento)
app.post('/pedido',controllerPedido.cadastrarPedido)
app.post('/produto',controllerProduto.cadastrarProduto)
app.post('/reabastecimento',controllerReabastecimento.cadastrarReabastecimento)


app.get('/clientes',controllerCliente.listarCliente)
app.get('/entregas',controllerEntrega.listarEntrega)
app.get('/estoques',controllerEstoque.listarEstoque)
app.get('/fabricantes',controllerFabricante.listarFabricante)
app.get('/itemPedidos',controllerItemPedido.listarItemPedido)
app.get('/pagamentos',controllerPagamento.listarPagamento)
app.get('/pedidos',controllerPedido.listarPedido)
app.get('/produtos',controllerProduto.listarProduto)
app.get('/reabastecimentos',controllerReabastecimento.listarReabastecimento)


app.get('/cliente',controllerCliente.consultarCliente)
app.get('/entrega',controllerEntrega.consultarEntrega)
app.get('/estoque',controllerEstoque.consultarEstoque)
app.get('/fabricante',controllerFabricante.consultarFabricante)
app.get('/itemPedido',controllerItemPedido.consultarItemPedido)
app.get('/pagamento',controllerPagamento.consultarPagamento)
app.get('/pedido',controllerPedido.consultarPedido)
app.get('/produto',controllerProduto.consultarProduto)
app.get('/reabastecimento',controllerReabastecimento.consultarReabastecimento)


app.delete('/cliente/:id',controllerCliente.apagarCliente)
app.delete('/entrega/:id',controllerEntrega.apagarEntrega)
app.delete('/estoque/:id',controllerEstoque.apagarEstoque)
app.delete('/fabricante/:id',controllerFabricante.apagarFabricante)
app.delete('/itemPedido/:id',controllerItemPedido.apagarItemPedido)
app.delete('/pagamento/:id',controllerPagamento.apagarPagamento)
app.delete('/pedido/:id',controllerPedido.apagarPedido)
app.delete('/produto/:id',controllerProduto.apagarProduto)
app.delete('/reabastecimento/:id',controllerReabastecimento.apagarReabastecimento)


app.get('/', (req, res)=>{
    res.status(200).json({message: 'EndPoint'})
})

conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log('Servidor Rodadando')
    })
})
.catch((err)=>{
    console.log('Erro no servidor', err)
})
