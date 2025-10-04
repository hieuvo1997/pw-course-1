import { test } from '@playwright/test';

test('Exercise 1', async ({ page }) => {
    await test.step("Navigation", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 1", async () => {
        await page.locator("//a[@href = '01-xpath-register-page.html']").click();
    });

    // a. nhap day du cac thong tin, click register
    await test.step('nhap thong tin', async () => {
        await page.locator("//input[@id='username']").fill("Hieu Vo");
        await page.locator("//input[@id='email']").fill("vthieu97it@gmail.com");
    });

    await test.step('Check gender checkbox', async () => {
        let isCheckedMale = await page.locator("//input[@id = 'male']").isChecked();
        if (isCheckedMale === false) {
            await page.locator("//input[@id='male']").check();
        }
    });

    await test.step('Check Hobbies', async () => {
        let isCheckedReading = await page.locator("//input[@id='reading']").isChecked();
        let isCheckedTraveling = await page.locator("//input[@id='traveling']").isChecked();
        let isCheckedCooking = await page.locator("//input[@id='cooking']").isChecked();

        if (isCheckedReading === false) {
            await page.locator("//input[@id='reading']").check();
        }
        if (isCheckedTraveling === false) {
            await page.locator("//input[@id='traveling']").check();
        }
        if (isCheckedCooking === false) {
            await page.locator("//input[@id='cooking']").check();
        }
    });

    await test.step('Select Interests', async () => {
        await page.locator("//select[@id='interests']").selectOption({ label: 'Technology' })
    });

    await test.step('Select Country', async () => {
        // Chon theo label
        await page.locator("//select[@id='country']").selectOption({ label: 'Australia' })
        // Chon theo option
        await page.locator("//select[@id='country']").selectOption('uk');
    });

    // input text
    await test.step("Input DOB", async () => {
        await page.locator("//input[@id='dob']").fill('1997-07-17');
    });

    //Select by date picker
    // await test.step("Select DOB", async () => {
    //     await page.locator("//input[@id='dob']").click() // Open Calendar
    //     await page.click('.year-select >> text=1997');
    //     await page.click('.month-select >> text=July');
    //     await page.click('.day >> text=17');
    // });
    // Tìm hiểu thê có thấy cách này như có vẻ không work, chưa biết tại sao, maybe là web của trung tâm hông support trường hợp này hihi

    await test.step("Upload file", async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/data-test/data-test.txt");

    });

    await test.step("Input Biography", async () => {
        await page.locator("//textarea[@id='bio']").fill("Xin Chao Toi la Hieu Vo");
    });

    await test.step("Select rating", async () => {
        await page.locator("//input[@id='rating']").fill('7');
    });

    await test.step("Select color", async () => {
        await page.locator("//input[@id='favcolor']").fill('#11ff00');
    });

    await test.step("Hover Newsletter", async () => {
        await page.locator("//div[@class='tooltip']").hover();
    });

    await test.step("Enable Feature", async () => {
        let isCheckedToggle = await page.locator("//span[@class='slider round']").isChecked();
        if (isCheckedToggle === false) {
            await page.locator("//span[@class='slider round']").check();
        }
    });

    await test.step("Star rating", async () => {
        //await page.locator("//div[@class='rating-star']").check();

        const star = page.locator("//div[@class='rating-star']");
        // Lấy vị trí (bounding box) của thanh rating
        const box = await star.boundingBox();

        if (box) {
            // Tính toán vị trí click (60% chiều rộng để ra ~3 sao / 5)
            const clickX = box.x + box.width * (4 / 5);
            const clickY = box.y + box.height / 2;
            await page.mouse.click(clickX, clickY);
        }
    });

    await test.step("Custom date", async () => {
        await page.locator("//input[@id='customDate']").pressSequentially('2025-10-04');
    });
    // Trên web cũng không nhập được custom date

    await test.step("Click button register", async () => {
        await page.locator("//button[text()='Register']").click();
    });

});