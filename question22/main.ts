// Question # 22
// 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program

const numbers: number[] = [1,2,3,4,5];

const incorrectIndex:number = 7;
const valueAtIndex:number = numbers[incorrectIndex];
if(incorrectIndex >=0 && incorrectIndex < numbers.length){
    const correctedValue = numbers[incorrectIndex];
  console.log("Corrected Value at Index", incorrectIndex, ":", correctedValue);
}
else{
    console.log("Index", incorrectIndex, "is out of bounds.");
}
