//ForEach,map,filter,find,reduce

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

// const numArray=nums.map((num)=>num*num)
// console.log(numArray)

// const numArray1=nums.filter((num)=>num>5)
// console.log(numArray1)

// const numArray2=nums.find((num)=>num>5)
// console.log(numArray2)

// const nums1=[25,21,55,66]
// const res=nums1.reduce((sum,num)=>sum+num,0)
// console.log(res)

const nums2=[3,4,5,6,8]
const newArr=[...nums2,7]
console.log(newArr)
