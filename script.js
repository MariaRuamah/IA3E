const caixaprincipal = document.querySelector('.caixa-principal');
const caixapergunta = document.querySelector('.caixa-pergunta');
const caixaalternativa = document.querySelector('.caixa-alternativa');
const caixaresultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista da objetos (itens)
    {//abre o item
        enunciado: "Você tem uma rotina de sono saudável?",
        alternativas: [{
            texto: "Sim",
            Afirmação: "Sim, durmo cedo para conseguir completar as horas necessárias"
        },
        {
            texto: "Não",
            Afirmação: "Não, fico acordado de madrugada usando o celular"
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
        enunciado: "Você toma água na quantidade certa?",
        alternativas: [{
            texto: "Sim",
            Afirmação: "Sim, tomo todos os dias mais de 2L"
        },
        {
            texto: "Não",
            Afirmação: "Não, esqueço de tomar no dia a dia"
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
    respostas += afirmacoes +" ";
    posicao++
    mostrapergunta();
}
function mostraResultado(){
    caixapergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaalternativa.textContent = "";
}
mostrapergunta();    