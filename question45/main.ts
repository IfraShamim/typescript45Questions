// Question # 45
// 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// function create_car(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
//     const car: Record<string, any> = {
//       manufacturer,
//       model,
//     };
  
//     // Add additional options to the car object
//     options.forEach(option => {
//       const [key, value] = Object.entries(option)[0];
//       car[key] = value;
//     });
  
//     return car;
//   }
  
//   // Example usage
//   const carInfo = create_car('Toyota', 'Camry', 
//   color: 'Blue', features: ['Navigation', 'Sunroof']);
  
//   // Print the object to verify information
//   console.log(carInfo);

// ~~ After learn I will modify it .. This code is from ChatGpt..
  