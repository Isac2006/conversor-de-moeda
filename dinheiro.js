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

let valorReais = parseFloat(document.getElementById("reais").value);
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
 let total = convertido.toString().replace(".",",")
let mensagem = `${simbolo} ${total}`
h4.textContent = mensagem
console.log("ola")
  }
}
