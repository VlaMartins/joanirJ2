function inserirNome(){ //nome da função
   let nomeUsuario = prompt("Qual seu nome?"); 
   //nome da variavel, o sinal de = (igual) representa que a partir de agora ele vai receber outros valores prompt (cria um quadro de texto na tela com msg)
   let elemento = document.querySelector("#nome-usuario"); //
   elemento.textContent = nomeUsuario;