function placeOrder(){
    console.log('Order has been placed')
    
}

function payment(){
    console.log('Payment is processing...')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve('Payment is done!!') //only try block
            reject('Payment is Failed,Try again..') //executes try-catch block
        },4000)
    })
}

function sendCon(){
    console.log('Order is confirmed!! Woohoo !!🎉')
}

async function main(){
    try{
    placeOrder()
    console.log(await payment())
    sendCon()
    }
    catch(err){
        console.log(err)
    }
}

main()