/* BUSCAR VÍDEO - Lógica para buscas dos vídeos usando a url*/

//Importação da Const API.
import { conectaApi } from "./conectaApi.js";

//Importação da função "Constroi card".
import constroiCard from "./mostrarVideos.js";

//Função assíncrona "Buscar Video" que espera que a promisse seja resolvida. Esta recebe o evento do click no botão de pesquisa.
async function buscarVideo(evento){
    try{
        //Previne que a página seja recarregada no ato da busca
        evento.preventDefault();

        //Recebe o valor digitado no input de busca
        const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

        //Aguarda a resolução das promisses
        const busca = await conectaApi.buscaVideo(dadosDePesquisa);

        //Captura a lista de vídeos do HTML.
        const lista = document.querySelector("[data-lista]");

        //Enquanto a lista tiver um primeiro filho (enquanto ele tiver um vídeo na lista), apaga este filho e repete até acabar a lista.
        while (lista.firstChild){
            lista.removeChild(lista.firstChild);
        }

        //Para cada resultado obtido pela busca (cada vídeo), cria um card (filho) reaproveitando a função "Constrói Card" usando os parâmetros de título, descrição, URL e imagem.
        busca.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

        //Validação de acordo com o tamanho da lista. Se o tamanho da lista for igual a 0 (não houver resultados na pesquisa), exibe a mensagem de erro.
        if (busca.length == 0){
            lista.innerHTML = `<h2 class = "mensagem__titulo">Não existem vídeos com esse termo</h2>`;
        }

    } catch {
        lista.innerHTML = `<h2 class = "mensagem__titulo">Ocorreu um erro na pesquisa. Por favor, recarregue a página e tente novamente.</h2>`;
    }
}

//Constante "Botão de pesquisa" que captura o botão de pesquisar do HTML.
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

//Event Listener que ativa a função "Buscar Video" no ato de um click no botão de pesquisa.
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));