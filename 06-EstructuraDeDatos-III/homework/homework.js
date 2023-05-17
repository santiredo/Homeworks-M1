'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol

  - insert: agrega un nodo en el lugar correspondiente

  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol

  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
  hará el recorrido "in-order" por defecto.

  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.size = function(){
   let length = 1;
   
   if (this.left) {
      length += this.left.size();
   }

   if (this.right) {
      length += this.right.size();
   }

   return length;
}


BinarySearchTree.prototype.insert = function(value){

   if(value < this.value){
      if(this.left === null){
         this.left = new BinarySearchTree(value);
      }else{
         this.left.insert(value);
      }
   }else if(value > this.value){
      if(this.right === null){
         this.right = new BinarySearchTree(value);
      }else{
         this.right.insert(value)
      }
   }

}

BinarySearchTree.prototype.contains = function(value) {
   if(this.value === value){
      return true;
   }
   if(value < this.value && this.left) {
      return this.left.contains(value);
   }
   if(value > this.value && this.right) {
      return this.right.contains(value);
   }
   return false;
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {

   switch (order) {
  
     case "pre-order":
         cb(this.value); // imprimirValor(this.value)
         if (this.left) this.left.depthFirstForEach(cb, order);
         if (this.right) this.right.depthFirstForEach(cb, order);
         break;
 
 
     case "post-order":
         if (this.left) this.left.depthFirstForEach(cb, order);
         if (this.right) this.right.depthFirstForEach(cb, order);
         cb(this.value);
         break;
 
 
     default: //pre-order o nada...
         if (this.left) this.left.depthFirstForEach(cb, order);
         cb(this.value);
         if (this.right) this.right.depthFirstForEach(cb, order);
         break;
   }
   return arr1;
};


BinarySearchTree.prototype.breadthFirstForEach = function(cb, almacen = []) {
   cb(this.value);

   if (this.left !== null) {
      almacen.push(this.left);
   }

   if (this.right !== null) {
      almacen.push(this.right);
   }

   if (almacen.length > 0) {
      let nextNode = almacen.shift();
      nextNode.breadthFirstForEach(cb, almacen); // Llamada corregida
   }
}


/* function e(value){
   route = [];
   arr.push(value);
} */

let myTree = new BinarySearchTree(6);

myTree.insert(7);
myTree.insert(8);
myTree.insert(2);
myTree.insert(1);
myTree.insert(0);
myTree.insert(4);
myTree.insert(5);
myTree.insert(3);

let arr = [1]
let arr2 = [2];
let arr3 = [3]
let arr1 = []

console.log(myTree.depthFirstForEach(cb, "pre-order"))
/* console.log(arr.concat(arr2, arr3))

console.log(myTree) */

function cb(x) {
   arr1.push(x)
   console.log(x)

};
console.log(arr1);


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
