const emp={
    name:'Charitha',
    basic:40000,
    bonus:5000,
    salary:function (){
        console.log(this.basic+this.bonus)
    }
}
emp.salary()