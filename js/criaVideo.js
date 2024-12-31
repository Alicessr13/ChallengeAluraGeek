import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[produto-formulario]");
const button = document.querySelector(".limpar");

button.addEventListener('click',()=>{
    const nome = document.querySelector("[produto-nome]").value = "";
    const preco = document.querySelector("[produto-preco]").value = "";
    const imagem = document.querySelector("[produto-imagem]").value = "";
})


async function criarVideo(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[produto-nome]").value;
    const preco = document.querySelector("[produto-preco]").value;
    const imagem = document.querySelector("[produto-imagem]").value;

    try {
        await conectaApi.criaVideo(nome, preco, imagem);
    }
    catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));




