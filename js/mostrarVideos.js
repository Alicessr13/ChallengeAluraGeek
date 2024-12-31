import { conectaApi } from "./conectaApi.js";

const listaProdutos = document.querySelector("[data-lista-produtos]");

export default function constroiProduto(nome, preco, imagem, id) {
    const produto = document.createElement("div");
    produto.className = "imagem";
    produto.dataset.id = id

    produto.innerHTML = `
        <figure>
            <img src="${imagem}" alt="Imagem do produto ${nome}">
            <h3>${nome}</h3>
            <div class="container-valor">
                <div>
                    $ <span>${preco}</span>
                </div>
                <img src="assets/trash.svg" alt="Remover produto" class="img-remover">
            </div>
        </figure>
    `;

    const btnRemover = produto.querySelector(".img-remover");
    btnRemover.addEventListener("click", async () => {
        try {
            await conectaApi.deletaProduto(id); // Chama a API para excluir o produto
            produto.remove(); // Remove o produto da interface
        } catch (e) {
            alert(e);
        }
    });

    return produto;
}



async function listaProdutosDoBackend() {
    try {
        const listaAPI = await conectaApi.conexao();

        listaAPI.forEach(element => listaProdutos.appendChild(
            constroiProduto(element.nome, element.preco, element.imagem, element.id)
        ));
    } catch {
        listaProdutos.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h2>`;
    }
}

listaProdutosDoBackend();