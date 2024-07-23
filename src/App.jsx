import './App.css';

//DECLARADAS Ou NOMEADAS
console.log('saudacao: ', saudacao('Bora Bill')); // Saída: Olá, mundo!

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

//EXPRESSAS
//oiMundo(); //Uncaught ReferenceError: Cannot access 'oiMundo' before initialization"

const oiMundo = function() {
    console.log('oiMundo: ', "Oi, mundo!");
};

//oiMundo(); // Saída: Oi, mundo!

//Declarada
function add(x, y) {  return x + y;}
console.log("Declarada: ", add(2,2)); //4
//Anonima
console.log("Anonima: ", [2, 2].reduce(function (x, y) { return x + y; })); //4
//Arrow 
let myAdd = (x, y) => x + y;
console.log("Arrow: ", myAdd(2,2)); //4


//CONSTRUTORAS
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

console.log("pessoa1: ", pessoa1); // Saída: Pessoa { nome: 'João', idade: 25 }
console.log("pessoa2: ", pessoa2); // Saída: Pessoa { nome: 'Maria', idade: 30 }

//RECURSIVAS
function fatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log("fatorial: ",fatorial(5)); // Saída: 120


//ASYNC || Assíncronas
async function myAsyncFunction() {
  let response = await fetch('https://fakestoreapi.com/products/1');
  let data = await response.json();
  return(data);
}
console.log(myAsyncFunction());

//GENERATOR
function* iterateProperties(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        yield* iterateProperties(obj[key]);
      }
    }
  }
}


// Objeto com função 
const persona = {
  name: "Object with function",
  hello: function() {
    console.log(`Hello, I am ${this.name}!`);
  }
}

// Call the method function
persona.hello(); // Output: Hello, I am John Doe!

//commented || unused
/*
async function main() {
  const product = await myAsyncFunction();
  for (const key of iterateProperties(product)) {
    console.log(key, product[key]);
  }
}

main();
*/

document.querySelector("#app").innerHTML = saudacao('Infnet');



export default function App() {
  return (
    <h1>
     vh stringo
    </h1>
  )
}
