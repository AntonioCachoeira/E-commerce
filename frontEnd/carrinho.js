let compras = document.getElementById('compras');

// Função para exibir os produtos e o total do carrinho
function mostrarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('produtos')) || []; // Se não existir, cria um array vazio
    compras.innerHTML = '';  // Limpa o conteúdo antes de adicionar os novos produtos

    let total = 0.0;

    // Verifica se o carrinho tem produtos
    if (carrinho.length > 0) {
        carrinho.forEach(prod => {
            let preco = parseFloat(prod.preco);
            if (!isNaN(preco)) {
                total += preco; // Soma o preço do produto
            }

            compras.innerHTML += `Produto: ${prod.nome} <strong> R$ ${preco.toFixed(2)} </strong> <br><br>`; // Exibe o produto
        });

        // Exibe o total
        compras.innerHTML += '<hr>' + '<br>'
        compras.innerHTML += `<strong> Total: R$ ${total.toFixed(2)} </strong>`
    } else {
        compras.innerHTML = 'Carrinho vazio.'
    }
}

window.onload = mostrarCarrinho
