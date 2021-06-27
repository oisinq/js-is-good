const myFavouriteNumber = () => 42;

const person = {
  name: "Oisín",
  myFavouriteNumber,

  get favouriteColour() {
    const colours = ["red", "blue", "pink", "yellow", "purple"];

    return colours[Math.floor(Math.random() * colours.length)];
  },
};

person.name; // "Oisín"

person.myFavouriteNumber(); // 42

person.favouriteColour; // A random colour from the `colours` array - it can change each time!

export {};
