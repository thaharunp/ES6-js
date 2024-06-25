// create and print only white color cars
// create print cars their price more than 50,00,000


let cars=[
    
    {model:'swift',brand:'naruthi',price:9000000,color:"white"},
    {model:'create',brand:'hyndai',price:9000000,color:"blue"},
    {model:'seltos',brand:'kia',price:9000000,color:"gray"},
    {model:'xuv300',brand:'naruthi',price:9000000,color:"white"},
    {model:'xuv700',brand:'naruthi',price:9000000,color:"white"},
]
let new_cars=cars.filter((car)=>{
    return car.price > 5000000
})

console.log(new_cars)

