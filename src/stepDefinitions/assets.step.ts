import { Given, When, Then } from '@cucumber/cucumber';
import AssetsPage from '../pageObjects/components/AssetsPage';

When("I click on the {string} item on the menu", async function (menuItem: string) {
    await AssetsPage.clickOnMenuItems(menuItem);
});
When("I navigated to the page tất cả tài sản", async function () {
    await AssetsPage.navigateToTatCaTaiSanScreen();
});
When("I filter by Văn phòng {string}", async function (text: string) {
    await AssetsPage.filterByVanPhong(text);
});
Then("I expect to see data from Kiểu tài sản inludes {string}", async function (text: string) {
    await AssetsPage.verifyKieuTaiSanDataByVanPhong(text);
});
When("I enter the text {string} into the search bar", async function (text: string) {
    await AssetsPage.enterTextIntoSearchBar(text);
});
Then("I expect to see data from Thế Loại displays only {string}", async function (text: string) {
    await AssetsPage.verifyTheLoaiData(text);
});
Then("I expect to see {string} text shows on the middle of the table", async function (text: string) {
    await AssetsPage.verifyNoDataAfterFiltering(text);
});
When("I clear the current inputted text on the search bar", async function () {
    await AssetsPage.clearTextOnSearchBar();
});
When("I enter the text {string} into the {string}", async function (text: string, label: string) {
    await AssetsPage.inputTextToTiemKiemNangCao(text, label);
});
When("I click on tim kiem nang cao icon", async function () {
    await AssetsPage.clickOnTimKiemNangCaoIcon();
});
When("I click on Tien Kiem button", async function () {
    await AssetsPage.clickOnTimKiemButton();
});