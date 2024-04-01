
import { By, Builder, until, WebDriver } from "selenium-webdriver";
import assert from "assert";
import { BeforeAll, Given, Then, When } from "@cucumber/cucumber"
import { getDriver, initDriver } from "@/support/driver";
import AssetPage from'@/pageObjects/AssetPage';
import LoginPage from '@/pageObjects/LoginPage';


let driver: WebDriver;

BeforeAll(async function()  {
  await initDriver();
  driver = getDriver();
});

Given("I go to the login page successfully", async function () {
  await LoginPage.go(true);
});


When ("I click on Thêm mới button", async function() {
  await AssetPage.clickToSigninBtn();
})