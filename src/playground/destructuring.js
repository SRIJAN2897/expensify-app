const person = {
    name: 'Srijan',
    age: 26,
    location: {
        city: 'Ranchi',
        temp: 32
    }
};


const {name, age} = person;

const {city, temp} = person.location;

console.log(`${name} is ${age}`);


if(city && temp)
    console.log(`${city} ${temp }`);