import { conectaApi } from "./conectaApi.js";

const listaProdutos = document.querySelector("[data-lista-produtos]");

export default function constroiProduto(nome, preco, imagemUrl) {
    const produto = document.createElement("div");
    produto.className = "imagem";

    produto.innerHTML = `
        <figure>
            <img src="${imagemUrl}" alt="Imagem do produto ${nome}">
            <h3>${nome}</h3>
            <div class="container-valor">
                <div>
                    $ <span>${preco}</span>
                </div>
                <img src="assets/trash.svg" alt="Remover produto">
            </div>
        </figure>
    `;

    return produto;
}

async function listaProdutosDoBackend() {
    try {
        const listaAPI = await conectaApi.conexao();

        listaAPI.forEach(element => listaProdutos.appendChild(
            constroiProduto(element.nome, element.preco, element.imagem)
        ));
    } catch {
        listaProdutos.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h2>`;
    }
}

listaProdutosDoBackend();