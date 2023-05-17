function factorear(num){

    let factores = [];

    let divisor = 2;

    while(num > 1){
        if(num % divisor === 0){
            num /= divisor;
            factores.push(divisor)
        }else{
            divisor++;
        }
    }
    return factores;
}

console.log(factorear(180));

function bubbleSort(array){

    let swap = true;

    while(swap){
        swap = false;

        for(let i = 1; i < array.length ; i++){

            if(array[i-1] > array[i]){
                let aux = array[i-1];
                array[i-1] = array[i];
                array[i] = aux;
                swap = true;
            }
        }
    }
    return array;
}

console.log(bubbleSort([3,2,5,7,9,5]));

function insertionSort(array){

    for(let i = 1; i < array.length ; i++){
        
        let j = i - 1;
        let aux = array[i];

        while(j >= 0 && aux < array[j]){
            array[j + 1] = array[j];
            j--;
        }
        array[j+1] = aux;
    }
    return array
}

console.log(insertionSort([3,2,5,7,9,5]))


function selectionSort(array){

    for (let i = 0 ; i < array.length -1 ; i++){

        let min = i;

        for(let j = i+1 ; j < array.length ; j++){
            if(array[j]<array[min]){
                min = j;
            }
        }
        if(i !== min){
            let aux = array[i];
            array[i] = array[min];
            array[min] = aux;
        }
    }
    return array;
}


console.log(selectionSort([3,2,5,7,9,5]));