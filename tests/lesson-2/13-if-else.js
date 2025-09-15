const hour = 8;
if (hour <= 11) {
    console.log("good morning");
}

const hour2 = 15;
if (hour2 <= 11) {
    console.log("good morning");
}

let hour3 = 8;
if (hour3 >= 6 && hour3 <= 11) {
    console.log("Good morning");
}
// Nested if
if (hour3 >= 6) {
    if (hour3 <= 11) {
        console.log("GOOD MORNING");
    }
}

