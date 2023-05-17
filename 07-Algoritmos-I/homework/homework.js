'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let array = [1];     // (156) (78) (26) (13) (1)
  let j = 5;

  bucleWhile:
  while(num > 1){

    if(num % 2 === 0){

      array.push(2);
      num /= 2;
      /* continue bucleWhile; */
    }
    if(num % 3 === 0){

      array.push(3);
      num /= 3;
      /* continue bucleWhile; */
    }
    for(let i = 2; i <= Math.floor(j/2); i++){

      if(j % i === 0){
        j++;
        continue bucleWhile;
      }
      if(j % i !== 0){
        if(num % j === 0){
          array.push(j);
          num /= j;
        }else{
          j++;
          continue bucleWhile;
        }
      }
    }
  }
  array.sort((a,b) => a - b)
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  bucleWhile:  
  while(true){

    for(let i = 0 ; i < array.length ; i++){

      if(array[i] > array[i+1]){

        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
      }
    }
    for(let j = 0 ; j<array.length ; j++){

      if(array[j] > array[j+1]){

        continue bucleWhile;
      }
    }
    break;
  }
  return array
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i = 1; i < array.length ; i++){
    for(let j = 0; j <= i ; j++){
      if(array[i] < array[j]){
        
        let aux = array[j];
        array[j] = array[i];
        array[i] = aux;
        
      }
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i = 0 ; i < array.length ; i++){

    let min = array[i];

    for(let j = i+1 ; j < array.length ; j++){

      if(array[j] < min){
        min = array[j];
      }
    }

    let index  = array.indexOf(min);
    let aux = array[i];
    array[i] = min;
    array[index] = aux;
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
