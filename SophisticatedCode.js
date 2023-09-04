/*
   File Name: SophisticatedCode.js
   Description: This is a complex and elaborate JavaScript code that showcases various professional and creative programming concepts.
*/

// Constants
const PI = Math.PI;
const E = Math.E;

// Utility Functions
function factorial(n) {
   if (n === 0) {
      return 1;
   }
   return n * factorial(n - 1);
}

function formatNumberWithCommas(num) {
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Classes
class Shape {
   constructor(name) {
      this.name = name;
   }

   getInfo() {
      return `This shape is called ${this.name}.`;
   }
}

class Circle extends Shape {
   constructor(name, radius) {
      super(name);
      this.radius = radius;
   }

   getArea() {
      return PI * Math.pow(this.radius, 2);
   }

   getCircumference() {
      return 2 * PI * this.radius;
   }
}

class Square extends Shape {
   constructor(name, sideLength) {
      super(name);
      this.sideLength = sideLength;
   }

   getArea() {
      return Math.pow(this.sideLength, 2);
   }

   getPerimeter() {
      return 4 * this.sideLength;
   }
}

// Main Function
function main() {
   console.log("Welcome to the sophisticated code!");

   // Perform calculations
   const num1 = 42;
   const num2 = 10.5;
   const sum = num1 + num2;
   const difference = num1 - num2;
   const product = num1 * num2;
   const quotient = num1 / num2;

   console.log(`Sum: ${formatNumberWithCommas(sum)}`);
   console.log(`Difference: ${formatNumberWithCommas(difference)}`);
   console.log(`Product: ${formatNumberWithCommas(product)}`);
   console.log(`Quotient: ${formatNumberWithCommas(quotient.toFixed(2))}`);

   // Create shapes
   const circle = new Circle("Circle", 5);
   const square = new Square("Square", 10);

   console.log(circle.getInfo());
   console.log(`Area of circle: ${formatNumberWithCommas(circle.getArea().toFixed(2))}`);
   console.log(`Circumference of circle: ${formatNumberWithCommas(circle.getCircumference().toFixed(2))}`);

   console.log(square.getInfo());
   console.log(`Area of square: ${formatNumberWithCommas(square.getArea())}`);
   console.log(`Perimeter of square: ${formatNumberWithCommas(square.getPerimeter())}`);

   // Complex Loop
   const factorialNumber = 10;
   let factorialResult = 1;

   for (let i = 1; i <= factorialNumber; i++) {
      factorialResult *= i;
   }

   console.log(`Factorial of ${factorialNumber}: ${formatNumberWithCommas(factorialResult)}`);
}

// Invoke the main function
main();