const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 O que você mais gosta no Yvone ?",
        alternativas: [
            {
                texto: "De tudo",
                afirmacao: "1 Parabens você gosta de estudar pelo jeito, "
            },
            {
                texto: "Comer e ver os parceiros",
                afirmacao: "1 Ta precisando de uma cesta basica ? pelo menos e sociavel,"
            }
        ]
    },
    {
        enunciado: "2 Qual parte da escola você mais gosta ?",
        alternativas: [
            {
                texto: "Gosta da quadra e do salão",
                afirmacao: "2 Que legal você gosta de fazer bastante coisa, "
            },
            {
                texto: "Da quadra e cantina",
                afirmacao: "2 Aparentemente temos um vagabundo entre nós,"
            }
        ]
    },
    {
        enunciado: "3 Vem pra escola como ?",
        alternativas: [
            {
                texto: "A pé pois minha mãe nao me traz",
                afirmacao: "3  Sua mãe ta certa em nao criar folgado,"
            },
            {
                texto: "Meu papaizinho me traz",
                afirmacao: "3 Viadage em vem a pé ou de onibus vadio,"
            }
        ]
    },
    {
        enunciado: "4 Volta pra casa como ?",
        alternativas: [
            {
                texto: "Minha mamãe me buscar pra não tomar solzinho ou chuvinha",
                afirmacao: "4 Parabens você é um viadão"
            },
            {
                texto: "Vou a pé/onibus pois minha mãe trabalha",
                afirmacao: "4 Parabens você esta virando um adulto"
            }
        ]
    },
    {
        enunciado: "5 Trabalha ? (pergunta critica) ",
        alternativas: [
            {
                texto: "Não, pois tenho que fazer cursinho",
                afirmacao: "5 Cursinho e meus ovos vai trabalhar vagabundo"
            },
            {
                texto: "Sim pois quero ter minhas coisas com meu dinheiro/ ajudar a minha mãe",
                afirmacao: "5 Parabens, você é um otimo filho "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "É pra zoar se levar pro coraçao problema teu";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();1