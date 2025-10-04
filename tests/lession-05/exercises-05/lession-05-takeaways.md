
# Lession 05

## Function advance

- Function Expression: Định nghĩa fuction bằng cách gán nó cho một biến

```javascript 
// Function declaration
function add(a, b) {
    return a + b;
}

// Function Expression (biểu thức hàm)
const add = function(a, b) {
    return a + b;

};
// So sánh cách gọi
console.log(add(2, 3)); // 5 - cả hai đều giống nhau
```

- Lambda function (Arrow function):

```javascript 
// Function truyền thống
function add(a, b) {
    return a + b;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function (Lambda)
const add = (a, b) => {
    ;
};
```

- Một số cách viết ngắn gọn của Lamda function

```javascript
// 1. Rút gọn nếu chỉ có một dòng code
// Cú pháp ngắn gọn nhất (implicit return)
const add = (a, b) => a + b;

// 2. Không tham số
// Phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();

// 3. Một tham số
// Có thể bỏ dấu ngoặc tròn
const double = x => x * 2;
const square = x => x * x;
// Hoặc giữ dấu ngoặc (tùy style)
const triple = (x) => x * 3;
```

- Anounymos function: 
    - Function không có tên
    - Được sử dụng khi function chỉ cần dùng một lần hoặc callback

```javascript
// Named function (có tên)
function namedFunction() {
    console.log("I have a name!");
}

// Anonymous function (không tên)
function() { // SyntaxError! Không thể đứng một mình
    console.log("I'm anonymous!");
}

// Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function() {
    console.log("I'm anonymous but stored in a variable!");
};

// 2. Dùng làm callback
setTimeout(function() {
    console.log("Anonymous callback!");
}, 1000);
```
## DOM
- DOM là Document Object Model
    - Máy tính sẽ nhìn ở dưới dạng cây có cấu trúc
    - Để Mở cây bấm phím F12 hoặc nhấn vào chuột phải và chọn inspect

- Các loại thẻ tiêu chuẩn thường gặp

    - Thẻ Cấu trúc cơ bản:
    ```html
        - <html>: Thẻ gốc của trang
        - <head>: Chứa metadata: tiêu đề website, hiển thị Google
        - <body>: Nội dung của cả website hiển thị
        - <div>: Khối/container chung
        - <span>: Inline container
        - <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
    ```

    - Thẻ Nội dung:
    ```html
        - <h1> đến <h6>: Tiêu đề
        - <p>: Đoạn văn
        - <a>: Liên kết
        - <img>: Hình ảnh
        - <ul>, <ol>, <li>: Danh sách
    ```
    - Thẻ Form (Quan trọng cho Testing): 
    ``` html
        - <form>: Biểu mẫu
        - <input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
        - <button>: Nút bấm
        - <select> và <option>: Dropdown
        - <textarea>: Vùng văn bản nhiều dòng
    ```

Demo các thẻ của DOM ở đây: https://material.playwrightvn.com/035-DOM-elements.html

## Selector

- Có 3 loại selector thường dùng:

    - XPath
        - Dùng được hầu hết các trường hợp (99,99%)
        - Đa dạng, có khả năng tìm các phần tử khó
        - hơi dài
        - VD: *//button[normalize-space() = ‘Add to cart’]*

    - CSS selector:
        - Ngắn gọn, performance cao
        - Dùng cho các trường hợp dễ tìm.
        - Không linh hoạt bằng XPath
        - VD: *.add-to-cart*

    - Playwright selector
        - Chỉ dùng riêng cho Playwright
        - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        - Hướng tới “giống người dùng đang nhìn thấy gì”
        - VD: *page.getByText(“Add to cart”);*

### XPath selector:
- XPath = XML Path

- có 2 loại: 

    - Tuyệt đối (Absolute): Đi dọc theo cây DOM
        - Bắt đầu bởi 1 /

    - Tương tối (Relative): tìm dựa vào đặc tính
        - Bắt đầu bởi 2 //
        - *//tenthe[@thuoctinh="giatri"]*

- Nên dùng XPath tương đối


## Playwright syntax

- **test**: Đơn vị cơ bản để khai báo một test
```javascript
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
    // Code của test
});
```

- **step**: Đơn vị nhỏ hơn test, để kahi báo từng step của test case

``` javascript
await test.step('Tên step', async () => {
    // Code here
});

test('<tên test>', async ({ page }) => {
    await test.step('Tên step', async () => {
    // Code here
});
});
``` 

`*` Lưu ý: step nên được map 1-1 với test case để dễ dang manitain

- Navigate: 

``` javascript
await page.goto('https://pw-practice.playwrightvn.com/');
```

- Locate: sử dụng locator để chọn phần tử trên trang

``` javascript
page.locator(“//input[@id=’email’]”)
```

- Click
``` javascript 
//Single click
await page.locator("//button").click();

// Double click
await page.locator("//button").dblclick();

//Click chuột phải
page.locator("//button").click({
    button: 'right'
})

//Click chuột kèm bấm phím khác
page.locator("").click({
    modifiers: ['Shift'],
})
```

- Input

``` javascript
// Fill: Giống việc bạn paste content vào một ô input
page.locator("//input").fill('Playwright Viet Nam');

// pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
page.locator("//input").pressSequentially('Playwright Viet Nam', {
    delay: 100,
});
```

- Radio/ checkbox 

``` javascript
//Lấy giá trị hiện tại đang là check hay không:
const isChecked = page.locator("//input").isChecked();

//Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

- Select

``` javascript
await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })
```

- Upload filed

``` javascript
await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
```

## Kiến thức bổ sung

### 1. Hover: để hover vào phần tử
``` javascript
await page.locator("<xpath here>").hover();
```

### 2. Hàm text(): 
- Dùng để tìm ra các phần tử có giá trị tương ứng

Ví dụ: 
-  Với DOM sau:
```html 
<div @class=”playwright”>This is a text</div> 
```
- Thì để chọn phần tử này, ta dùng cú pháp như sau:
```Xpath
//div[text()=’This is a text’]
```
### 3. Hàm contains(): 
- Để chọn các phần tử mà không có khoảng trắng hoặc các giá trị không cố định

Ví dụ: 
``` html
<div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi
<div> Bây giờ là: 08:07 </div> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web
```
- Để chọn các phần tử này, ta dùng hàm contains(<giá trị>, <giá trị contains>). 

Ví dụ: 
```Xpath
//div[contains(text(), ‘Tôi là Alex’)]
//div[contains(text(), ‘Bây giờ là:’)]
```

### 4. Tương tác với confirmation dialog

- Có thể dùng để tương tác với dialog: dialog.accept() hoặc dialog.dismiss()

``` javascript
page.on('dialog', dialog => dialog.accept());
await page.getByRole('button').click();
```

- Lưu ý hàm tương tác với dialog phải được xử lý trước khi dialog được mởs





