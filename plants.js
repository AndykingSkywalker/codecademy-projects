const plantNeedsWater = day => 
 day === 'Wednesday' ? true : false;
/*single parameter needs no brackets, using a arrow to replace function
if statement can be a ternary operator and no need for a return keyword
*/
console.log(plantNeedsWater('Wednesday'));