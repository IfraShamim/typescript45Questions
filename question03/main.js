// Question # 03
// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Ifra";
console.log("Lowercase: ".concat(personName.toLowerCase()));
console.log("Uppercase: ".concat(personName.toUpperCase()));
console.log("Titlecase: ".concat(personName.split(' ').map(function (name) { return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); }).join(' ')));
