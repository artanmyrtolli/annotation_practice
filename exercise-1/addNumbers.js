//declare a function called addNumbers that takes no parameters
function addNumbers() {
  //declare a variable named firstNum, give it value of 9
  var firstNum = 9;
  //declare a variable named secondNum, give it value of 14
  var secondNum = 14;

//reassign variable firstNum to value of 3
  firstNum = 3;
  //reassign variable secondNum to value of 4
  secondNum = 4;

//declaring variable nums to string array with elements of variables
//firstNum and secondNum
  var nums = [firstNum, secondNum];

//declare new variable called product, value is varible firstNum multiplied
//by variable secondNum
  var product = firstNum * secondNum;
  //declare new variable called product, value is varible firstNum added
  //to variable secondNum
  var sum = firstNum + secondNum;
  //declare a new variable called average. It takes variable sum and
  //divides it by the length of the nums array.
  var average = sum / nums.length;
//log to console index 0 of array nums. Expected "3"
  console.log(nums[0]);
  //log to console index 1 of array nums. Expected "4"
  console.log(nums[1]);
//interpolate variables num1 and num2 into string
  console.log(`The first number is ${num1} and the second number is ${num2}!`);
//when functino is called will give vale of variable sum.
  return sum;
}
