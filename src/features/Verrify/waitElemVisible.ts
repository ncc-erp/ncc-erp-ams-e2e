import { By, until } from "selenium-webdriver";
    export const waitElementVisible = async (element: Element, successToast: string) =>{
        //await driver.wait(until.elementIsVisible(element), 1000)
        wait.until(element.textToBePresentInElement(element),successToast)
        
        }