

// Crea una lista con los siguientes metodos
// 1- insert(value): inserta un nodo al inicio de la lista
// 2- append(value): inserta un nodo al final de la lista
// 3- size();
// 4- isEmpty(): true si la lista esta vacia
// 5- print(): imprime los valores de los nodos separados por un espacio
// 6- search(value): buscar un valor especifico y devolver true si se encuentra y false si no se encuentra
// 7- forEach(callback): ejecuta un callback en cada valor de la lista


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null
    }

    insert(value){

        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    append(value){

        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{

            let tail = this.tail;
            tail.next = newNode;
            this.tail = newNode;
            // let current = this.head;

            // while(current.next){
            //     current = current.next;
            // }
            // current.next = newNode;
        }
        this.length++
    }

    size(){

        if(!this.head) return 0;

        let size = 1;

        let current = this.head;

        while(current.next){
            current = current.next;
            size ++;
        }

        return size;
    }

    isEmpty(){

        if(!this.head) return true;

        return false;
    }

    print(){

        if(!this.head) return 'List empty';

        let current = this.head;
        let values = current.value;

        while(current.next){
            current = current.next;
            values += ' ' + current.value;
        }
        return values;
    }

    search(value){

        let current = this.head;

        while(current){
            if(current.value === value) return true;

            current = current.next;
        }
        return false
    }

    forEach(cb){

        if(!this.head) return `Empty list`;
        
        let current = this.head;

        while(current){
            current.value = cb(current.value);
            current = current.next;
        }
    }
}

let myList = new LinkedList();

function multiplyBy10 (value){

    return value * 10
}

myList.insert(2);
console.log(myList);


myList.insert(1);
console.log(myList);


myList.append(3);
console.log(myList);

myList.append(4);

console.log(myList.size());
console.log(myList.isEmpty());
console.log(myList.print());

console.log(myList)

console.log(myList.search(1))

console.log(myList.forEach(multiplyBy10));

console.log(myList)

let hola = null;

console.log(typeof hola === true)

