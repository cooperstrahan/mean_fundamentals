function bubbleSort(arr){
    for(x = 0; x <= arr.length; x++){
        j=0;
        exit = true;
        for(i=1; i<arr.length; i++){
            if(arr[j] > arr[i]){
                exit = false;
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            j++;
            if (exit){
                return arr;
            }
        }
    console.log(arr);
    }
    return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5, 7, 6 ,8]));

// O(n)
// O(1)
// O(n)
// O(n^2)