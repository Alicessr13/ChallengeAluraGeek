async function conexao() {
    const conexao = await fetch("http://localhost:3000/produtos"); //espera o fetch terminar para retornar o resultado da requisição
    //fetch recebe a url da api e retorna uma promessa/promise, quando não coloca parametro e get 
    const conexaoConvertida = await conexao.json();
    //console.log(conexao);
    //console.log(conexaoConvertida);
    return conexaoConvertida;
}

async function criaVideo(nome, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST", //metodo
        headers: {
            "Content-type": "application/json" //especifica o tipo de arquivo que está sendo enviado ou recebido
        },
        body: JSON.stringify({ //corpo da requisição, enviando um objeto com valores, stringify transforma em string o que está sendo enviado
            nome: nome,
            preco: preco,
            imagem: imagem,
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o vídeo");
    }

    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível excluir o produto.");
    }
}

export const conectaApi ={
    conexao,
    criaVideo,
    deletaProduto
}