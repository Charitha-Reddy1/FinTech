function greet(name,callback){
    callback();
    console.log(`Welcome ${name}`)
}
greet('Navya',()=>{
    console.log('Hello')
})