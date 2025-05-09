let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{

    const codFabricante = document.getElementById('codFabricante').value

    fetch(`http://localhost:3000/fabricante?codFabricante=${codFabricante}`)
    .then(res => res.json())
    .then(fabricante => { 
                res.innerHTML = `<strong>Nome: </strong>`+ fabricante.nomeFabricante + '<br>'
                res.innerHTML += `<strong>Marca: </strong>`+ fabricante.marcaFabricante + '<br>'
                res.innerHTML += `<strong>CNPJ: </strong>`+ fabricante.cnpjFabricante + '<br>'
                res.innerHTML += `<strong>Telefone: </strong>`+ fabricante.telefoneFabricante + '<br>'
                res.innerHTML += `<strong>Email: </strong>`+ fabricante.emailFabricante + '<br>'
                res.innerHTML += `<strong>Logradouro: </strong>`+ fabricante.logradouro + '<br>'
                res.innerHTML += `<strong>Número: </strong>`+ fabricante.numero + '<br>'
                res.innerHTML += `<strong>Complemento: </strong>`+ fabricante.complemento + '<br>'
                res.innerHTML += `<strong>Bairro: </strong>`+ fabricante.bairro + '<br>' 
                res.innerHTML += `<strong>Localidade: </strong>`+ fabricante.localidade + '<br>'
                res.innerHTML += `<strong>UF: </strong>`+ fabricante.uf + '<br>'
                res.innerHTML += `<strong>CEP: </strong>`+ fabricante.cep + '<br>'
    })
    .catch((err)=>{
        console.error('Erro ao consultar fabricante', err)
    })
})