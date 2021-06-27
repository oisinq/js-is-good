const person = {
  age: 22,
  name: "Oisín",
  address: {
    country: "Ireland",
    postcode: "ABC1234",
  },
};

const postcode = person.address.postcode;

person.middleName; // Error! But TypeScript warns us.

const {
  age,
  name: myName,
  address: { country },
} = person;

console.log("My name is" + myName); // "My name is Oisín"

export {};
