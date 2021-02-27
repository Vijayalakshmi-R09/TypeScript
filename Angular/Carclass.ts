class Car{
     carColor:String
     engineCap:number
     noOfCylinders:number
     constructor(carColor:string,engineCap:number,noofCylinders:number)
     {
         this.carColor=carColor;
         this.engineCap=engineCap;
         this.noOfCylinders=noofCylinders;
         console.log("Car Details\n")
         console.log("Car Color: "+carColor)
         console.log("Engine Capacity (in CC): "+engineCap)
         console.log("No of cylinders in engine: "+noofCylinders)
     }
     StartCar(k:boolean)
     {
         if(k)
         {
             console.log("\nKey ->present Start the car..")
         }
         else{
             console.log("\nPlease insert Key")
         }

     }
     StopCar(b:boolean)
     {
        if(b)
        {
            console.log("\nBrakes applied Please Stop the car...")
        }
        else{
            console.log("\nNo brakes applied continue driving...")
        }
     }
     AccelerateCar(s:number)
     {
         if(s<25)
         {
             console.log("\ncurrent speed: "+s+" Please accelerate...")
         }
         else if(s<60)
         {
             console.log("\ncurrent speed: "+s+" Maintain Speed")
         }
         else{
             console.log("\ncurrent speed: "+s+" OverSpeed please reduce the speed..")
         }
     }
     OpenCarLock(d1:string)
     {
         if(d1=="closed")
         {
            console.log("\nDoors-> closed, Please open the car door...")
         }
     }
     CloseCarLock(d2:string)
     {
        if(d2=="open")
        {
           console.log("\nDoors-> open, Please close the car door...")
        }
     }
}
let c:Car=new Car("Red",1390,4);
let key:boolean=true;
let brakes:boolean=true
let speed:number=50
let door1:string="closed"
let door2:string="open"
c.StartCar(key)
c.StopCar(brakes)
c.AccelerateCar(speed)
c.OpenCarLock(door1)
c.CloseCarLock(door2)


