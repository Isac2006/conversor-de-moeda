function caucular (){
const form = document.getElementById("formulario")
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
  
  });
let opçaoe = document.getElementById("opçao")
let opcao = opçaoe.value
let vUSA = 5.30
let vEUR = 6.50
let vLIB = 7.80
let span = document.getElementById("conversao")

let valorReais = parseFloat(document.getElementById("reais").value.replace("R$", "").replace(",", "."));
 switch (opcao) {
    case "Usa":
      convertervalor(valorReais,vUSA,"$")
      
      break;
    case "Eur":
      convertervalor(valorReais,vEUR,"E")
      break;
    case "Lib":
    convertervalor(valorReais,vLIB,"L")
      break;
  }
  function convertervalor(amont,moeda, simbolo){

let h4 = document.getElementById("resultado")
let convertido = amont * moeda
convertido = convertido.toFixed(2)
 let total = `R$ ${convertido.toString().replace(".",",")}`
let mensagem = ` ${total}`
h4.textContent = mensagem
moeda = `  ${simbolo} ${moeda.toString().replace(".",",")}`
span.textContent = `conversão reais para ${opcao} = ${moeda}`

console.log("ola")
  }
}
const input = document.getElementById("reais");

    input.addEventListener("input", function () {
     let valorlimpo = input.value.replace(/\D/g, "");
     let valor = (valorlimpo / 100)
     valor = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
      input.value = valor;


    });
