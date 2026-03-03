// const obj={
//     name:'Abhi',
//     skill:'Python',
// }
// console.log(obj)

const obj=new Object()
obj.name='Hari'
obj.skill='Front-end'
console.log(obj)
obj.score=175
obj['rank']=15
console.log(obj)

let key='city'
let val='Noida'
obj[key]=val //obj.key will store key not city
console.log(obj)

//delete a key
delete obj.skill
console.log(obj)