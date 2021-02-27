enum Weekdays {  
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
   
  const getDay = () => 6;  
  const today = getDay();  
   
  console.log(Weekdays[today]);  
  