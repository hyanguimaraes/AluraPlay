/* CONECTA API - Arquivo com todo o código responsável pela conexão com a API.*/

//Função que conecta com a API e retorna o resultado convertido com JSON.
async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

//Função assíncrona que faz uma conexão com a API e cria uma requisição POST.
async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        //Altera o método de conexão de GET para POST.
        method: "POST",
        headers: {
            //Especifica o tipo de arquivo que está sendo enviado.
            "content-type": "application/json"
        },
        //Envio de uma requisição de um objeto como string no body.
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    
    if (!conexao.ok) {
        throw new Error ("Não foi possível enviar o vídeo");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;        
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

//Exporta as vaiáveis
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
