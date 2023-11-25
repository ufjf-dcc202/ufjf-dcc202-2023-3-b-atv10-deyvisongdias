let joao = {
    tipo: "maçã",
    qtd: 1
}

let maria = {
    tipo: "maçã",
    qtd: 2
}

function deJoaoParaMaria() {
    maria.qtd = maria.qtd + joao.qtd;
    joao.qtd = 0;
}
function deMariaParaJoao() {
    joao.qtd = joao.qtd + maria.qtd;
    maria.qtd = 0;
}
function getMaria() {
    return maria.qtd;
}
function getJoao() {
    return joao.qtd;
}
function setMaria(value) {
    maria.qtd = value;
}

function setJoao(value) {
    joao.qtd = value;
}

export { deJoaoParaMaria, deMariaParaJoao, getMaria, getJoao, setMaria, setJoao };