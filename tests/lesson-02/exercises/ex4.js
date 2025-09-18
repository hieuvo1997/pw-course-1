// a. khai báo chiều cao
const height = 173;

// b.

const perfectWeight = height % 100 * 9 / 10;
const maxWeight = height % 100;
const minWeight = height % 100 * 8 / 10;

const str1 = "Cân nặng lý tưởng là: ";
const str2 = "Cân nặng tối đa là: ";
const str3 = "Cân nặng tối thiểu là: ";

console.log(str1 + perfectWeight + "kg, " + str2 + maxWeight + "kg, " + str3 + minWeight + "kg");

