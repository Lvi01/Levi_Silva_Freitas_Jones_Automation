const { chromium } = require("playwright");
const path = require("path");

//Task: Define the screenshot path and capture the entire page.
const screenshotOptions = {
path: path.join(__dirname, "screenShots", "print.png"),
fullPage: true
};

async function main() {
const browser = await chromium.launch({
headless: false
});

const page = await browser.newPage();

//Task: Navigate to the provided website.
await page.goto("https://test.netlify.app/");

//Task: Fill in all the required fields.
await page.getByLabel("Name").fill("Levi");
await page.getByLabel("Email").fill("email@example.com");
await page.getByLabel("Phone").fill("123-456-7890");
await page.getByLabel("Company").fill("Jones Inc.");
await page.getByLabel("Website").fill("https://example.com");

//Bonus: Change the number of employees to 51-500.
await page.locator("#employees").selectOption("51-500");

//Task: Take a screenshot before submitting the form.
await page.screenshot(screenshotOptions);

//Task: Click the "Request a call back" button to submit the form.
await page.getByRole("button", { name: "Request a call back" }).click();

//Safety check: Wait for the thank-you page to load after form submission.
const confirmationNavigation = page.waitForURL(/\/thank-you\.html/);

await confirmationNavigation;

//Task: Log a message when the thank-you page is reached.
console.log("Form submitted successfully!");

await browser.close();

}

main();