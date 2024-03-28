import { getDriver } from "@/support/driver";
import { until, WebElement } from "selenium-webdriver";

export const waitElementVisible = async (element: WebElement, successToast: string) => {
    //await driver.wait(until.elementIsVisible(element), 1000)
    const driver = getDriver();
    driver.wait(until.elementTextIs(element, successToast))
}