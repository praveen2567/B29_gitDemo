// for better understanding how if and else if works

// const {test, expect} = require('@playwright/test')
                    //or
import {test, expect} from '@playwright/test'

test("Handle optional links on the page", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/disappearing_elements")
    //storing 3 locators
    const contactus = page.getByRole("link", { name: "Contact Us" });
    const portfolio = page.getByRole("link", { name: "Portfolio" });
    const gallery = page.getByRole("link", { name: "Gallery" });

    if(await gallery.isVisible()){
        await gallery.click()
        console.log("Clicked on gallery")
    }
    else if(await portfolio.isVisible()){
        await portfolio.click()
        console.log("Clicked on portfolio")
    }
    await expect (page).toHaveURL(/ *gallery|.*portfolio/)
})