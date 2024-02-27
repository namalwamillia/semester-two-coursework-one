/* Write a javascript function to square numbers
Define a function to square numbers?,
loop through  numbers,
Calculate the square of the current number,
Print the square number,
Call the squareNumbers function to execute the code.*/
function squareNumbers(){

    for(let i = 1;i<=10;i++){
         let squared = square(i);
       console.log("The square of " +  i  + " is "  +  squared);
    }
}
function square(number){
    return number * number;
 }
 squareNumbers()
