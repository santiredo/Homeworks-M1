// LINKED LIST

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

{
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
}



//HASH TABLE

class HashTable {
    constructor(){
        this.buckets = [];
        this.numBuckets = 35;
    }

    hash(key){
        let hash = 0;

        for(let i = 0 ; i < key.length ; i++){
            hash += key.charCodeAt(i);
        }
        let position = hash % this.numBuckets;

        return position;
    }

    set(key, value){
        if(typeof key !== 'string') throw TypeError ('Key must be strings');

        let position = this.hash(key);

        if(!this.buckets[position]){
            this.buckets[position] = {
                [key] : value
            };
        }else{
            this.buckets[position][key] = value;
        }
        return this.buckets[position];
    }

    get(key){
        if(typeof key !== 'string') throw TypeError ('Keys must be strings');

        let position = this.hash(key);

        return this.buckets[position][key];
    }

    hasKey(key){
        if(typeof key !== 'string') throw TypeError ('Key has to be strings');

        let position = this.hash(key);

        if(typeof this.buckets[position] !== 'object') return false;
        if(this.buckets[position][key]) return true;
        return false;
    }
}

let newTable = new HashTable();

let obj1 = {
    name: 'santi',
    instructor: 'nico'
}
newTable.set(Object.keys(obj1).join(''), obj1.name)

console.log(newTable.hash('name'));

console.log(newTable)