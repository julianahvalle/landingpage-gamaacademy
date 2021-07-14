//elementos do querySelector

const inputEmail = document.querySelector("input")
const saveEmail = document.querySelector("button")

//função de salvar e-mail com eventListener
saveEmail.addEventListener("click", function(e) {

//impede de dar refresh no browser (depende da function (e) e do eventListener) 
  e.preventDefault();

//variável que vai armazenar o array de e-mails
  let emailRegister = new Array()

//verificar se a propriedade existe, se sim, converter string para objeto
if (localStorage.getItem("emailRegister")) {
   emailRegister = JSON.parse(localStorage.getItem("emailRegister"))
} //necessário analisar o (parse) do objeto retornado 


//adiciona novo valor a um array criado
 emailRegister.push({email: inputEmail.value})


//salva o item no localStorage 
 localStorage.setItem("emailRegister", JSON.stringify(emailRegister))


})

