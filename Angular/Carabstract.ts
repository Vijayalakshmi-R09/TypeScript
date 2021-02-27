abstract class CarAbstract
{
    carModel:string;
    carColor:string;
    engineCap:number;
    noOfCylinders:number;
    
    constructor(carModel:string,carColor:string,engineCap:number,noOfCylinders:number)
    {
        this.carModel=carModel;        
        this.carColor=carColor;
        this.engineCap=engineCap;
        this.noOfCylinders=noOfCylinders;
    }
     abstract StartCar();
     abstract StopCar();
}
class SUV extends CarAbstract{
    carModel:string;
    carMake:number;
    carColor:string;
    engineCap:number;
    noOfCylinders:number;
    Manufacturer:string
    constructor (carModel:string,carMake:number,carColor:string,engineCap:number,noOfCylinders:number,Manufacturer:string)
    { super(carModel,carColor,engineCap,noOfCylinders)
        this.carModel=carModel;    
        this.carMake=carMake;    
        this.carColor=carColor;
        this.engineCap=engineCap;
        this.noOfCylinders=noOfCylinders;
        console.log("\nSUV Car Details\n");
        console.log("Model Name: "+carModel+"Make: "+carMake+"\nColor: "+carColor+"\nengine capacity(in cc): "+engineCap+"\nCylinders: "+noOfCylinders+"\n Manufacturer: "+Manufacturer);
    }
    StartCar(){
        console.log(this.carModel + " start the engine..");
    }
    StopCar(){
        console.log(this.carModel + " is Halted..");
    }
}
class HatchBach extends CarAbstract{
    carModel:string;
    carMake:number;
    carColor:string;
    engineCap:number;
    noOfCylinders:number;
    Manufacturer:string
    constructor (carModel:string,carMake:number,carColor:string,engineCap:number,noOfCylinders:number,Manufacturer:string)
    { super(carModel,carColor,engineCap,noOfCylinders)
        this.carModel=carModel;    
        this.carMake=carMake;    
        this.carColor=carColor;
        this.engineCap=engineCap;
        this.noOfCylinders=noOfCylinders;
        console.log("-------------------------")
        console.log("\nHatchBach Car Details\n");
        console.log("Model Name: "+carModel+"Make: "+carMake+"\nColor: "+carColor+"\nengine capacity(in cc): "+engineCap+"\nCylinders: "+noOfCylinders+"\n Manufacturer: "+Manufacturer);
    }
    StartCar(){
        console.log(this.carModel + " start the engine..");
    }
    StopCar(){
        console.log(this.carModel + " is Halted..");
    }
}
class Sedan extends CarAbstract{
    carModel:string;
    carMake:number;
    carColor:string;
    engineCap:number;
    noOfCylinders:number;
    Manufacturer:string
    constructor (carModel:string,carMake:number,carColor:string,engineCap:number,noOfCylinders:number,Manufacturer:string)
    { super(carModel,carColor,engineCap,noOfCylinders)
        this.carModel=carModel;    
        this.carMake=carMake;    
        this.carColor=carColor;
        this.engineCap=engineCap;
        this.noOfCylinders=noOfCylinders;
        console.log("-------------------------")
        console.log("\nSedan Car Details\n");
        console.log("Model Name: "+carModel+"Make: "+carMake+"\nColor: "+carColor+"\nengine capacity(in cc): "+engineCap+"\nCylinders: "+noOfCylinders+"\n Manufacturer: "+Manufacturer);
    }
    StartCar(){
        console.log(this.carModel + " start the engine..");
    }
    StopCar(){
        console.log(this.carModel + " is Halted..");
    }
}

let suv:SUV=new SUV("SUV500",2018,"White",2171,4,"Mahindra")
suv.StartCar();
suv.StopCar();
let hatchbach:HatchBach=new HatchBach("BMW i3",2021,"Black",2200,4,"BMW")
hatchbach.StartCar();
hatchbach.StopCar();
let sedan:Sedan=new Sedan("Dzire",2020,"Blue",1197,4,"Maruti Suzuki")
sedan.StartCar();
sedan.StopCar();