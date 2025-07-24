function caucular (){
const form = document.getElementById("formulario")
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
  
  });
let opçaoe = document.getElementById("opçao")
let opcao = opçaoe.value
let vUSA = 5.00
let vEUR = 6.00
let vLIB = 7.00

let valorReais = parseFloat(document.getElementById("reais").value);
 switch (opcao) {
    case "Usa":
      total = valorReais * vUSA;
      break;
    case "Eur":
      total = valorReais * vEUR;
      break;
    case "Lib":
      total = valorReais * vLIB;
      break;
  }
let h4 = document.getElementById("resultado")
h4.textContent = total
}
