'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length > 1){

    let pivot = array[Math.floor(Math.random() * array.length)];
    let lowers = [];
    let highers = [];

    array.splice(array.indexOf(pivot), 1)

    while(array.length > 0){
      
      if(array[0] < pivot){

        lowers.push(array[0]);
      }else{

        highers.push(array[0]);
      }
      array.splice(0,1);  

    }
    pivot = [pivot]

    if(lowers.length > 1 || highers.length > 1){
      return quickSort(lowers).concat(pivot, quickSort(highers));

    }
    return lowers.concat(pivot, highers);

  }else{
    return array;
  }
}

let arr = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

console.log(arr.splice(0,2))


console.log(quickSort([9,3,5,10,7,7,4,2,8,6,1]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let mid = Math.floor(array.length/2);

  let left = array.slice(0, mid);
  let right = array.slice(mid);

  console.log(left, right);

  if(left.length >= 2){
    left = mergeSort(left);     // [2]  [1]
  }
  if(right.length >= 2){
    right = mergeSort(right);
  }

  let merged = [];

  while(left.length > 0 && right.length > 0){

    if(left[0] < right[0]){
      merged.push(left[0]);
      left.splice(0,1)
      console.log(left);
    }else{
      merged.push(right[0]);
      right.splice(0,1);
    }
  }
/* 
  merged = merged.concat(left, right); */

  return merged.concat(left, right);;
}

let arraw = [1,2,3];

arraw.splice(0);
console.log(arraw)

console.log(mergeSort([2,1,2,6,5,8,12,17,6,5,7,3]));

// [9]   [3,6,8]
// [2,]

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
