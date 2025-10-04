import { test } from '@playwright/test';

test('Exercise 2', async ({ page }) => {
    await test.step("Navigation", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 2", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    // a. Add 2 San pham 1
    await test.step("Add products 1", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });

     // b. Add 3 San pham 2
    await test.step("Add products 2", async () => {
        for (let i = 1; i <= 3; i++) {
            await page.locator("//button[@data-product-id='2']").click();
        }
    });

     // c. Add 1 San pham 3
    await test.step("Add products 1", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });




});

