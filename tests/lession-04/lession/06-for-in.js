const person = {
    name: "Hieu Vo",
    age: 28,
    city: "AG"
}

for (let property in person) {
    console.log(`Property: ${property}`);
    console.log(`Property value: ${person[property]}`);
}


const arr2 = ['Phong', 'Hieu', 'Uyen'];
for (let i in arr2) {
    console.log(arr2[i]);
}