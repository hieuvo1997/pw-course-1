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

`*` **Lưu ý**: *git config* sẽ ghi đè *git config --global*

`*` Câu lệnh xem config: *git config --list*

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

init -> congig -> add -> commit -> push

`-` Dùng global config 

init -----------> add -> commit -> push






     




