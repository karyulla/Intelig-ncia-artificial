const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são as principais fontes de poluição atmosférica?",
        alternativas: [
            {
                texto: "Processos naturais",
                afirmacao: "Atividades como erupções vulcânicas, tempestades de poeira e liberação de gases pelos oceanos, também contribuem para a poluição do ar."
            },
            {
                texto: "Processos humanos",
                afirmacao: "A poluição atmosférica causada por atividades humanas vem principalmente da queima de combustíveis fósseis, indústrias, agricultura e desmatamento, liberando poluentes que prejudicam a saúde e o meio ambiente."
            }
        ]
    },
    {
        enunciado:"Como a poluição atmosférica afeta na saúde humana? "
        alternativas: [
            {
                texto: " Doenças respiratórias e cardiovasculares"
                afirmacao: "A inalação de poluentes como material particulado pode causar ou agravar doenças respiratórias, como asma e DPOC, E aumentar os riscos de problemas cardiovasculares,como ataques cardíacos e derrames."
            },
            {
                texto: "Impacto no sistema nervoso central"
                afirmacao: "A esposição prolongada a poluentes pode causar danos ao cérebro, levando a declínio cognitivo, aumento de risco de doenças neurodegenerativas como alzheimer e parkinson, e transtorno de desenvolvimento em crianças." 
        ]
    },
    {
        enunciado: "Quais são os efeitos da poluição atmosférica no meio ambiente?"
        alternativas: [
            {
                texto: "Alteração climática"
                afirmacao: "Poluentes como CO2 e metano contribuem para o aquecimento global, causando mudanças climáticas e impactando ecossistemas."
            },
            {
                texto: "Acidificação dos ecossistemas"
                afirmacao: "Gases como SO2 e NOx formam chuva ácida, que podem danificar solos, corpos d'água e vegetação."
          
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();