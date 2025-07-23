import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functions.js";
test("capitalize", ()=>{
    let inputs = [["nancy", "Nancy"], ["jack", "Jack"], ["samy", "Samy"], ["luke", "Luke"]]
    inputs.forEach(input=>{
        expect(capitalize(input[0])).toBe(input[1]);
    })
});
test("reverseString", ()=>{
    let inputs = [["nancy", "ycnan"], ["jack", "kcaj"], ["samy", "ymas"], ["luke", "ekul"]]
    inputs.forEach(input=>{
        expect(reverseString(input[0])).toBe(input[1]);
    })
});
test("calculator", ()=>{
    expect(calculator.add(1,15)).toBe(16);
    expect(calculator.subtract(100,20)).toBe(80);
    expect(calculator.divide(100,20)).toBe(5);
    expect(calculator.multiply(15,2)).toBe(30);
});
test("caesarCipher", ()=>{
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
test("analyzeArray", ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
     expect(analyzeArray([-5, -10, -3])).toEqual({
        average: -6,
        min: -10,
        max: -3,
        length: 3
      });
})
