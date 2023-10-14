//spread operators
const obj = {
     a : "good morning",
     b : "its a",
     c : "sunday"
}
const obj1 = {
    a1 : "good ",
     b1 : "its",
     c1 : "monday"
}

const objs = {...obj1,...obj}
console.log(objs)