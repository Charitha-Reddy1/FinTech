const products=[
    {id:1,name:'Product 1',price:140},
    {id:2,name:'Product 2',price:160},
    {id:3,name:'Product 3',price:135}
]

let cart=[]

//display all products using forEach
function dispro(){
products.forEach((prod)=>{
    console.log(prod)
})
}

//display products greater with price above 136
function prodfilter(){
console.log(products.filter((prod)=>prod.price>136))
}
//add product 2 to cart using spread operator with a
function addToCart(id){
    let item={...products[id-1],rating:1}
    cart.push(item)
}

//new key quantity and assign 1
function disCart(){
console.log(cart)
}

dispro()
prodfilter()
addToCart(2)
disCart()

