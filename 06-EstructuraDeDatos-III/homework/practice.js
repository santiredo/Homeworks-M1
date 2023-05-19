

// Crear una clase 'BinaryTree' que tenga el siguiente metodo:

//  insert(value):  -Si el arbol esta vacio el nuevo nodo se convierte en raiz
//                  -Si el arbol tiene nodos se siguen las siguientes reglas:
//                          -si es menor se coloca en el subarbol izquierdo
//                          -si es mayor se coloca en el subarbol derecho

//  printInOrder(): -Imprimir los valores del arbol de forma ascendente utilizando inorder


class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value){
        let newNode = new BinaryTree(value);

        if(!this.value) return this.value = newNode;

        if(!this.left && value < this.value) return this.left = newNode;
        if(!this.right && value > this.value) return this.right = newNode;

        if(this.left && value < this.value) return this.left.insert(value);
        if(this.right && value > this.value) return this.right.insert(value);
        if(value === this.value) return `${value} is already in the BinaryTree, it wont be added twice`
    }

    printInOrder(values = []){

        let left = this.left;
        let right = this.right;

        if(left) left.printInOrder(values);

        values.push(this.value);

        if(right) right.printInOrder(values);

        return values;

    }
}

let myTree = new BinaryTree(10);

myTree.insert(6);
myTree.insert(16);
myTree.insert(3);
myTree.insert(8);
myTree.insert(14);
myTree.insert(18);
myTree.insert(1);
myTree.insert(5);
myTree.insert(7);
myTree.insert(9);
myTree.insert(12);
myTree.insert(11);
myTree.insert(13);
myTree.insert(17);
myTree.insert(19);
myTree.insert(2);
myTree.insert(0);
myTree.insert(4);
myTree.insert(15);

console.log(myTree.insert(10))

console.log(myTree);

console.log(myTree.printInOrder())