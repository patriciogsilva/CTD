//1. !true
console.log(!true) // false

//2. !false
console.log(!false) // true

//3. !!false
console.log(!!false) // false

//4. !!true
console.log(!!true) // true

//5. !1
console.log(!1) // false

//6. !!1
console.log(!!1) // true

//7. !0
console.log(!0) // true

//8. !!0
console.log(!!0) // false

//9. !!""
console.log(!!"") // false

//10. 
let x = 5;
let y = 9;

console.log(x < 10 && x!==5) //false
console.log(x>9 || x===5) //true
console.log(!(x===y)) //true

// Ex2. O que cada expressão retorna?

// Questão 01
let x1 = 10
let y1 = "a"

console.log(y1==="b" || x1 >= 10) // true

// Questão 02
let x2=3
let y2=8

console.log(!(x2 == "3" || x2 === y2) && !(y2 !== 8 && x2 <= y2)) //false

// Questão 03
let str = ""
let msg = "haha!"
let eBonito = "false"

console.log(!((str || msg) && eBonito)) // false




