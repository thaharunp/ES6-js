// es6 array adding 1 using for of 


let prices = [98,198,298,398]
let new_price=[]

for(price of prices){
    new_price.push(price+1)
}
console.log(new_price)