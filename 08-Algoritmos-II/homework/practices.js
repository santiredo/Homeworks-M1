
function quickSort(array){

    if(array.length <= 1) return array;

    let pivot = array[Math.floor(Math.random()* array.length)];
    let left = [];
    let right = [];
    let equal = [];

    for(let i = 0 ; i < array.length ; i++){

        if(array[i] < pivot){
            left.push(array[i]);
        } else if(array[i] > pivot){
            right.push(array[i]);
        } else{
            equal.push(array[i]);
        }
    }
    return quickSort(left).concat(equal).concat(quickSort(right));
}

console.log(quickSort([5,2,4,3,1]));



function mergeSort(array){
    //         [5,2,4,3,1]

    if(array.length === 1) return array;

    let split = dividir(array);
    let left = split[0];  // [5,2]
    let right = split[1];  // [4,3]


    return          merge(mergeSort(left)                      ,                  mergeSort(right));
//         merge( mergeSort                   ([5,2]))         ,      mergeSort                ([4,3,1]) );
//         merge( merge (mergeSort([5]),mergeSort([2]))         ,      merge(mergeSort([4]),            mergeSort([3,1])))
//         merge( merge(     merge ([5],[2])          )         ,      merge([4],            merge(mergeSort([3]), mergeSort([1]))))
//         merge(              [2,5]                            ,     merge([4],             merge(    [3],              [1]));
//         merge(              [2,5]                            ,     merge( [4]                   ,            [1,3]))
//         merge    (          [2,5]                            ,                   [1,3,4]        )
}

function dividir(array){

    let mid = Math.floor(array.length/2);
    let left = array.slice(0,mid);
    let right = array.slice(mid);

    return [left, right];
}

function merge(left, right){

    let leftIndex = 0;
    let rightIndex = 0;

    let sortedArray = [];

    while(leftIndex < left.length && rightIndex < right.length){
        
        if(left[leftIndex] < right[rightIndex]){
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else{
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort([5,2,4,3,1]));
