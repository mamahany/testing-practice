function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str){
    return str.split("").reverse().join("");
}
const calculator = (function(){
    function add(num1,num2){
        return num1 + num2;
    }
    function subtract(num1,num2){
        return num1 - num2;
    }
    function divide(num1,num2){
        return num1 / num2;
    }
    function multiply(num1,num2){
        return num1 * num2;
    }
    return {add, subtract, divide, multiply}
})();
function caesarCipher(str, shiftFactor){
    const isLetter = char => /^[a-zA-Z]$/.test(char);
    const isUpper = char => /^[A-Z]$/.test(char);
    function shift(char, shiftFactor){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return isUpper(char)? upperAlphabet[(upperAlphabet.indexOf(char) + shiftFactor + 26) % 26] : alphabet[(alphabet.indexOf(char) + shiftFactor + 26) % 26]
    }
    return str.split("").map(char =>{
        if(isLetter(char)){
            return shift(char, shiftFactor);
        }
        return char
    }).join("")
}
function analyzeArray(arr){
    const average = arr.reduce((acc, num) => acc + num ,0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {average, min, max, length}
}
export {capitalize, reverseString, calculator, caesarCipher, analyzeArray}