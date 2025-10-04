import { test } from '@playwright/test';

test('Exercise 3', async ({ page }) => {
    await test.step("Navigation", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 3", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    // a. Thêm mới 100 todo item có nội dung "Todo <i>"
    await test.step("Thêm mới 100 todo item", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    // b. Xoá các todo số lẻ
    await test.step("Xoá các todo số lẻ", async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i++ ) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    });
});