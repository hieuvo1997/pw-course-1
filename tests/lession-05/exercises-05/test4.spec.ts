import { test } from '@playwright/test';

test('Exercise 4', async ({ page }) => {
    const articles = [
        { title: "Loạt smartphone nổi bật bán tháng 10", content: "Smartphone gập mỏng nhất thế giới Honor Magic V5, bộ đôi Xiaomi 15T, Oppo A6 Pro siêu bền, Nubia Air mỏng nhẹ là những điện thoại sẽ bán trong tháng 10." },
        { title: "Hiểm họa từ khe nứt tử thần giữa lòng đô thị", content: "Số lượng khe nứt nuốt chửng đường sá và nhà cửa trong đô thị đang tăng lên nhanh chóng, đe dọa cướp đi nơi ở của hơn hàng triệu người trên thế giới." },
        { title: "Việt Nam thiếu nhân lực lĩnh vực drone", content: "Lĩnh vực máy bay không người lái (drone) tại Việt Nam được đánh giá phát triển mạnh, nhưng nhân lực hiện chỉ đáp ứng một phần rất nhỏ." },
        { title: "Thiết kế Galaxy S26 Ultra lộ diện", content: "Một số hình ảnh được cho là của Galaxy S26 Ultra cho thấy sự thay đổi đáng kể về thiết kế và camera." },
        { title: "LG được vinh danh TV AI xuất sắc tại AI Awards 2025", content: "Nhờ khả năng ứng dụng trí tuệ nhân tạo để cá nhân hóa trải nghiệm, dòng TV cao cấp OLED evo AI G5 được trao giải 'TV AI xuất sắc' ngày 26/9." },
        { title: "Tòa Tối cao mở đường cho ông Trump trục xuất 350.000 người Venezuela", content: "Tòa Tối cao Mỹ phán quyết chính quyền ông Trump có thể tước quy chế bảo vệ đặc biệt vốn giúp 350.000 người nhập cư Venezuela tránh bị trục xuất." },
        { title: "Kỹ thuật đo lường góp phần phát triển các ngành kinh tế mũi nhọn", content: "Thứ trưởng Lê Xuân Định đánh giá hoạt động nghiên cứu và ứng dụng kỹ thuật đo lường ngày càng khẳng định vai trò thiết yếu, đóng góp vào phát triển nhiều ngành kinh tế mũi nhọn, trong đó có năng lượng, điện tử, viễn thông." },
        { title: "Khủng hoảng cạn nước ở kênh đào Panama", content: "Hạn hán ngày càng phổ biến đang đe dọa hoạt động của kênh đào Panama, tuyến đường huyết mạch thương mại quan trọng phụ thuộc vào nguồn nước ngọt để di chuyển tàu giữa hai đại dương." },
        { title: "Xây dựng bộ dữ liệu AI tiếng Việt cho cộng đồng tự do sử dụng", content: "Đại diện dự án ViGen cho biết sẽ xây dựng bộ dữ liệu tiếng Việt để cộng đồng tự do sử dụng, kể cả với mục đích thương mại, nhằm thúc đẩy ứng dụng AI tại Việt Nam." },
        { title: "Những sản phẩm công nghệ nổi bật tại Triển lãm đổi mới sáng tạo", content: "Triển lãm Quốc tế Đổi mới sáng tạo Việt Nam 2025 trình diễn nhiều sản phẩm công nghệ độc đáo như robot, sản phẩm AI, chip bán dẫn do Việt Nam phát triển." }
    ];

    await test.step("Navigation", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 3", async () => {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    await test.step("Add note", async () => {
        for (const note of articles) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.content);
            await page.locator("//button[@id='add-note']").click();
        }
    });

    await test.step("Search random title", async () => {
            await page.locator("//input[@id='search']").fill('Xây dựng');
        });
});