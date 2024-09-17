import { chromium, test} from "@playwright/test";
import { TIMEOUT } from "dns";
import { imgDiff } from "img-diff-js";

test("test case: 1", async({page})=> {

    // const browser = await chromium.launch({
    //     headless : false
    // })

    // const context = await browser.newContext();
    // const page = await context.newPage();


    await page.goto("https://stage.asbl.in/landmark/");
    console.log("test...");
    await page.click("'Accept & Continue'")
    await page.hover("(//a[@class='main-heading']//p)[1]");
    await page.click("(//a[@class='main-heading']//p)[1]");
    await page.waitForTimeout(1000);
    await page.close()
})

test("img verification", async ({page}) =>{
    imgDiff({
        actualFilename: "images/image.webp",
        expectedFilename: "https://media.test.asbl.in/Landmark/Gallery-Images/Web-images/unit-plan/preview/UNP-TB-S1-T1-1645-E.webp",
        diffFilename: "images/diff.png",
      }).then(result => console.log(result));
})