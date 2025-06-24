function inserirNome(){ //nome da função
   let nomeUsuario = prompt("Qual seu nome?"); 
   //nome da variavel, o sinal de = (igual) representa que a partir de agora ele vai receber outros valores prompt (cria um quadro de texto na tela com msg)
   let elemento = document.querySelector("#nome-usuario"); //estou dizendo pra variavel armazenar uma palavra. Vai la no html e encontre e selecione algo específico, no caso selecione aquele que tem o id chamado nome-usuario
   elemento.textContent = nomeUsuario;