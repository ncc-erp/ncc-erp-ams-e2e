import { Builder, ThenableWebDriver, WebDriver } from "selenium-webdriver";

let driver: WebDriver;
export const initDriver = async () => {
    if (driver) return driver;

    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({ implicit: 10000 });

    return driver;
}
// initDriver();
export const getDriver = (): WebDriver => {
    if (!driver) {
        throw new Error('Driver not found');
    }
    
    return driver;
}