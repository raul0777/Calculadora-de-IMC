const form = document.querySelector("#formulario"); //Capitura o Formulario

form.addEventListener("submit", function (e) {
  //Capitura o envio
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso"); //Capitura de dados
  const inputAltura = e.target.querySelector("#altura"); //Capitura de dados

  const peso = Number(inputPeso.value); //Converte resultado para para numro
  const altura = Number(inputAltura.value); //Converte resultado para para numro

  if (!peso) {
    //Capitura o resultado falso
    setResultado("Peso invalido", false); //Mensagem falsa
    return;
  }

  if (!altura) {
    //Capitura o resultado falso
    setResultado("altura invalido", false); //Mensagem falsa
    return;
  }

  const imc = getImc(peso, altura); //Calcula o IMC
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; //Mensagem com o resultado

  setResultado(msg, true); //Mensagem verdadeira
});

function getNivelImc(imc) {
  //Lista de string
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc >= 39.9) return nivel[5]; //Adiciona a mensagem ao resultado
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  //Calculo do IMC
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  //Cria um paragrafo
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  //Recebe o resultado
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ""; //Limpa a mensagem

  const p = criaP(); //Cria um paragrafo

  if (isValid) {
    //Seleciona verdadeiro
    p.classList.add("paragrafo-resultado");
  } else {
    //Seleciona falso
    p.classList.add("bad");
  }

  p.innerHTML = msg; //Adiciona o resultado
  resultado.appendChild(p);
}
