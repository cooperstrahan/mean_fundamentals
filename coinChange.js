function coin_change(cents){
    coinage = {
        dollars:0,
        quarters:0,
        dimes:0,
        nickels:0,
        pennies:0
    }

    while(cents > 0){
        if (cents >= 100){
            cents -= 100;
            coinage['dollars']++;
        } else if (cents >= 25){
            cents -= 25;
            coinage['quarters']++;
        } else if (cents >= 10){
            cents -= 10;
            coinage['dimes']++;
        } else if (cents >= 5){
            cents -= 5;
            coinage['nickles']++;
        } else if (cents >= 1){
            cents --;
            coinage['pennies']++;
        }
    }
    // console.log(coinage);
    return coinage
}
console.log(coin_change(81));
console.log(coin_change(450));