const generateGreeting = (userName = "anon") => {
  return `Hey, ${userName}. Welcome!`;
};

generateGreeting("Oisín"); // "Hey, Oisín. Welcome!"

generateGreeting(); // "Hey, anon. Welcome!"

const generateAnotherGreeting = ({ userName = "anon" } = {}) => {
  return `Oh, hi ${userName}, good to see you again.`;
};

generateAnotherGreeting({ userName: "Oisín" }); // "Oh, hi Oisín, good to see you again."

generateAnotherGreeting(); // "Oh, hi anon, good to see you again."

export {};
