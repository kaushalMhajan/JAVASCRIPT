console.log("primitives and objects in javascript 7 primitive data types")
//nn ss bb u these are 7 primitive data types
//null , number, string, symbol, boolean, BigInt,Undefined
let a = null
let b = 345
let c = true
let d = BigInt("567") + BigInt("3");
let e = "kaushal"
let f = Symbol("i am a boy");
let g 

console.log(a, b, c, d, e, f, g)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

//non primitive datatypes are also known as Objects

const items = {
 "kaushal" : true,
 "harry" : false,
 "daksh" : "nonsense",
 "viraj" : 420,
 "vaibhav" : undefined
}

const object = {
    "kaushal" : false,
    "harry" : "guruji",
    "nikita" : "ladies",
    "number" : 40,
}
console.log(items["harry"])
console.log(items["daksh"])
console.log(items["kaushal"])
console.log(object["kaushal"]);
console.log(object["harry"]);
console.log(object);