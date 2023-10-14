// //declaring all characters
// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
// const generateString = (length) => {
//     let result = ' '
//     let charactersLength = characters.length
//     for (let i = 0; i < length; i++) {
//         result = result + characters.charAt(Math.floor(Math.random() * charactersLength))
//     }
//     return result
// }

// let a = generateString(10)
// // let a = generateString(10)
// console.log(a)
// let A = a.toLowerCase()
// let b = prompt("please Enter Sometext")
// // let b = prompt("please enter a String")
// let B = b.toLowerCase()
// let arr1 = []
// let arr2 = []
// let i = 0
// while (i < a.length) {
//     arr1.push(A.charAt(i))
//     i++
// }
// let j = 0
// while (j < b.length) {
//     arr2.push(B.charAt(j))
//     j++
// }
// let bool = false
// const sdp = (value) => {
//     bool = true
//     return arr1.filter((ele) => {
//         return ele == value
//     })
// }

// let k = 0
// let rr = []
// while (k < arr2.length) {
//     rr[k] = sdp(arr2[k])
//     k++
// }
// console.log(rr.toString().replaceAll(",",""))

const accountId = 12345
let accountEmail = "kmahajan@gmail.com"
var password = "674500"
accountCity = "daman"

console.table([accountId , accountEmail , password , accountCity])

 