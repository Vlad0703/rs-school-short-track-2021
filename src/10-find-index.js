function findIndex(array, value) {
    let start = 0; 
    let end = array.length - 1; 
    let mid;
    let conf = false;
    let pos = -1;
 
    while (conf === false) {
        mid = Math.floor((start + end)/2);
        if (array[mid] == value) {
            conf = true;
            pos = mid;
        } else if (array[mid] > value) {
            end = mid - 1;
        } else if (array[mid] < value){  
            start = mid + 1;
        }
    }
    return pos;
}

module.exports = findIndex;
