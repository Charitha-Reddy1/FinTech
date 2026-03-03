//Scope of variable
//let is BLOCK SCOPE
//var is not a BLOCK SCOPE
//Function has its own scope of variable

// let x=10
// function f1(){
//     let x=20
//     if(3===3){ 
//         //let x=30
//         console.log(x)
//     }
// }
// f1()
// console.log(x)

// function f2(){
//     let x=20; 
// }
// f2()
// console.log(x)//reference error

if(1===1){
    var x=10
}
console.log(x)