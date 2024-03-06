// Question # 03
// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = "Ifra";
console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(`Titlecase: ${personName.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' ')}`);


