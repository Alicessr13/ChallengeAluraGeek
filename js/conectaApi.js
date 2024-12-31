async function conexao() {
    const conexao = await fetch("http://localhost:3000/produtos"); //espera o fetch terminar para retornar o resultado da requisição
    //fetch recebe a url da api e retorna uma promessa/promise, quando não coloca parametro e get 
    const conexaoConvertida = await conexao.json();
    //console.log(conexao);
    //console.log(conexaoConvertida);
    return conexaoConvertida;
}

export const conectaApi ={
    conexao
}