let nomes = [
    'Adamastor',
    'Bernadete',
    'Cremilda'
];

//console.log(nomes)

let frutas = [
    'abacaxi',
    'banana',
    'caqui'
];


function add(a,b,dados){
    dados = a+b;
    console.log(dados)
}

//  module.exports = nomes
//  module.exports = frutas

module.exports = {
    nomes,
    frutas,
    add
}

