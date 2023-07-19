/* CONECTA API */

//Arquivo com todo o código responsável pela conexão com a API


//Função que conecta com a API e retorna o resultado convertido com JSON
async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

//Exporta a variável
export const conectaApi = {
    listaVideos
}