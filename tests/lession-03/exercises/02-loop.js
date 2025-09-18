// 1. Tinh tong tu 1 den 100
let sum = 0;
let i;

for (i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);


// 2. In bang cuu chuong tu 2 den 9

for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}: `)
    for (let x = 1; x <= 9; x++) {
        let result = i * x
        console.log(`${i} * ${x} = ${result}`);
    };
};


// 3. Tao mang chua cac so le tu 1 den 99

const mangSoLe = [];

for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        mangSoLe.push(i);
    };
};

console.log(mangSoLe);


// 4. In ra 10 mail dua tren tren nguoi dung va so thu tu

for (let i = 1; i <= 10; i++) {
    console.log(`user${i}example.com`);
}


// 5. Tinh tong doanh thu 12 thang

let tongDoanhThu = 0;

const doanhThu = {
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    total: [100, 100, 200, 300, 400, 100, 500, 150, 300, 200, 220, 330]
};

for (let i = 0; i < 12; i++) {
    tongDoanhThu = tongDoanhThu + doanhThu.total[i];
};

console.log(tongDoanhThu);

