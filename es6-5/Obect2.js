let user={
    id:101,
    name:"rahul",
    email:"rahul@gmail.com"
}
let details ={
    email : "rahul@pm.com",
    sal : 45000
}
let user_Details={...user, ...details}
console.log(user_Details)