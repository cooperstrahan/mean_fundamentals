function binarySearch(arr, val){
    L = 0;
    U = arr.length-1;
    while(L <= U){
        
        M = Math.floor((L+U)/2)
        if (arr[M] < val){
            L = M+1;
        } else if (arr[M] > val){
            U = M-1;
        } else if (arr[M] == val){
            return M;
        } 
    }
    return -1;
}
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));