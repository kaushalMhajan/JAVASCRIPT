// const date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.getTime());
// console.log(date.toLocaleString());//gives the format (17/10/2023 , 5:29:14)
// console.log(date.toDateString());//gives the format (Tue Oct 17 2023)
// console.log(date.toISOString())

// const date1 = new Date("1-12-2023")
// console.log(date1.toDateString());
// console.log(date1.toLocaleString());
// const date = Date.now()
// console.log(date.toLocaleString())

// console.log(`the date in secs ${Math.floor(Date.now()/1000)}`)


// const newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// let b = newDate.toLocaleString('default' , {
//     month : "2-digit"
// })
// console.log(b)

const arr = new Array(1,6,7,8,9,20)
// console.log("A" , arr)

const arr1 = arr.slice(0,4)
// console.log(arr1)
// console.log('B', arr);

// const arr2 = arr.splice(0,4,9,20,56,78,90)
// console.log(arr2)
// console.log('C', arr);

let d = new Array(90,76,88,9,1,2)
let dw = new Array(88,9,1,2)
const df = d.concat(dw)
console.log(df)
console.log(d.push(dw))
