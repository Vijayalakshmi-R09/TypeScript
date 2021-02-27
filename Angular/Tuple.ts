let customer:[number,String,number,string,Date]=[1001,'Vj',45,'SavingAcc',new Date()]

console.log("Customer Details : " +customer);
customer.push(1003,'Bred',23,'CurrentACC',new Date());
console.log("No of fields in  Customer record : "+customer.length);
for(var i:number=0;i<customer.length;i++)
{
    console.log(customer[i])
}
customer.pop()
console.log("No Of Elements in tuple after POP: "+customer.length)
for(let i=0;i<customer.length;i++){
    if(customer[i]==1003){
        console.log("Record Found at index " +i);
    }
}
customer[1] = 'Ray';  
console.log("Customer details after update\n"+customer)



