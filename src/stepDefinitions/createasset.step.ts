import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import DashboardPage from '@/pageObjects/DashboardPage';
import AssetPage from '@/pageObjects/AssetPage';
import LoginPage from '@/pageObjects/LoginPage';
import { TEST_DATA } from '@/data';
let loggedin = false;
Given("I am on the \"Tất cả tài sản\" page", async () => {
  if(!loggedin)
  {
    await LoginPage.login("nccadmin", "123456a@");
    await DashboardPage.getPageTitle();
    loggedin = true;
    await AssetPage.go(true);
  }
});

// declarative
When("I click on \"Thêm mới\" button", async function () {
  await AssetPage.clickToOpenModalBtn();
});

Then("I expect to see the \"Tạo tài sản\" popup", async function () {
  const text = await AssetPage.getPopupTitleText();
  expect(text).to.equal("Tạo tài sản");
});

When("I let all the required fields empty", async function () {});

When("I click on \"Thêm mới\" button at \"Tạo tài sản\" popup", async function () {
  await AssetPage.clickToCreateNewBtn();
});

Then("I expect to see the error message \"Thẻ tài sản bắt buộc\"", async function () {
  const text = await AssetPage.getErrorMessAssestTagElm();
  expect(text).to.equal("Thẻ tài sản bắt buộc");
});

Then("I expect to see the error message \"Kiểu tài sản bắt buộc\"", async function () {
  const text = await AssetPage.getErrorMessAssestTypeElm();
  expect(text).to.equal("Kiểu tài sản bắt buộc");
});

Then("I expect to see the error message \"Nhà cung cấp bắt buộc\"", async function () {
  const text = await AssetPage.getErrorProviderElm();
  expect(text).to.equal("Nhà cung cấp bắt buộc");
});

Then("I expect to see the error message \"Văn phòng bắt buộc\"", async function () {
  const text = await AssetPage.getErrorMessOfficeText();
  expect(text).to.equal("Văn phòng bắt buộc");
});

Then("I expect to see the error message \"Bảo hành bắt buộc\"", async function () {
  const text = await AssetPage.getErrorWarrantyElm();
  expect(text).to.equal("Bảo hành bắt buộc");
});

Then("I expect to see the error message \"Trạng thái bắt buộc\"", async function () {
  const text = await AssetPage.getErrorMessStatusElm();
  expect(text).to.equal("Trạng thái bắt buộc");
});
