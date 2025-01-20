function sumRange(n){
    if(n <= 1){
        return 1;
    } else {
        return n + sumRange(n - 1);
    }
};

function power(base, exponent){
    if(exponent === 0){
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
};

function factiorial(n){
    if(n === 1){
        return 1;
    } else {
        return n * factiorial(n - 1);
    }
};

function all(array, callback){
    let copy = copy || array.slice;

    if(copy.length === 0){
        return true;
    }

    if(callback(copy[0])){
		copy.shift();
		return all(copy, callback);
	} else {
		return false;
	}
};

function productOfArray(array){
    if(array.length === 0){
        return 1;
    } else {
        return array.shift() * productOfArray(array);
    }
};

function contains(object, searchValue) {
    if (typeof object !== "object" || object === null) {
      return object === searchValue;
    }
  
    for (const value of Object.values(object)) {
      if (contains(value, searchValue)) {
        return true;
      }
    }
    return false;
};

function replicate(times, number){
    if(times <= 0){
        return [];
    } else {
        return [number].concat(replicate(times - 1, number));
    }
};

function sumSquare(array){
    let total = 0;
    if(array.length === 0){
        return 0;
    } else {
        for(let i = 0; i < array.length; i++){
            if(Array.isArray(array[i])){
                total += sumSquare(array[i]);
            } else {
                total += array[i] * array[i];
            }
        }
        return total
    }
};

function isInteger(array){
    
    if(array.length === 0){
        return 0;
    }

    let total = 0;
    let first = array.shift()

        if(Array.isArray(first)){
            total += isInteger(first);
    }   else if(Number.isInteger(first)){
            total += 1;
    }

        return total + isInteger(array);
};

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
};

function fibs(number){
    let array = [0, 1];

    for(let i = 1; i < array.length; i++){
        if(array.length === parseInt(number)){
            return array;
        } else {
            array.push(parseInt(array[i]) + parseInt(array[i - 1]));
        }
    }
};

function fibsRec(number){
    if(number < 2){
        return array
    } else {
        fibsRec(number - 1) + fibsRec(number - 2);
    }   
};

function protoMergeSort(array){
    let divide = Math.floor(array.length / 2);
    let left = [];
    let right = [];
    let sortedArray = [];
    
    function leftSplit(){
        for(let i = 0; i < array.length; i++){
            if(left.length === divide){
                leftSplit(left)
            } else if(left.length === 2){
                return
            } else {
                left.push(array[i])
            }
        }
    };

    function rightSplit(){
        for(let i = divide; i < array.length; i++){
            if(right.length === 2){
                return
            }else if(right.length !== 2){
                right.push(array[i]);
            } else {
                rightSplit(right);
            }
        } 
    };

    function sort(){
        sortedArray.push(left[0]);
        sortedArray.push(right[0]);

        if(sortedArray[0] > sortedArray[1]){
            [sortedArray[0], sortedArray[1]] = [sortedArray[1], sortedArray[0]];
        }
    }
    
    leftSplit();
    rightSplit();
    
    console.log(left, right);
};

//Merge Sort
function mergeSort(array){
    const divide = Math.floor(array.length / 2);
    let left = array.slice(0, divide);
    let right = array.slice(divide);

    if(array.length < 2){
        return array
    };

    return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right){
    const sorted = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    
    return [...sorted, ...left, ...right];
};