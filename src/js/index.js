// alert('Ola Hamilton Godoi')
// console.log('Hamilton');
// console.log(document);

/*
Objetivo: quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    // console.log(botao);
    botao.addEventListener('click', () => {
        // console.log('clicou no botao');

        // - passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // - passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionaBotaoCarrossel(botao);

        // - passo 5 - esconder a imagem "ativa" de anterior
        esconderImagemAtiva();
        // console.log('ativa');

        // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
        // console.log(imagens);
        // console.log(imagens[1]);

    })
})


function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionaBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
// const botao1 = document.getElementById("botao1")
// botao1.addEventListener('click', () => {
//     console.log('clicou no botão 1');
// })













