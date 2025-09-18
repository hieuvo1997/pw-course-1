// 1. ham mutiply

function mutiply(a, b) {
    console.log(a * b);
}

mutiply(7, 10);
mutiply(5, 4);

// 2. ham findMin

function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    return c;
}

console.log(findMin(9, 5, 4));
console.log(findMin(8, 15, 1));


// 3. ham getTopStudent

let topStudents = [];

const students = [
    { name: 'Binh', score: 7 },
    { name: 'An', score: 5 },
    { name: 'Hanh', score: 10 },
    { name: 'Phuc', score: 9 },
    { name: 'Quoc', score: 4 },
    { name: 'Khanh', score: 8 },
    { name: 'Dung', score: 8 },
    { name: 'Ngoc', score: 8.6 },
    { name: 'Giau', score: 5 }
]

function getTopStudent(students, threshoId ) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshoId) {
            topStudents.push(students[i]); 
        }
    }
    return topStudents;
}

console.log(getTopStudent(students, 7));


// 4. ham calculateInterest


function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
}

console.log(calculateInterest(100_000_000, 5, 10));
