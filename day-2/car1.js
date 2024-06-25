let cars=[
    
    {model:'swift',brand:'naruthi',price:9000000,color:"white"},
    {model:'create',brand:'hyndai',price:8000000,color:"blue"},
    {model:'seltos',brand:'kia',price:1500000,color:"gray"},
    {model:'xuv300',brand:'naruthi',price:9000000,color:"white"},
    {model:'xuv700',brand:'naruthi',price:12000000,color:"white"},
]
// print only white color cars
// print cars their more than 50,00,000
// reduse means single value
//let cars=[]

let white_cars=cars.map((car)=>{

    return car.color=='white'
})
console.log(white_cars)


// cars array
// car varible
