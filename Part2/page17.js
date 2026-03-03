// function outer(){
// let pass='1234'
// function inner(pwd){
//     return pass===pwd?"Access Granted":"Access Denied"
// }
// return inner
// }
// const chkPass=outer()
// console.log(chkPass('abcd'))


function outer(){
let pass=1
function inner(pwd){
    return pass++
}
return inner
}
const fun=outer()
console.log(fun())
console.log(fun())