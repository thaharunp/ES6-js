let emp={id:101, name:"rahul", sal:45000};

/*let user={}
user.id=emp.id
user.name=emp.name
user.sal=emp.sal;
console.log(user)*/
let user = { ...emp  }
console.log(emp)
console.log(user)
// object not allowed duplicates