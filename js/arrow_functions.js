// Lets make a function that calculates the square of a given number
function oldStyleFunction(width) {
  return width * width;
}

let square = (width) => {
  return width * width;
};

// or we simplify to...
square = (width) => width * width;

square(4); // 16

// Since `square` is just a variable, we can do this:
const squareCopy = square;

squareCopy(4); // 16

export {};
