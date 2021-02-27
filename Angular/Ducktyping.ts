class PersonA {  
    Gender ="Male";  
}  
class PersonB {  
    Gender ="Female";  
}  
class PersonC {  
    Gender ="Male";  
    swim(){  
        console.log("Pesron C swims well!");  
    }  
}  

let personA: PersonA= new PersonB();
let personB:PersonB=new PersonC();
let personD: PersonA= new PersonC(); 
console.log("Person A gender: "+personA.Gender);  
console.log("Person B gender: "+personB.Gender);  
console.log("Person C gender: "+personD.Gender);  
