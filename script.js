function inserirNome() { //nome da função
   let nomeUsuario = prompt("Qual seu nome?");
   //nome da variavel, o sinal de = (igual) representa que a partir de agora ele vai receber outros valores prompt (cria um quadro de texto na tela com msg)
   let elemento = document.querySelector("#nome-usuario");
   //estou dizendo pra variavel armazenar uma palavra. Vai la no html e encontre e selecione algo específico, no caso selecione aquele que tem o id chamado nome-usuario (chama igual no css)
   // la no html esta escrito usuario, e esse texto vai ficar armazenado na variavel elemento
   elemento.textContent = nomeUsuario;
   // o conteudo do nome-usuario vai ser substituido pela variavel informada pelo usuario na primeira linha dentro da função...  UMA VARIAVEL VAI SER SUBSTITUIDA PELO CONTEUDO QUE JA ESTA ARMAZENADO EM OUTRA VARIAVEL
}

inserirNome();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// ["Vinho", "Cerveja", "Campari"];

let linguagens = ["JavaScript","Python","C"];
console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C”


const item = document.querySelector("#lista");
item.textContent = linguagens[0];
item.textContent = linguagens[1];
item.textContent = linguagens[2];



// xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx

// let estudantes = ["Enzo", "Joao", "Gabriel"];
// console.log(estudantes[0]); 
// console.log(estudantes[1]); 
// console.log(estudantes[2]); 


// const lista = document.querySelector("#estudantes");
// item.textContent = estudantes[0];
// item.textContent = estudantes[1];
// item.textContent = estudantes[2];

