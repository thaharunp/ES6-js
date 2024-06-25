let prices = [98,198,298,398]
// create newprice variable by adding + 1
let new_price=[]  // empty array
for(let i=0;i<=prices.length-1;i++){
    console.log(prices[i]+1)

    new_price.push(prices[i]+1)
}
console.log(new_price)