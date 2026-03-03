//bestStock
const obj={ 
    name:'Wipro',
    lastPrice:200,
    currPrice:250
}
console.log(obj.lastPrice)
obj.growth=obj.currPrice-obj.lastPrice
console.log(obj)
objgrowper=(obj.growth*100)/obj.lastPrice
console.log(`${objgrowper}%`)