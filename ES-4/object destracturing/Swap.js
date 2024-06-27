 /*  var a =10;
    var b =20;
    swap vaiable values without 3rd varible */

   /* var a=10
    var b=20
    var c=a;
        a=b;
        b=c;
        console.log(a)
        console.log(b)  */

      // not used let 
        var a =10;
        var b=20
        [a,b]=[b,a]
        console.log(a) // 10
        console.log(b) // [undefined, 10]

        //  ...[spread] pocy and extract
        let a=[10,20,30]
       // create new array bosed

       let b=[]  // let a=[...a]
       for( ch of a){
        b.push(ch)
       }