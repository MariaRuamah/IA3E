const caixaprincipal = document.querySelector('.caixa-principal');
const caixapergunta = document.querySelector('.caixa-pergunta');
const caixaalternativa = document.querySelector('.caixa-alternativa');
const caixaresultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista da objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você pratica esportes?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você gosta de ler livros?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você se alimenta bem?",
        alternativas: ["Sim", "Não"]
    }
]
let posicao = 0;
let perguntaatual;

function mostrapergunta(){
  perguntaatual = perguntas[posicao];
caixapergunta.textcontent = perguntaatual.enunciado;
mostraAlternativas()
}
function mostraAlternativas(){
    for (const alternativa of perguntaatual.alternativa){
        const botaoalternativas = document.createElement("button");
        botaoalternativas.textContent = alternativas;
        caixaalternativa.appendChild(botaoalternativas);
    }
}
mostrapergunta();    