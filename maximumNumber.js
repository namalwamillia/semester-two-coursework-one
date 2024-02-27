/*  QN3. Write a javascript function to return the maximum of 3 numbers.
1.Getting the maximum number from the given three float numbers below, a function is defined first,
2.Prompt for 3 inputs
3.Convert the numbers using parseFloat() to handle decimal values
4.Use Math.max() to get the maximum of the three numbers(inputs)
5.Returning your maximum number required
6.invoking the function in the first line below  and displaying of results*/

function getMaxOfThreeNumbers() { 
  const input1 =(12.34);
  const input2 = (193.7);
  const input3 = (56.789);
  
   
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);
  const num3 = parseFloat(input3);
  
   
  const maxNumber = Math.max(num1, num2, num3);
  return maxNumber;
}
const result = getMaxOfThreeNumbers();
  console.log("First number is: " + 12.34);
  console.log("Second number is: " + 193.7);
  console.log("Third number is: " + 56.789);
  console.log("Maximum is: " + result);
  