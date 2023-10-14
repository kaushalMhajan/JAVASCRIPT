//Question 1
console.log("har\"".length)

//Question 2
let name = "kaushal"
console.log(name.includes("k"))
console.log(name.startsWith('k'))
console.log(name.endsWith('l'))

//Question 3
console.log(name.toLowerCase())

//Question 4
let str = 'Please give Rs 1000'
let amount = Number.parseInt(str.slice(15))
console.log(amount)
console.log(typeof amount)

//Question 5
// let friend = "Deepika"
// friend[3] = 'r'
// console.log(friend)
//no we can't chane the given string as it it is immutable
