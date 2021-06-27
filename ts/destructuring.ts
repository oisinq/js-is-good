type Person = {
  age: number;
  name: string;
  address: {
    country: string;
    postcode: string;
  };
};

const person: Person = {
  age: 22,
  name: "Oisín",
  address: {
    country: "Ireland",
    postcode: "ABC1234",
  },
};

const postcode = person.address.postcode;
person.anotherAddress.postcode; // This will throw an error but TS tells us this!

const {
  age,
  name: myName,
  address: { country },
} = person;

console.log("My name is" + myName); // "My name is Oisín"

export {};
