import { getDriver } from "@/support/driver";
import { until, WebElement } from "selenium-webdriver";
import { waitElementVisible } from "./waitElemVisible";
import assert from "assert";

export const verifyText = async (element: WebElement, errorMessage: string) =>{
    await waitElementVisible(element,errorMessage);
    let alertText = element.getText();
    assert.equal(alertText,errorMessage)
}
