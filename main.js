//Relação com os elementos HTML
//Inputs (entradas de números)
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
//Botões
const bsoma = document.getElementById("bsoma");
const bdiferenca = document.getElementById("bdiferenca");
const bproduto = document.getElementById("bproduto");
const bdivisao = document.getElementById("bdivisao");
const bigual = document.getElementById("bigual");
const breset = document.getElementById("breset");
//Parágrafo que mostra o resultado
const resultado = document.getElementById("resultado");

//operação selecionada
let operacao;
//texto da operação
let textoOperacao;

//função contendo código repetitivo quando clica num botão de operação
function cliqueNoBotao() {

    valor1.disabled = true;
    valor2.disabled = false;
    valor2.style.borderColor = "green";
    valor2.style.borderWidth = "medium";
    bsoma.disabled = true;
    bdiferenca.disabled = true;
    bproduto.disabled = true;
    bdivisao.disabled = true;
    textoOperacao = resultado.innerText;
}

//função necessária ao carregar/iniciar a página ou quando resetar os componentes para novo cálculo
function aoCarregar() {

    //destaque na borda do campo valor 1
    valor1.style.borderColor = "green";
    valor1.style.borderWidth = "medium";
    //Deixando alguns elementos HTML desabilitados
    valor2.disabled = true;
    bsoma.disabled = true;
    bdiferenca.disabled = true;
    bproduto.disabled = true;
    bdivisao.disabled = true;
    bigual.disabled = true;
    breset.disabled = true;
    //O parágrafo onde mostra o resultado inicia invisível
    resultado.style.display = "none";
}

//Evento 'load' gerado ao carregar a página. Observe que está sendo aplicado no objeto 'window', que representa a janela do navegador
window.addEventListener("load", aoCarregar); //Note que usamos a função aoCarregar() como objeto

//Evento de entrada de valores para o campo valor 1
valor1.addEventListener("input", ()=> {

    resultado.innerText = valor1.value;
    resultado.style.display = "block";
    bsoma.disabled = false;
    bdiferenca.disabled = false;
    bproduto.disabled = false;
    bdivisao.disabled = false;
});

//Evento de entrada de valores para o campo valor 2
valor2.addEventListener("input", ()=> {

    resultado.innerText = textoOperacao + " " + valor2.value;
    bigual.disabled = false;
});

//Evento de clique para o botão de soma
bsoma.addEventListener("click", ()=> {

    resultado.innerText += " + ";
    operacao = 'somar';
    bsoma.style.background = "green";
    cliqueNoBotao();
});

//Evento de 'passar o mouse em cima' para o botão de soma
bsoma.addEventListener("mouseover", ()=> {

    bsoma.style.borderColor = "green";
    bsoma.style.borderWidth = "medium";
});

//Evento de 'saída do mouse' para o botão de soma
bsoma.addEventListener("mouseout", ()=> {

    bsoma.style.borderColor = "";
    bsoma.style.borderWidth = "";
});

//Evento de clique para o botão de diferença
bdiferenca.addEventListener("click", ()=> {

    resultado.innerText += " - ";
    operacao = 'subtrair';
    bdiferenca.style.background = "green";
    cliqueNoBotao();
});

//Evento de 'passar o mouse em cima' para o botão de diferença
bdiferenca.addEventListener("mouseover", ()=> {

    bdiferenca.style.borderColor = "green";
    bdiferenca.style.borderWidth = "medium";
});

//Evento de 'saída do mouse' para o botão de diferença
bdiferenca.addEventListener("mouseout", ()=> {

    bdiferenca.style.borderColor = "";
    bdiferenca.style.borderWidth = "";
});

//Evento de clique para o botão de produto
bproduto.addEventListener("click", ()=> {

    resultado.innerText += " * ";
    operacao = 'multiplicar';
    bproduto.style.background = "green";
    cliqueNoBotao();
});

//Evento de 'passar o mouse em cima' para o botão de produto
bproduto.addEventListener("mouseover", ()=> {

    bproduto.style.borderColor = "green";
    bproduto.style.borderWidth = "medium";
});

//Evento de 'saída do mouse' para o botão de produto
bproduto.addEventListener("mouseout", ()=> {

    bproduto.style.borderColor = "";
    bproduto.style.borderWidth = "";
});

//Evento de clique para o botão de divisão
bdivisao.addEventListener("click", ()=> {

    resultado.innerText += " / ";
    operacao = 'dividir';
    bdivisao.style.background = "green";
    cliqueNoBotao();
});

//Evento de 'passar o mouse em cima' para o botão de divisão
bdivisao.addEventListener("mouseover", ()=> {

    bdivisao.style.borderColor = "green";
    bdivisao.style.borderWidth = "medium";
});

//Evento de 'saída do mouse' para o botão de divisão
bdivisao.addEventListener("mouseout", ()=> {

    bdivisao.style.borderColor = "";
    bdivisao.style.borderWidth = "";
});

//Evento de clique para o botão de igual
bigual.addEventListener("click", ()=> {

    valor2.disabled = true;
    breset.disabled = false;
    let result;
    //Verificando qual operação a fazer (através do texto da operação gerado)
    if (operacao == "somar")
        result = parseFloat(valor1.value) + parseFloat(valor2.value);
    else if (operacao == "subtrair")
        result = parseFloat(valor1.value) - parseFloat(valor2.value);
    else if (operacao == "multiplicar")
        result = parseFloat(valor1.value) * parseFloat(valor2.value);
    else
        result = parseFloat(valor1.value) / parseFloat(valor2.value);

    resultado.innerText += " = " + result;    
});

//Evento de clique para o botão de resetar (reinicia todos os componentes para um novo cálculo)
breset.addEventListener("click", ()=> {

    aoCarregar();
    valor1.value = "";
    valor1.disabled = false;
    valor2.value = "";
    valor2.style.borderColor = "";
    valor2.style.borderWidth = "";
    bsoma.style.background = "";
    bdiferenca.style.background = "";
    bproduto.style.background = "";
    bdivisao.style.background = "";
    bsoma.style.borderColor = "";
    bsoma.style.borderWidth = "";
    bdiferenca.style.borderColor = "";
    bdiferenca.style.borderWidth = "";
    bproduto.style.borderColor = "";
    bproduto.style.borderWidth = "";
    bdivisao.style.borderColor = "";
    bdivisao.style.borderWidth = "";
});
