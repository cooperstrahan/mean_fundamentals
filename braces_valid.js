function bracesValid(str){
    if (str.length <= 1){
        return false;
    }
    let matchingOpeningBracket, ch
    let stack = []

    let openingBrackets = ['[','{','(']
    let closingBrackets = [']','}',')']

    for (i=0; i <str.length; i++){
        ch = str[i];
        
        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
            if (stack.length ==0 || (stack.pop() != matchingOpeningBracket)){
                return false
            }
        } else {
            stack.push(ch)
        }
    }

    return (stack.length == 0)
}

console.log(bracesValid("([)]")) // false
console.log(bracesValid("()")) // true
console.log(bracesValid("{}[]()")) // true
console.log(bracesValid("{[}]")) // false
console.log(bracesValid("{[}]")) // false
console.log(bracesValid("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")) // true
console.log(bracesValid("{}[]()")) // true
