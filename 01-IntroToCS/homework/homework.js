"use strict";

function BinarioADecimal(num) {

  let arrNum = num.split('').reverse();
  let sumas = [];
  let resultado = 0;

  for (let i = 0; i < arrNum.length ; i++) {
     let pow = (2**i)*arrNum[i];
     sumas.push(pow);
  }
  for (let i = 0 ; i < sumas.length ; i++) {
     resultado += sumas[i];
  }
  return resultado;
}

function DecimalABinario(num) {

  let binario = [];
  let div = num;
  let resto;
  
  if(num == 0){
     binario.push(0);
  }

  while (div > 0){
     
     if (div % 2 === 1){
        resto = div % 2;
        binario.unshift(resto);
        div /= 2;
        div -= 0.5;
     } else{
        resto = div % 2;
        binario.unshift(resto);
        div /= 2;
     }
  }
  return binario.join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
