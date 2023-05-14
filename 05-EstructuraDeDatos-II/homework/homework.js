'use strict';

const TemplatePassthroughManager = require("@11ty/eleventy/src/TemplatePassthroughManager");

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;

  - remove: elimina el último nodo de la lista y retorna su valor
      (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);

  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad:
      el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo
      valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado
      como parámetro del callback, retorne true. 

  EJEMPLO 
    search(3) busca un nodo cuyo valor sea 3;

    search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un
      número par, busca un nodo cuyo valor sea un número par.

    En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  let newNode = new Node(value);  

  if(!this.head){
    this.head = newNode;
    this.length++;
    return `LinkedList.length: ${this.length}, newNode.value: ${newNode.value}`;
  }

  let current = this.head
  while(current.next){
    current = current.next;
  }

  current.next = newNode;
  this.length++;
  return `LinkedList.length: ${this.length}, newNode.value: ${newNode.value}`;
}

LinkedList.prototype.remove = function() {

  if(this.length === 0){
    return null;
  }else if(this.length === 1){
    let deleted = this.head;
    this.head = null;
    this.length--;
    return deleted.value;
  }else {
    let current = this.head;
    while(current.next.next){
      current = current.next;
      
    }
    let deleted = current.next;
    current.next = null;
    this.length--
    return deleted.value;
  }
}

LinkedList.prototype.search = function(e){
  if(typeof e === 'function'){
    let current = this.head;
    
    if(e(current.value)){
      return current.value;
    }
    while(current.next){
      current = current.next;
      if(e(current.value)){
        return current.value;
      }
    }
    return null;      
  }else{
    let current = this.head;
    let count = 0;
    while(count < this.length){
      if(current.value === e){
        return current.value;
      }
      count ++;
      current = current.next;
    }
    return null;
  }
}


function esPar(num){
  if(num % 2 === 0 && num != 0){
    return true
  }return false
}
/* console.log(typeof e === 'function')
 */
let lista = new LinkedList();
let obj = {
  nombre:'santi',
  edad:21
}

lista.add(1);
lista.add(3);
lista.add(5);
lista.add(5);
/* console.log(lista.add(3)); */
lista.add(obj);
lista.add('santi');
lista.add(7);
lista.add(esPar);
lista.remove();
console.log();
/* console.log(lista.search(e)) */


/* EJERCICIO 2
Implementar la clase HashTable.
  Nuestra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros;
  es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor
  (por ejemplo, {instructora: 'Ani'}).

Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests,
  a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por
  parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:

  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético,
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula
  el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en
  la que se almacenará el dato.

  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash,
  y almacena todo el conjunto en el bucket correcto.

  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.

  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna
    un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya
hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par
clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.buckets = [];
  /* this.buckets[34] = null; */
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(key){

  // declaro la variable donde voy a sumar el codigo numerico de cada caracter
  let sumCodes = 0;

  // recorro el string que recibi por parametro, calculo el codigo numerico de cada caracter
  // y lo sumo al ultimo resultado de "sumCodes"
  for(let i = 0 ; i < key.length ; i++){
    sumCodes += key.charCodeAt(i);
  }

  // realizo la operacion para determinar la posicion que ocupara el valor pasado por parametro
  let position = sumCodes % this.numBuckets;

  return position;
}

HashTable.prototype.set = function(key, value){

  //si los valores recibidos no son string devolvemos un error
  if(typeof key !== 'string'){
    throw TypeError ('Key must be strings');
  }

  // hasheamos la clave invocando al metodo hash
  let position = this.hash(key);


  // almacenamos el conjunto 'key-value' en la posicion correcta:
  
  // pregunto si la posicion recibida mediante el metodo .hash() ya es un objeto
  if(this.buckets[position] === undefined){
    //si ya es un objeto le asigno un nuevo par calve valor
    this.buckets[position] = {
      [key] : value
    };

  }else{
    // si no es un objeto lo creo asignandole el par clave valor
    this.buckets[position][key] = value;
  }

  return this.buckets[position];
}

HashTable.prototype.get = function(key){

  if(typeof key !== 'string'){
    throw TypeError ('Keys must be strings');
  }

  // guardo en una variable la posicion que deberia de estar ocupando el valor de la clave recibida por parametro
  let position = this.hash(key);

  // retorno el valor que corresponde a la key recibida por parametro
  return this.buckets[position][key];
}

HashTable.prototype.hasKey = function(key){

  if(typeof key !== 'string'){
    throw TypeError ('Key has to be strings');
  }


  // guardo en una variable la posicion que deberia de estar ocupando el valor de la clave recibida por parametro
  let position = this.hash(key);

  // pregunto si en esa posicion hay un objeto
  if(typeof this.buckets[position] !== 'object'){
    return false;
  } else if(this.buckets[position][key]){
    return true;
  }return false;

}

let table = new HashTable();

let key = 'instructor';
let value = 'santi';
let key2 = 'instrucrot';
let value2 = 'nico';

let key3 = 'instructor';
let value3 = 'nico';


console.log(table.hash(key))

console.log(table.set(key, value))

console.log(table.set(key2, value2))

console.log(table.set(key3, value3))


console.log(table)

/* let objeto = {
  santi: 'santi',
  nico: 'nico',
  jose: 'jose'
};

if(objeto.josef){
  console.log(true)
}else{
  console.log(false)
} */

/* console.log(typeof objeto === 'object')
 */
/* table.set(key, value);

console.log(table);

table.set(key2, value2)
let key3 = 'profesor'
let value3 = 'nico'

console.log(table.hasKey(key3))

console.log(table.get('instructor')) */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
