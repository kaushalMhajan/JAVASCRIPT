const obj = (a,b) => {
    const add = (a + b)
    const mul = a * b
    const divi = a / b

    return [add,mul,divi]
}

const [add,mul,divi] = obj(10,2);

console.log("sum: " + add)
console.log("mul: " + mul)
console.log("division: " + divi)