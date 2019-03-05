function maxMinAvg(arr) {
    max = arr[0];
    min = arr[0];
    sum = 0;
    for(i=1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }
        sum += arr[i]
    }
    avg = sum/arr.length
    return "The max is "+String(max)+ " The min is "+String(min)+ " The average is "+String(avg)
}

console.log(maxMinAvg([1, -2, 9, 4]));