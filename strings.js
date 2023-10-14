let names = 'kaushal'
console.log(names[0])
console.log(names[4])
console.log(names[6])
console.log("the length of the string is " + names.length)
let sentence = 'the name \"is\' kaushal'//here escape sequences are used \' and \"

//template literals
//we can insert variables directly in the template literal. This is called string interpolation
let a = `my name  is ${names}` //here backtic(``) is used
console.log(a)

//string methods
let str = "KaUsHal Bhai"

console.log(str.length)
console.log(str.toLowerCase())
console.log(str.toUpperCase())

console.log(str.slice(2,6))//her index 6 is not included
console.log(str.slice(2))

console.log(str.endsWith('al'))//gives boolean value
console.log(str.startsWith('ka'))//gives boolean value

console.log(str.replace('Bhai','Bhau'))

let name2 = "raj"+"iv"
console.log(name2)
let friend = "  mohit  "

console.log(friend.trim())
console.log(name2.concat(" is a friend of ",friend," and also a good rival"))//here concate method is used 

//use a for loop to print a string
for(let i=0;i<name2.length;i++){
    console.log(name2[i])
}
//using for in loop the index of the string get printed
for(let a in name2){
    console.log(a)
}

//using for of we can print the string 
for(let a of name2){
    console.log(a)
 } 