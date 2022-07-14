const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

//***MAP***
//1. Get array of all names

const nameArray = characters.map((char) => char.name);
console.log('Names: ', nameArray);

//2. Get array of all heights

const heightArray = characters.map((char) => char.height);
console.log('Heights: ', heightArray);

//3. Get array of objects with just name and height properties

const nameHeightObject = characters.map((char) => ({
  name: char.name,
  height: char.height,
}));
console.log('Name & height: ', nameHeightObject);

//4. Get array of all first names

const firstName = characters.map((char) => char.name.split(' ')[0]);
console.log('First names: ', firstName);

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100

const massGreaterThan100 = characters.filter((char) => char.mass > 100);
console.log('Mass over 100: ', massGreaterThan100);

//2. Get characters with height less than 200

const heightLessThan200 = characters.filter((char) => char.height < 200);
console.log('Height less than 200: ', heightLessThan200);

//3. Get all male characters

const getAllMale = characters.filter((char) => char.gender === 'male');
console.log('All the male characters: ', getAllMale);

//4. Get all female characters

const getAllFemale = characters.filter((char) => char.gender === 'female');
console.log('All the female characters: ', getAllFemale);

//***SORT***
//1. Sort by mass

const sortMass = characters.sort((char1, char2) => char2.mass - char1.mass);
console.log('Sort by mass: ', sortMass);

//2. Sort by height

const sortHeight = characters.sort(
  (char1, char2) => char2.height - char1.height
);
console.log('Sort by height: ', sortHeight);

//3. Sort by name

const sortName = characters.sort((char1, char2) => {
  if (char1.name < char2.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log('Sort by name: ', sortName);

//4. Sort by gender

const sortGender = characters.sort((char1, char2) => {
  if (char1.gender < char2.gender) {
    return -1;
  } else {
    return 1;
  }
});
console.log('Sort by gender: ', sortGender);

//***EVERY***
//1. Does every character have blue eyes?

const allBlueEyes = characters.every((char) => char.eye_color === 'blue');
console.log('Does any character have blue eyes? ', allBlueEyes);

//2. Does every character have mass more than 40?

const allOver40Mass = characters.every((char) => char.mass > 40);
console.log('Does any character have a mass over 40? ', allOver40Mass);

//3. Is every character shorter than 200?

const allUnder2meters = characters.every((char) => char.height < 200);
console.log('Is every character under 2 m tall? ', allUnder2meters);

//4. Is every character male?

const allMale = characters.every((char) => char.gender === 'male');
console.log('Is every character male? ', allMale);

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
