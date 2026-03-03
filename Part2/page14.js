const Stock=[
    { name:'Wipro',lastPrice:200,currPrice:210},
 { name:'Deloitte',lastPrice:250,currPrice:270}
]
const calc=(obj)=>{
    obj.growth=obj.currPrice-obj.lastPrice
console.log(obj)
objgrowper=(obj.growth*100)/obj.lastPrice
console.log(`${objgrowper}%`)
}
calc(Stock[0])
calc(Stock[1])