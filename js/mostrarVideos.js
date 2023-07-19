/*CÓDIGO PARA VAZER COM QUE OS VÍDEOS APAREÇAM NO DOM*/

//Importação da variável conectaAPI
import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");


//Função que cria o card para cada vídeo
function constroiCard(titulo, descricao, url, imagem){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
    `

    return video;
}

//Aguarda as promisses
async function listaVideos(){
    const listaApi = await conectaApi.listaVideos();
    //Para cada item da lista, uma <li> será criada com os dados disponíveis na API
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

listaVideos();