//Unit Conversion
//Inch to Feet
let Inch = 42;
console.log("Inch"+Inch);
let Unit_Convn = (Inch/12);
console.log("Unit Conversion to feet"+Unit_Convn);

//Feet to Meter
let Length = 60; //in feet
console.log("Length = "+Length);
let Breadth = 40; //in feet
console.log("Breadth = "+Breadth);
let AreaF = (Length*Breadth);
console.log("Area of Rectangular plot in feet = "+AreaF);
let AreaM = (AreaF/3.28084);
console.log("Area of Rectangular plot in meter = "+AreaM);

//Area of Plot in Acres
let AreaM1= (AreaM*25);
console.log("Area of 25 plots in meters: "+ AreaM1);
let AreaA= (AreaM1/4047);