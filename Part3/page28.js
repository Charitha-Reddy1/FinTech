//ForEach

const nums=[3,4,6,8,12]
// for(let i=0;i<nums.length;i++){
//     console.log(numbers[i])
// }
//Syntax:-nums.forEach(()=>{}) //to loop through numbers array
// nums.forEach((num)=>{
//     console.log(num)
// })

// nums.map((num)=>{
//     console.log(num)
// })

const numArray=nums.map((num)=>num*num)
console.log(numArray)
