var x1 = parseInt ( prompt ("Enter 3 length of sides of the triangle. THE FIRST:",) )
var x2 = parseInt ( prompt ("THE SECOND:", ) )
var x3 = parseInt ( prompt ("THE THIRD:", ) )

var p, s
p = (x1 + x2 + x3)/2;
s = Math.sqrt(p*(p-x1)*(p-x2)*(p-x3))


if (x1<=0 || x2<=0 || x3<=0) {console.log ("Incorect data")} else 
if  ( x1==x2 || x1==x3 || x2==x3) {  console.log("Type of triangle is isosceles triangle and the square is " + s.toFixed(2))}
else 
if (x1==x2 && x1==x3 && x2==x3) { console.log("Type of triangle is equilateral triangle and the square is " + s.toFixed(2))
} else
 if  (Math.tan(x1,x2)==1 || Math.tan(x2)==1 || Math.tan(x2)==1 ) {
    console.log("Type of triangle is right triangle and the square is " + s.toFixed(2))
} else console.log("Type of triangle is scalene triangle and the square is " + s.toFixed(2))


