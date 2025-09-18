function saySomething() {
    console.log("Pika Pika Pikachu!");
}

//saySomething();
// Parameter
function countBeforeHello(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    saySomething();
}

//countBeforeHello(7);

function sum(a, b) {
    const sum = a + b;
    return sum;
}

// const total = sum(7, 17);
// console.log(total);
// console.log(sum(5, 7));


function getMax(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
    // if (a < b) {
    //     console.log(b);
    // }
}

getMax(5, 10);