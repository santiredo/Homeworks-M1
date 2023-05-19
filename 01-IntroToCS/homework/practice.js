function decimalToBinary(decimal) {

    decimal = Number(decimal)
    let binary = '';
  
    if (decimal === 0) {
      return '0';
    }
  
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
  
    return binary;
  }

console.log(decimalToBinary(12));

function binaryToDecimal(binary){

    let decimal = 0;
    let power = 0;
    binary = String(binary)

    for(let i = binary.length -1 ; i >= 0 ; i--){
        if(binary[i] === '1'){
            decimal += 2 ** power;
        }
        power++;
    }
    return decimal;
}

console.log(binaryToDecimal('1100'))