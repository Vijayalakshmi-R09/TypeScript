class functuse
{
 stuDetails(id:number,name:string,e_mail_id?:string) {   
    console.log("ID:", id, " Name:",name);   
    if(e_mail_id!=undefined)    
    console.log("Email-Id:",e_mail_id);   
 }  
 
 addFunc(a: number, b:number=0) : number {  
    return a+b;  
}  
 sum(a: number, ...b: number[]): number {  
    let result = a;  
    for (var i = 0; i < b.length; i++) 
    {  
     result += b[i];  
    }  
    return result;  
  }  
}
  let f:functuse=new functuse();
  console.log("Optional Parameter:")
  f.stuDetails(1,'ABC')
  f.stuDetails(2,'cde','cde@gmail.com')
  let result1 = f.sum(3.5, 5.3);  
  let result2 = f.sum(3, 5, 7, 9);  
  console.log("Default parameter")
  console.log(f.addFunc(9));   
  console.log(f.addFunc(9,2));     
  console.log("REST parameter")
  console.log("The result1 sum = "+result1 +"\nThe result2 sum = " + result2);  
