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
let spane = document.getElementById("conversaoe")
let spanl = document.getElementById("conversaol")


let valorReais = parseFloat(document.getElementById("reais").value.replace("R$", "").replace(",", "."));
 switch (opcao) {
    case "Usa":
      convertervalor(valorReais,vUSA,"$")
      limpar(resultadoe,resultadol,spane,spanl)
      break;
    case "Eur":
      convertervalor(valorReais,vEUR,"E")
      limpar(resultado,resultadol,span,spanl)
      break;
    case "Lib":
    convertervalor(valorReais,vLIB,"L")
    limpar(resultado,resultadoe,span,spane)
      break;
      case "todos":
        convertervalortodos(valorReais,vUSA,vEUR,vLIB,"$","E","L")
        break
  }
  function convertervalortodos(amont,moeda1,moeda2,moeda3,simbolo1,simbolo2,simbolo3){
let h4 = document.getElementById("resultado")
let convertido = amont * moeda1
convertido = convertido.toFixed(2)
 let total = `R$ ${convertido.toString().replace(".",",")}`
let mensagem = ` ${total}`
h4.textContent = mensagem
moeda = `  ${simbolo1} ${moeda1.toString().replace(".",",")}`
span.textContent = `conversão dolar para reais  = ${moeda1}`

let h4e = document.getElementById("resultadoe")
let convertidoe = amont * moeda2
convertidoe = convertidoe.toFixed(2)
 let totale = `R$ ${convertidoe.toString().replace(".",",")}`
let mensageme = ` ${totale}`
h4e.textContent = mensageme
moedae = `  ${simbolo2} ${moeda2.toString().replace(".",",")}`
spane.textContent = `conversão reais para euro = ${moeda2}`

let h4l = document.getElementById("resultadol")
let convertidol = amont * moeda1
convertido = convertidol.toFixed(2)
 let totall = `R$ ${convertidol.toString().replace(".",",")}`
let mensageml = ` ${totall}`
h4l.textContent = mensageml
moedal = `  ${simbolo1} ${moeda1.toString().replace(".",",")}`
spanl.textContent = `conversão reais para libra = ${moeda3}`



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
  function limpar(li1, li2 ,sp1, sp2){ {
  li1.textContent = ""
  li2.textContent = ""
  sp1.textContent = ""
  sp2.textContent = ""


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


    })}
