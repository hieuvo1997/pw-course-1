// 1. object car
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log(car.year);


// 2. object person
const person = {
    name: "Hieu",
    address: {
        street: "Nguyen Van Linh",
        city: 'Ho chi Minh',
        country: `Viet Nam`
    }
};

console.log(person.address.street);


// 3. object student

const student = {
    name: "Vo Trung Hieu",
    grades: {
        math: 7,
        english: 8
    }
};

student["grades"]["math"];


// 4. object setting

const setting = {
    volume: 7,
    brightness: 17
};

setting.volume = 10;
console.log(setting);


// 5. object bike

const bike = {

};

bike.color = 'red';


// 6. object employee

const employee = {
    name: "Pikachu",
    age: 28,
};

delete employee.age;


// 7. 
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
};

