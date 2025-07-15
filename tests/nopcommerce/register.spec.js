
import {test, expect} from '@playwright/test'

const Personal_Details = {
    user1:{
        firstname: "Praveen",
        lastname: "Kumar",
        email: "praveen@gmail.com",
        company_name: "Infosys",
        password: "12345678",
        confirm_password: "12345678"
    },
    user2:{
        firstname: "Sairo",
        lastname: "Nandaluru",
        email: "Sairo@gmail.com",
        company_name: "TCS",
        password: "12345678",
        confirm_password: "12345678"
    }
}

for(let user in Personal_Details){
    test(`new user Register - ${user}`, async ({page}) =>{
    await page.goto(process.env.BASE_URL)
    await page.locator("//a[normalize-space(text())='Register']").click()
    await page.locator("(//input[@name='Gender'])[1]").check()
    //await page.locator("(//input[@name='Gender'])[2]").check()
    let r = (Math. random () + 1). toString(36). substring(7);
    await page.locator("(//label[normalize-space(text())='First name:']/following::input)[1]").fill(Personal_Details[user].firstname)
    await page.locator("(//label[normalize-space(text())='Last name:']/following::input)[1]").fill(Personal_Details[user].lastname)
    await page.locator("(//label[normalize-space(text())='Email:']/following::input)[1]").fill(Personal_Details[user].email+r)
    await page.locator("(//label[normalize-space(text())='Company name:']/following::input)[1]").fill(Personal_Details[user].company_name)
    await page.locator("(//label[normalize-space(text())='Newsletter:']/following::input)[1]").check()
    await page.locator("(//label[normalize-space(text())='Password:']/following::input)[1]").fill(Personal_Details[user].password)
    await page.locator("(//label[normalize-space(text())='Confirm password:']/following::input)[1]").fill(Personal_Details[user].confirm_password)
    await page.locator("//button[normalize-space(text())='Register']").click()
    //await expect (page).toHaveURL("https://demo.nopcommerce.com/registerresult/1?returnUrl=/")
    await expect(page.locator("//div[normalize-space(text())='Your registration completed']")).toBeVisible()
    await page.locator("//a[normalize-space(text())='Log out']").click()

    })
}
