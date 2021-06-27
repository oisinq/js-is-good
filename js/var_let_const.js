/* VAR */

var colour = "pink"; // This has function scope - bad, bad, not good
var colour = "purple"; // This is legal but REALLY DANGEROUS
// ...What if `colour` is a super important global variable that I'm overriding?

/* LET */

let anotherColour = "blue"; // This has block scope - much better!
let anotherColour = "yellow"; // This will be a SyntaxError - you can't redclare a let variable.
anotherColour = "orange"; // With let, you can do this

/* CONST */

const bestColour = "green"; // This has block scope and also can't be changed - 🥰
const bestColour = "darkGreen"; // This will also be a SyntaxError
bestColour = "lightGreen"; // This will be a TypeError, since besstColour is a `const`

export {};
