//Relação com os elementos HTML
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const resultado = document.getElementById("resultado");
const bsoma = document.getElementById("bsoma");


valor1.addEventListener("input", ()=> {

    resultado.innerText = valor1.value;
});

valor2.addEventListener("input", ()=> {

    resultado.innerText += valor2.value;
});

bsoma.addEventListener("click", ()=> {

    resultado.innerText += " + ";
});