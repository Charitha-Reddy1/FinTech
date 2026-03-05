//Promises async,await,resolve,reject

// console.log('Begin')
// setTimeout(()=>{console.log('Hello World')},3000)
// console.log('End')

function f1(){
    console.log('Begin')
}

function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Hello World')
            //resolve()
            reject('Something Went Wrong')
        },3000)
    })
}

function f3(){
    console.log('End')
}

async function main(){
    try{
    f1()
    await f2()
    f3()
    }
    catch(err){
        console.log(err)
    }
}

main()