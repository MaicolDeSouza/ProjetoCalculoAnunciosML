
const freeFreightPriceML = 79;  // Valor do produto para oferecer frete gratis ML
const freeFreightTax = 18;     // Taxa do frete gratis (R$)
const sellTax = 12; // % taxa no ML (%) 
const fixedTax = 6; // Taxa fixa caso nao tenha frete gratis (R$)

const btn = document.querySelector("#btn");

// No evento de pressionar o botao executa funcao abaixo
btn.addEventListener("click", (e) => {
    e.preventDefault();                                 // Previne o envio do formulario
    const price = document.querySelector("#name");      // Pega o valor do produto
    // Escreve o valor final na pagina com 2 digitos apos a virgula
    document.querySelector('#result').innerHTML = `Valor final = R$ ${calcPrice(price.value).toFixed(2)}`;
});

// Funcao que retorna o valor final
function calcPrice(price) {
    let finalPrice = 0;

    if (price >= freeFreightPriceML) {
        finalPrice = calcfreeFreight(price);
        return finalPrice;
    }
    else if (price < freeFreightPriceML) {
        finalPrice = calcNotfreeFreight(price);
        if (finalPrice >= freeFreightPriceML) {
            finalPrice = calcfreeFreight(price);
            return finalPrice;
        }
        return finalPrice;
    }
}

// Funcao que calcula o frete gratis
function calcfreeFreight(price) {
    let calcTax = 0;
    let calcFinalPrice = 0;
    calcTax = (Number(price) + freeFreightTax) * (sellTax / 100);
    calcFinalPrice = (Number(price) + freeFreightTax) + calcTax;
    return calcFinalPrice;
}

// Funcao que calcula o frete normal
function calcNotfreeFreight(price) {
    let calcTax = 0;
    let calcFinalPrice = 0;
    calcTax = (Number(price) + fixedTax) * (sellTax / 100);
    calcFinalPrice = (Number(price) + fixedTax) + calcTax;
    return calcFinalPrice;
}