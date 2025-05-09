let btns = document.querySelectorAll('.btn_add');
let produtos = [];

btns.forEach(btn => {
    btn.addEventListener('click', adicionarCarrinho);
});

function adicionarCarrinho(e) {
    let nome = e.target.getAttribute('data-nome');
    let preco = e.target.getAttribute('data-preco');
    let codProduto = e.target.getAttribute('data-codProduto');
    let produto = {
        nome: nome,
        preco: preco,
        codProduto: codProduto,
    };
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Item adicionado ao carrinho')
}
