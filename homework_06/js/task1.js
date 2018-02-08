var x1 = parseInt(prompt("Enter 3 length of sides of the triangle. THE FIRST:", )),
    x2 = parseInt(prompt("THE SECOND:", )),
    x3 = parseInt(prompt("THE THIRD:", ))

var p, s, c1, c2, c3, x12, x23, x13;

// p-півпериметр; s-площа трикутника 
// с - одна із сторін трикутника, розрахована за т. Піфагора

p = (x1 + x2 + x3) / 2;
s = Math.sqrt(p * (p - x1) * (p - x2) * (p - x3));
c1 = Math.sqrt(Math.pow(x2, 2) + Math.pow(x3, 2));
c2 = Math.sqrt(Math.pow(x1, 2) + Math.pow(x3, 2));
c3 = Math.sqrt(Math.pow(x1, 2) + Math.pow(x2, 2));
x12 = x1 + x2;
x23 = x2 + x3;
x13 = x1 + x3;



if ((x1 <= 0 || x2 <= 0 || x3 <= 0) ||  ( x12 < x3 || x23 < x1 || x13 < x2))  {
    console.log("Incorect data");
} else
if (x1 == x2 || x1 == x3 || x2 == x3) {
    console.log("Type of triangle is isosceles triangle and the square is " + s.toFixed(2));
} else
if (x1 == x2 && x1 == x3 && x2 == x3) {
    console.log("Type of triangle is equilateral triangle and the square is " + s.toFixed(2));
} else
if (c1 == x1 || c2 == x2 || c3 == x3) {
    console.log("Type of triangle is right triangle and the square is " + s.toFixed(2));
} else console.log("Type of triangle is scalene triangle and the square is " + s.toFixed(2))
