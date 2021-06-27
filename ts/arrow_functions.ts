// Lets make a function that calculates the square of a given number
function oldStyleFunction(width) {
  return width * width;
}

/**
 *Calculates the width of a square
 * @param width The width! Yeah!
 * @returns The area of the square
 */
let square = (width: number) => {
  return width * width;
};

// or we simplify to...
square = (width) => width * width;

square(4); // 16

// Since `square` is just a variable, we can do this:
const squareCopy = square;

squareCopy(4); // 16

export {};
