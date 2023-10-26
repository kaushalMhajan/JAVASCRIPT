// let number = null
// let number1 = undefined
// let numberToString = Number(number)
// let numberToString1 = Number(number1)
// console.log(numberToString)
// console.log(numberToString1)

// console.log(typeof null)//the type of null is an object
// console.log(typeof undefined)
// let numberToBoolean = Boolean(number)
// console.log(numberToBoolean)

// let stringToBoolean = Boolean(number1)
// console.log(stringToBoolean)


//**********************************************

/* 
 Memory allocation
 Stack Memory(primitive[String,number,boolean,bigint,Symbol,null,undefined]) , Heap Memory(non-primitive[Array,Object,Functions]) */

 //Stack(copy provided so original value is not affected)
let realName = "kaushal"
let schoolName = realName //here the copy of the realName is assigned to the schoolName
schoolName = "kirtesh"
// console.log(realName)
// console.log(schoolName)

//Heap(direct reference so value get changed)

let user1 = {
    email : "king@google.com",
    uId : "ybi@sbi"
}

let user2 = user1 //Here the reference of the user1 is given to the user2
user2.email = "mahajankaushal806@gmail.com"
// console.log(user1.email)
// console.log(user2.email)

/* String Methods*/
let anum = 'ab_c'
let variant = `hello daman hi kaushal is the nice   place`
// let b = anum.charCodeAt()
// console.log(b);
// console.log(String.fromCharCode(b))

/*NUmbers methods*/
const score = 33
// console.log(score)


const num = new Number(67.3467)
// console.log(num.toFixed(2)) //numbers after decimal

const num2 = 33.8966
// console.log(num2.toPrecision(2))
// console.log(num2.toPrecision(1))

const num3 = 1000000
// console.log(num3.toLocaleString())

/* Maths */
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.23))
// console.log(Math.ceil(5.23))
// console.log(Math.floor(5.93))
// console.log(Math.pow(2,3))
// console.log(Math.max(2,3,56))
// console.log(Math.min(2,3,56))
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

const min1 = 15
const max1 = 20

// console.log(Math.floor(Math.random() * (max-min + 1)) + min)
// console.log(Math.floor(Math.random() * (max1- min1 + 1))+ min1);

//Array new methods 
let arr = [1,2,3,[4,5,6],8,[3,56,[5,8,9]]]
console.log(arr.flat(Infinity))


let score1  = 90
let score2 = 56

console.log(Array.of(score1,score2))

console.log(Array.from({name1 : 'kaushal'}))
