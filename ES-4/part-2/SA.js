// export 

import Account from './Account.js'

class SA extends Account{
    acc_Id;
    acc_Bal=0;
    min_Bal=500
    constructor(id,name,email,amount,addr){
        super(name,email,addr)
        this.acc_Id=id
        this.acc_Bal=amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
let sa1=new SA(101,'Rahul','rg@pm.com',5000,'wayanad')
console.log(sa1)


//var global scope
//ex :- var a= "kalki"
//      var a="kalki AD"

//let is a redescult
// ex;- let a=20
//      let b=10  its not posible