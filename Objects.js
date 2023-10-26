//object literals

// const mySym = Symbol("key1")
// console.log(typeof mySym)
// const obj = {
//     "name" : 'kaushal',
//     age : 90,
//     [mySym] : 'mykey1',
//     location : 'daman',
//     isloggedIn : false
// }

// // console.log(obj["name"])
// // console.log(typeof [mySym])
// // console.log(obj[mySym])

// // obj.location = 'vapi'
// // console.log(obj)
// // Object.freeze(obj)//this method doesnot allow anyone to change the values in the object
// // obj.location = 'mandir'
// // console.log(obj)

// obj.greeting = function(){
//     console.log("Hello India");
// }

// console.log(obj)
// console.log(obj.greeting)
// console.log(obj.greeting())

// const JsUser = {
//         "name" : 'kaushal',
//         age : 90,
//         mySym : 'mykey1',
//         location : 'daman',
//         isloggedIn : false
//     }

// JsUser.greetings = function () {
//     console.log("hello JsUser");
// }
// JsUser.greetingTwo = function (param) {
//     console.log(`hello JsUser ${this.name}` ,  param);
// }

// console.log(JsUser.greetings());
// console.log(JsUser.greetingTwo('How are you'));

//Singleton Object is defined as
// const singleTonObj = new Object()


//non Singketon object is defined as
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'john'
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regulerUser = {
    email: 'kau@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'kaushal',
            lastName: 'mahajan'
        }
    }
}

// console.log(regulerUser.fullName);

const newObject = { regulerUser, tinderUser }
// console.log(newObject);

const anotherObj = Object.assign({}, regulerUser, tinderUser)//here assigned valus are stored in the {}<= target
// console.log(anotherObj);
const anotherObj1 = Object.assign(regulerUser, tinderUser)//here the assigned values are stored in the regulerUser<= target
// console.log(anotherObj1);
// console.log(regulerUser);

const lastObj = { ...regulerUser, ...tinderUser }
// console.log(lastObj)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));

const users = [
    {
        id : '90',
        name : 'kauhsal'
    },
    {
        id : '89',
        name : 'Giti'
    },
    {
        id : '99',
        name : 'Naini'
    }
]

let nmap = users.map((elements)=>{
    return "id : " + elements.id +' '+ "name : " + elements.name
})
console.log(nmap);

const deleteUser = (userName) =>{
    return users.filter((elements)=>{
        return elements.id!==userName
    })
}
console.log(deleteUser('89'))

const addUser = (id , email) =>{
    users.push({
        id : id,
        email : email
    })
    return users
}

console.log(addUser('100','Nikita'))