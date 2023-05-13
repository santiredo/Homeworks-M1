class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
    }

    add(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;             
        }else{
            let current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    remove(){

        if (this.lenght === 0){
            return null;
        }else if(this.length === 1){
            let deleted = this.head;
            this.head = null;
            this.length--;
            return deleted.value;
        }else{
            let current = this.head;
            while(current.next.next){
                current = current.next;
            }
            let deleted = current.next;
            current.next = null;
            this.length--;
            return deleted.value
        }
    }

    search(e){
        if(typeof e === 'function'){
            let current = this.head;
            let values = [];

            if(e(current.value)){
                values.push(current.value);
            }
            while(current.next){
                current = current.next;
                if(e(current.value)){
                    values.push(current.value);
                }
            }
            return values;
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
}

let lista = new LinkedList();
lista.add('SANTI');
lista.add('NICO');
lista.add('JOSE');
lista.remove();
lista.remove();
console.log(lista.remove());

lista.add('SANTI');
lista.add('NICO');
lista.add('JOSE');

function callbackSerch(value){
    if(typeof value === 'string'){
        return true;
    }return false;
}
let obj = {
    name: 'Santi',
    age: 21,
}

lista.add(351);
lista.add(45);
lista.add('ANTONIO');
lista.add('LUCAS');
lista.add(obj);
lista.add('FRANCO');

lista.remove();
lista.remove();
lista.remove();
lista.remove();
lista.remove();
lista.remove();


console.log(lista.search(callbackSerch))



