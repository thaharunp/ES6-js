let eids=[101,102,103,104]
let new_Eids=[]


/*for(var i=0;i<=eids.lenght-1;i++){
    new_Eids.push(eids[i])
} */

    for(eid of eids){
        new_Eids.push(eid)
    }

    // map return the new array

    /* let new_Eids=eids.map((eid)=>{
        return eid;
    })*/
   var i=0
   while(i<=eids.length-1){
    new_Eids.push(eids.[i])
   }     

   