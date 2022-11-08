/* Você terá  variaveis sendo:
1- Preço do etanol;
2- Preço da gasolina;
3- Tipo de combustivel que está no seu carro;
4- Gasto por KM;
5- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const gastoKMLitro = 12;
const valorCombustivel = 5.79;
const distanciaViagem = 100;
const reaisinvestidos = distanciaViagem / gastoKMLitro * valorCombustivel

console.log(reaisinvestidos.toFixed(2))