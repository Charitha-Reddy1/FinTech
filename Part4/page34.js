import express from "express"
const app =express()
app.set("view engine","ejs")
app.set("views","views")
app.listen(5000,()=>console.log('Server Started'))
app.use(express.urlencoded({extended:true}))

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body
    const user=users.find((user)=>user.email===email)
    if (user){
        if(user.password===password){
            res.redirect("/")
        }else{
            res.redirect("/login")
        }
    }
    else{
    res.redirect("/login")
    }
    res.redirect("/")
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/",(req,res)=>{
    res.render("dashboard",{users});
})

const users=[
    {id:1,name:"Akanksha",email:'akan21@gmail.com',password:"1234"},
    {id:2,name:"Siddu",email:'sid817@gmail.com',password:"5678"},
    {id:3,name:"Rahul",email:'rahuldrad561@gmail.com',password:"4321"},
]