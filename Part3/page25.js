//Arrow function doesn't work with this keyword..

const stock={ 
    name:'Wipro',
    lp:220,
    cp:275,
    growth:function(){
        return this.cp-this.lp
    },
    growthPer:function(){
        return (this.growth()*100)/this.lp
    },
};
console.log(`${stock.growthPer()}%`)
