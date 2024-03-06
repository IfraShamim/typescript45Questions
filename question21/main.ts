// Question # 21
// 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Person {
    name: string;
    age: number;
    occupation: string;
  }
  
  const person1: Person = {
    name: "Ifra Shamim",
    age: 19,
    occupation: "Developer"
  };
  const person2: Person = {
    name: "Nisha Shamim",
    age: 17,
    occupation: "Medical"
  };
  console.log("Person 1:",person1);
  console.log("Person 2:",person2);
  