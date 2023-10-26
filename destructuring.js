// const func = (a,b) => {
//     const add = (a + b)
//     const mul = a * b
//     const divi = a / b

//     return [add,mul,divi]
// }
// const [addition,multiplication,division] = func(10,2);

// console.log("sum: " + addition)
// console.log("mul: " + multiplication)
// console.log("division: " + division)


const func1 = (b,a ) =>{
    return [(a*b) , (a+b) , (a**b)]
}

const [a , b , c] = func1(2,7)
console.log(a);
console.log(b);
console.log(c);
// const obj = [
//     {
//         name: 'kauhsal',
//         std: '4th',
//         div: 'A'
//     },
//     {
//         name: 'john',
//         std: '5th',
//         div: 'B'
//     },
//     {
//         name: 'john',
//         std: '5th',
//         div: 'B'
//     }
// ]

// const [name, div, kd] = obj

// console.log("Using Destructuring")
// console.log(name);
// console.log(div);
// console.log(kd);

// console.log("Normal Way given below");

// console.log(obj[0]);
// console.log(obj[1]);
// console.log(obj[2]);
