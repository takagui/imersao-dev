let dollarValueText = prompt("Qual o valor em dólar que você quer converter?");

let parsedDollarValueNumber = parseFloat(dollarValueText);

let realValue = parsedDollarValueNumber * 5.50;
let realValueDecimal = realValue.toFixed(2);

alert(realValueDecimal);
