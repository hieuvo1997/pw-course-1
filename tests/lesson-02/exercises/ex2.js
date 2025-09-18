// Đoạn code trong bài 2 sai ở khai báo
// myName khai báo là một hằng số, cho nên nó không thay đổi
// Chính vì thế khi gán lại giá trị cho hằng số myName -> báo lỗi
// Cách sửa: Khai báo biến là let sẽ không báo lỗi và in gía trị mới là "Nagi"

let myName = "Alex";
myName = "Nagi";

console.log(myName);