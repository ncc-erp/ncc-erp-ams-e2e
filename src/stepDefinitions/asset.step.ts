
import { By, Builder, until, WebDriver } from "selenium-webdriver";
import assert from "assert";
import { BeforeAll, Given, Then, When } from "@cucumber/cucumber"
import { getDriver, initDriver } from "@/support/driver";
import {LoginPage, AssetPage} from"../pageObjects/LoginPage";

let driver: WebDriver;

BeforeAll(async function()  {
  await initDriver();
  driver = getDriver();
});

Given("I go to the Log in page", async function () {
  await LoginPage.go(true);
});

When ("I click on Thêm mới button", async function() {
  await AssetPage.clickToSigninBtn();
})