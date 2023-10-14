//new method to write a function
const hello = ()=>{
    console.log("hello world")
    return "hi"
}

const sum = (p , q)=>{
    return (p+q)
}

const div = (a , b) =>{
    return Math.round(a/b)//math.round is used to round figure the result
}

//old method
function multi(a,b){
    return a*b
}

console.log(hello())
console.log(sum(4,5))
let d = div(26,5)
console.log(d)
console.log(multi(26,5))