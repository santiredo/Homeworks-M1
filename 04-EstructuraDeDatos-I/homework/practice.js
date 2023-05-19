

// CREAR UNA QUEUE

// METODOS: enqueue(elemento)
//          dequeue();
//          size();
//          isEmpty(): devuelve true si la cola esta vacia
//          print(): imprime los elementos de la cola en orden de como se encuentren
//          procesarCola(queue, callback): procesar la cola utilizando el callback para 
//                                         para realizar una operacion con cada elemento


class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){

        this.items.push(item);
    }

    dequeue(){

        return this.items.shift();
    }

    size(){
        
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    print(){

        let print = '';

        for(let i = 0; i < this.size(); i++){
            print += ' ' + this.items[i]
        }

        return print;
    }

    processQueue(callback){

        return this.items.map(callback)
    }
}

function multiplyBy4(item){

    return item * 4;
}

let myQueue = new Queue()

let array = [1,2,3,4];

console.log(array.join(''))

console.log(myQueue.isEmpty())

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)

console.log(myQueue.isEmpty())

console.log(myQueue.print())

console.log(myQueue.size())

console.log(myQueue.processQueue(multiplyBy4))



