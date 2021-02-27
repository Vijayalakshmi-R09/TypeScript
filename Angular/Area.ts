class Area{
    Rectangle(length:number,breadth:number){
        console.log("AREA OF RECTANGLE "+(length*breadth).toFixed(2))
    }
    Square(side:number){
        console.log("AREA OF SQUARE "+(side*side).toFixed(2))
       
    }
    Triangle(base:number,height:number){
        console.log("AREA OF TRIANGLE "+((base*height)/2).toFixed(2))
    }
}
let a:Area=new Area();
a.Rectangle(10,12)
a.Square(6);
a.Triangle(10,5);