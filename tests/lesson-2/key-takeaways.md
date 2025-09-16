# **Lession 2**

## **1. Version Control System (VCS)**

`-` VCS là hệ thống quản lý các phiên bản

`-` Ý nghĩa: để dễ dàng quản lý các phiên bản

`-` Có 3 loại VCS chính: 
    
+ Local: lưu ở máy chủ cá nhân
+ Centralize: lưu ở một máy chủ tập trung
+ Distributed: Lưu ở nhiều máy khác nhau

## **2. Git**
`-` Định nghĩa: Git là một VCS có kiểu là Distributed, được viết bởi Linus Torcalds cha đẻ của Linux

`-` Tại sao lại dùng Git: 

+ Tính năng: Dễ dùng, có nhiều tính năng vượt trội: branching, tốc độ xử lý nhanh
+ Chi phí: Free
+ Phổ biến: Nhiều công ty sử dụng

`-` Phân biệt Git và GitHub:  
| Git | GitHub |
|-------|-------|
| Là một phần mềm | Là một dịch vụ web |
| Cài trên máy | Host trên website |
| Là một commandline tool | Là công cụ có giao diện |
| Là công cụ quản lý phiên bản, đưa file vào Git | Repository | Là nơi để upload Git repository lên |
| Có các tính năng của VCS | Có các tính năgn của VCS và một số tính năng khác |

`-` Git có 3 vùng:

+ Working Directory: Các file mới hoặc file có thay đổi
+ Staging Area: các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
+ Repository: Các commit (phiên bản)

### **Git - key takeaways**
`-` Khởi tạo: 
*git init*

`-` Cấu hình: 

+ Cho một repo: 
    
    *git config user.name <"name">*
    
    *git config user.email <"email">*

+ Cho toàn bộ máy tính (default)

    *git config --global user.name <"name">*

    *git config --global user.email <"email">*

`*` **Tip**: 
+ *git config* sẽ ghi đè *git config --global*

+ Câu lệnh xem config: *git config --list*

`-` Thêm file vào vùng staging: 
+ Thêm 1 file:

    *git add <file_name>*

+ Thêm toàn bộ: 

    *git add .*

`-` Xem trạng thái file:
*git status*

+ File màu xanh: vùng staging
+ File màu đỏ: vùng working directory

`-` Commit: 

+ Commit: *git commit -m"massage"*

+ Kiểm tra lịch sử commit: *git log*

### **Git - Commit convention**

`-` Convention format: 
<**type**>: <**short_description**>

`-` Trong đó:

+ type: loại commit

    + chore: sửa nhỏ lẻ, chính tả, xoá file không dùng tới,...
    + feat: thêm tính năng mới, test case mới

    + fix: sử lỗi 1 test trước đó

+ short_description: mô tả ngắn gọn (50 ký tự), tiếng anh hoặc tiếng việt không dấu

### Git - simple workflow

`-` Không dùng global config

init -> config -> add -> commit -> push

`-` Dùng global config 

init -----------> add -> commit -> push


## **3. Javascript basic**

## Comment

`-` Comment một dòng: //

`-` Comment nhiều dòng: 

+ Thêm // vào trước mỗi dòng

+ Thêm /* vào trước dòng muốn comment và */ vào sau dòng cuối cùng

**Tip:** Tô đen các dòng code sau đó nhấn Ctr + / trên Windown hoặc command + / trên Mac

## Variable and Constant (Biến và Hằng) 

### Variable

`-` Biến là biến thiên có thể thay đổi được

`-` Cách khai báo biến: *<từ khoá> <tên biến> = <giá trị>;*

*var myName = "Hieu Vo";*

*let isLearnPlaywright = true;*

`-` Quy tắt đặt tên biến: 

+ Bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $

+ Không chứa dấu cách

+ Không là các "từ khoá", là các từ có trong javascript

`-` Thay đổi giá trị của biến: gán lại tên biến cho giá trị mới

*<tên biến> = <giá trị>;*

