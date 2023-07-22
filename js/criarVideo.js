/*Lógica para criação de vídeo na página*/

import {conectaApi} from "./conectaApi.js";

//Constante "Formulário" que captura o formulário do HTML usando um data-attribute.
const formulario = document.querySelector("[data-formulario]");

//Função "Cria Vídeo" que captura os valores digitados pelo usuário nos inputs imagem, url e título.
async function criarVideo(evento){
        evento.preventDefault();
        const titulo = document.querySelector("[data-titulo]").value;
        //Constante "Descrição" que, no momento, gera um número aleatório, arredondado para baixo e o converte em string.
        const descricao = Math.floor(Math.random()*10).toString();
        const url = document.querySelector("[data-url]").value;
        const imagem = document.querySelector("[data-imagem]").value;
    
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

//Detecta quando é clicado no botão submit do formulário e, no evento de um click, chama a função "Criar Video".
formulario.addEventListener("submit", evento => criarVideo(evento));