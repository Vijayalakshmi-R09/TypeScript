function union(value: (number | string))  
{  
    if(typeof(value) === "number")  
        console.log('The given value is of type number '+value);  
    else if(typeof(value) === "string")  
        console.log('The given value is of type string '+value);  
}  
union(54);  
union("Training");  

