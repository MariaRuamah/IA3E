const caixaprincipal = document.querySelector('.caixa-principal');
const caixapergunta = document.querySelector('.caixa-pergunta');
const caixaalternativa = document.querySelector('.caixa-alternativa');
const caixaresultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista da objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            Afirmação: "Ela pode ajudar em muitas coisas"
        },
        {
            texto: "Não",
            Afirmação: "Ela pode ser perigosa e causar muitos danos futuramente"
        }
        ]
    },
    {
        enunciado: "Você pratica esportes?",
        alternativas: [{
            texto: "Sim",
            Afirmação: "É algo importante para saúde"
        },
        {
            texto: "Não",
            Afirmação: "Não vejo importância"
        }
        ]
    },
    {
        enunciado: "Você gosta de ler livros?",
        alternativas: [{
            texto: "Sim",
            Afirmação: "Amo ler livros e as histórias deles me divertem"
        },
        {
            texto: "Não",
            Afirmação: "É muito chato e entediante"
        }
        ]
    },
    {
        enunciado: "Você se alimenta bem?",
        alternativas: [{
            texto: "Sim",
            Afirmação: "Alimentação saudável é essencial"
        },
        {
            texto: "Não",
            Afirmação: "Como qualquer comida fácil e rápida de fazer"
        }
        ]
    }
]
let posicao = 0;
let perguntaatual;
let respostas = "";

function mostrapergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaatual = perguntas[posicao];
    caixapergunta.textContent = perguntaatual.enunciado;
    caixaalternativa.textContent = " ";
    mostraAlternativas()
}


function mostraAlternativas() {
    for (const alternativa of perguntaatual.alternativas) {
        const botaoalternativas = document.createElement("button");
        botaoalternativas.textContent = alternativa.texto;
        botaoalternativas.addEventListener("click", () => respostasSelecionadas(alternativa))
        caixaalternativa.appendChild(botaoalternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.Afirmação;
    respostas = afirmacoes;
    posicao++
    mostrapergunta();
}
function mostraResultado(){
    caixapergunta.textContent = "Ao longo dos anos...";
}
mostrapergunta();    