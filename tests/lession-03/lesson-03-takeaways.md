# **Lession 03**
## **Git**
### **Undo action**

#### Undo commit massage

`-` cau lenh: git commit --amend  -m"massage"

`-` Xem commit: git log

`-` Xem file dang o dau: git status

#### Undo file staging -> working directory

`-` Restore 1 file:  git restored --staged <file name>

`-` Restore toan bo file: git restores --staged .

#### Un-commit: repository -> working directory

`-` Reset 1 commit: git reset HEAD~1

`-` Reset N commit: git reset HEAD~N

`*` **Note**
- Commit dau tien khong the reset
- Neu muon reset thi xoa thu muc .git roi init lai

### **Branching model**

`-` lay code tu github ve: git pull origin main/master

`-` Xem branch: git branch

`-` Tao branch: git branch  <branch_name>

`-` Switch branch: git checkout <branch_name>

`-` Vua tao, vua chuyen sang nhanh moi: git checkout -b <branch_name>

`*` **Note:** Luon luon pull code ve truoc khi tao nhanh moi

`-` Xoa branch: git branch -D <branch_name>

`*` Kien thuc bo sung: 
- Checkout ve mot branch bat ky

git checkout <reversion>/commitId

- Dung lenh git log de xem cac version commit va lay commitId

git checkout 070799hahdu892y589940

### Git ignore file

`-` Them file .gitIgnore vao project
`-` Ignore file: <file_name>
`-` Ignore folder: <folder_name>/


## **Javascript basic**

### Conventions

`-` snake_case: chua dung

`-` kebab-case: dung de dat ten file

`-` camelCase: dung de dat ten bien

`-` PascalCase: dung de dat ten class

### Console

`-` console.log("Toi ten la: ");

`-` console.log('Toi ten la: ');

`-` console.log(` Toi ten la: `);

`-` Co the dung dau backtick de truyen bien vao:

console.log(`Toi ten la ${studentName}`);

`-` Noi chuoi: console.log("Toi ten la" + studentName); -> khong khoang cach

`-` Noi chuoi: console.log("Toi ten la", studentName); -> co khoang cach


### **Object and array**

#### Object

`-` Khai bao:
let/const <name_object> = {

    <key>: <value>,
    name: "Hieu",
    age: "28"
    class: {

        name: "K18",
        subject: "automation"
    }
}

`-` Truy xuat thuoc tinh:

console.log(mentor.name);

console.log(mentor.class.name);

console.log(mentor["age"]);

console.log(mentor["class"]["subject"]);

`-` Gan lai gia tri cua mot thuoc tinh:

mentor.name = "Hieu Vo"

-> Thay doi duoc gia tri thuoc tinh, khong thay doi duoc thuoc tinh

#### Array

`-` Khai bao mang: const/let <array_name> = ["<phan_tu_mang>", "phan_tu_mang"];

`-` Phan tu mang co the co cac kieu du lieu khac nhau

`-` Truy xuat do dai mang: console.log(arr.length)

`-` Truy xuat gia tri bat ki trong mang: console.log(arr[4]);

## **Function**

`-` Khai bao fucntion:
function <functionName>() {
    console.log("Hello world);
}

`-` Goi function: functionName();

`-` Truyen tham so vao ham (paramater)

function countNumber(n) {

    for (i = 1; i <= n; i++) {

        console.log(i);
    }

}

**countNumber(n);**

`-` Tra ve gia tri

function sum(a, b) {

    const sum = a + b;
    return sum; // tra ve gia tri
}

const total = sum(a, b); // hung gia tri tra ve bang mot bien

## **Kien thuc bo sung**

### Object

`-` Neu thay ca Object bang mot object moi -> bao loi

const student = {“name”: “alex”, “age”: 20}
student = {“name”: “Nagi”, “age”: 18} // loi


`-` Neu thay doi thuoc tinh ca object thi hoan toan hop le

Vi du: chi thay gia tri cua name trong object student

const student = {“name”: “alex”, “age”: 20}

student.name = “Nagi”; // hop le

`-` Them thuoc tinh vao object: dung dau . hoac dau ngoac vuong []

let bike = {

make: 'Yamaha',

model: 'YZF-R3'

};

bike.color = “Blue”;

bike[“price new”] = 100;

console.log(bike);

{make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}

`-` Xoa thuoc tinh:

let employee = {

name: 'Le Van C',

age: 30,

department: 'HR'

};

delete employee.age;

console.log(employee);

Kết quả:
{name: 'Le Van C', department: 'HR'}

### Loops

`-` Them phan tu vao mang: dung ham push

Vi du:
const arr = [1,2];
arr.push(3);


