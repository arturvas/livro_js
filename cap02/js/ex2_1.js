// cria referência ao form e ao elemento h3 (onde sera exibida a resposta)
const formulario = document.querySelector("form");
const resposta = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
formulario.addEventListener("submit", (e) => {
  const nome = formulario.inNome.value; // obtém o nome digitado no form
  resposta.innerText = `Olá ${nome}`; // exibe a resposta do programa
  e.preventDefault(); // evita o envio do form
});