VD: 

*var name = "Hieu";*

*name = "Hieu Vo"*

Các sử dụng: *console.log(name);*

`*` **Note**: để an toàn thì nên sử dụng từ khoá ***var*** thay vì ***let***

### Constant

`-` Hằng là giá trị không thay đổi được

`-` Khai báo Hằng: 

*<Từ khoá> = <giá trị>;*

VD:

*const slogan = "Hoc ky";*

**Tip:** Khi nào nên dùng biến, khi nào nên dùng hằng

`-` Mặc định dùng *const* - giúp code an toàn hơn

`-` Chỉ dùng *let* khi chắc chắn cần gán lại giá trị

`-` Không dùng var


### Data type

`-` Có 8 kiểu dữ liệu chia làm 2 nhóm chính:

+ Primitive types - kiểu dữ liệu nguyên thuỷ

    + Number
    + String
    + Boolean
    + Undefined
    + Null
    + Symbol 
    + BigInt

+ Reference types
    + Object

`*` **Tip:** Cách để xem kiểu dữ liệu của biến

+ Đọc code

+ Sử dụng hàm *typeof* : *console.log(typeof < variable >);*

### Toán tử so sánh

#### So sánh bằng

`-` So sánh 2 bằng == (Loose Equality) - so sánh giá trị sau khi chuyển đổi (type coercion)

*5 == "5"  // true (chuyển string thành nunber)*

`-` So sánh 3 bằng === (stric Equality) - so sánh giá trị và kiểu dữ liệu, không chuyển đổi kiểu

*5 === "5" // false (khác kiểu)* 

`*` **Tip:** nên dùng so sánh 3 bằng thay vì so sánh 2 bằng để an toàn

#### So sánh không bằng

`-` So sánh != - so sánh giá trị sau khi đã chuyển đổi

`-` So sánh !== - so sánh giá trị và kiểu dữ liệu

#### Toán tử so sánh

`-` So sánh nhỏ hơn
`-` So sánh lớn hơn
`-` So sánh nhở hơn hoặc bằng
`-` So sánh lớn hơn hoặc bằng

#### Toán tử toán học

`-` Toán tử toán học tương tự như các phép tính cộng trừ nhân chia đã được học:  +, -, *, /
`-` Lưu ý: khi chia cho 0, sẽ ra kết quả infinity (vô cực)

#### Toán tử logic

`-` Toán tử logic dùng để kết hợp nhiều điều kiện và trả về boolean

+ && (AND): trả về đúng nếu cả 2 vế đúng

+ || (OR): trả về đúng nếu 1 trong 2 vế trả về đúng

#### Toán tử một ngôi

`-` Toán tử một ngôi là toán tử chỉ cần một toán hạng để thực hiện

+ Prefix: toán tử nằm ở phía trước - tăng giá trị trước, trả về sau

    + *++x;*

    + *--x;*


+ Postfix: toán tử ở phía sau - trả về trước, tăng giá trị sau

    + *x++;*

    + *x--;*

### Câu điều kiện (Condition)

`-` Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy, nếu điều kiện đúng thì mới chạy

`-` Cú pháp:

if (<điều kiện>) 

{
    
    // code

}

### Vòng lặp (Loop)

`-` Vòng lặp dùng để lặp lại một đoạn logic, có thể lặp lại một số lần nhất định, hoặc lặp lại vô hạn, tuỳ theo điều kiện dừng

`-` Các loại vòng lặp:

+ for (i)
+ for (of)
+ for (each)
+ for (in)
+ while
+ do ...while

#### Vòng lặp for (i)

`-` Cú pháp vòng lặp:

for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) 

{

    //code

}

`-` Trong đó:

+ Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu

+ Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng

+ Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đỏi giá trị của biến đệm

VD: for (let i = 1; i > 5; i++) 
{

    console.log(i);

}

## **VSCode**

Format code: 

+ Mac: Option + Shift + F

+ Windown: Alt + Shift + F

















     




