
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const corUsuario = document.querySelector('.trocarSkin');


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => { 
        evento.preventDefault();
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
       atualizaEstatisticas(evento.target.dataset.peca);
    })
});

function manipulaDados (operacao, controle){
    const peca = controle.querySelector("[data-contador]")
    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
        if(peca.value < 0) {
            peca.value = 0;
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas (peca) {
    //console.log(peca)
    estatisticas.forEach((item) => {
        item.textContent = parseInt(item.textContent) + pecas[peca][item.dataset.estatistica]
    })
}

corUsuario.addEventListener("click", (cor) => {
    cor.preventDefault();
    var corEscolhida = prompt('Escolha uma cor.');
    if(corEscolhida == "amarelo"){document.querySelector(".robo").src="img/robotronAmarelo.png"}
    else if(corEscolhida == "azul"){document.querySelector(".robo").src="img/robotronAzul.png"}
    else if(corEscolhida == "rosa"){document.querySelector(".robo").src="img/robotronRosa.png"}
    else if(corEscolhida == "branco"){document.querySelector(".robo").src="img/robotronBranco.png"}
    else if(corEscolhida == "preto") {document.querySelector(".robo").src="img/robotronPreto.png"}
    else if(corEscolhida == "vermelho"){document.querySelector(".robo").src="img/robotronVermelho.png"}
    else {
        alert("Por favor, escolha amarelo, azul, branco, preto, rosa ou vermelho.")
    }
})


