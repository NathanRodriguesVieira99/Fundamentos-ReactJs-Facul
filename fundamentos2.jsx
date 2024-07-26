//Declaração de 5 diretivas com diferentes valores primitivos 
let numerica = 100;
let texto = "Texto";
const isBoolean = true;
let vazia = '';
let stringTxt = 'Aula 2024.3T';


//Declaração de um objeto
const pessoa = {
  nome: "Kennedy",
  idade: 25,
  cidade: "São Paulo",
  saudacao: function(){
    //retornando um template string
    return `Olá, meu nome é ${this.nome}!`;
  }
}

//spread operator

let pessoa2 = {...pessoa, profissao: "Desenvolvedora" }
pessoa2['nome'] = "Ana";
console.log(pessoa2);


//Declaração de um array
const numeros = [1, 2, 3, 4, 5];
const carros = ['Gol', 'Corsa', 'Celta', 'Fusca'];
const carros2 = ['BMW', 'Ferrrari', 'Buggati', 'Lamborghini'];

let carrosSpread = [...carros, ...carros2];

console.log(carrosSpread);

//adicionando valores no array
numeros.push(6);
numeros.push("Teste");

//remoção do último valores no array
numeros.pop();

//remoção de um elemento especifico pelo seu indice (index) no array
//array.splice(indice, quantidade de elementos)
numeros.splice(2, 1);

//remoção de um elemento especifico no array 
const indexRemover = carros.findIndex((nome) => nome === 'Fusca');
console.log('Indice Fusca:', indexRemover);

carros.splice(indexRemover, 1);
console.log(carros);


//CONDICIONAIS

const maiorIdade = 18;

//IF-ELSE

if (pessoa.idade >= 18){
  console.log(`${pessoa.nome} é maior de idade`)
} else {
  console.log(`${pessoa.nome} é menor de idade`)
}


//SWITCH

let nomeCarro = 'Celta';


switch (nomeCarro) {
  case "Gol": 
    console.log(' Carro Gol');

  break;

  case "Celta":
    console.log('Carro Celta');

  default:
    console.log(`Carro default ${nomeCarro}`); 

}



//LOOPS

//filter p/ numeros
let resultNumeros = numeros.filter(
  (numero) => numero !== 4
);
console.log(resultNumeros);

//filter por expressão 
const milhares = [1000, 2000, 3, 4000, 5000];
let resultMilhares = milhares.filter(
  (numero) => numero > 999
);
console.log(resultMilhares);


//for
for (let i = 0; i < numeros.length; i++){
  console.log("Loop for: ", numeros[i])
};

//foreach
numeros.forEach(numero => {
  console.log("Número:", numero);
})



//ARROW FUNCTIONS
function soma(a, b){
  return a + b;
}
const somaArrow = (a, b) => a + b;

console.log(soma(3, 3));

const saudar = nome => `Olá, ${nome}!`;
console.log(saudar("Pedro"));


