
import { By, Builder, until, WebDriver } from "selenium-webdriver";
import assert from "assert";
import { BeforeAll, Given, Then, When } from "@cucumber/cucumber"
import { getDriver } from "@/support/driver";
import AssetPage from '@/pageObjects/AssetPage';
import LoginPage from '@/pageObjects/LoginPage';


let driver: WebDriver;

BeforeAll(async function () {
  await initDriver();
  driver = getDriver();
});

When("I click on Thiết bị menu", async function () {
  await AssetPage.clickToThietBiMenu();
});

When("I click on Tất cả submenu", async function () {
  await AssetPage.clickToTatCaSubmenu();
});

When("I click on Thêm mới button", async function () {
  await AssetPage.clickToThemMoiBtn();
});

When("I enter {string} in Thẻ tài sản field", async function (theTaiSan) {
  await AssetPage.typeToTheTaiSanTtb(theTaiSan);
});

When("I enter {string} in Tên tài sản field", async function (tenTaiSan) {
  await AssetPage.typeToTenTaiSanTtb(tenTaiSan);
});

When("I select option on Kiểu tài sản field", async function () {
  await AssetPage.clickToKieuTaiSanDrd();
  await AssetPage.selectHeadphoneOption();
});

When("I select option on Nhà cung cấp field", async function () {
  await AssetPage.clickToNhaCungCapDrd();
  await AssetPage.selectLazadaOption();
});

When("I select option on Văn phòng field", async function () {
  await AssetPage.clickToVanPhongDrd();
  await AssetPage.selectHN1Option();
});

When("I enter {string} in Mã đơn hàng field", async function (maDonHang) {
  await AssetPage.typeToMaDonHangTtb(maDonHang);
});

When("I enter {string} in Bảo hành field", async function (baoHanh) {
  await AssetPage.typeToBaoHanhTtb(baoHanh);
});

When("I enter {string} in Chi phí mua hàng field", async function (chiPhiMuaHang) {
  await AssetPage.typeToChiPhiMuaHangTt(chiPhiMuaHang);
});

When("I select option on Trạng thái field", async function () {
  await AssetPage.clickToTrangThaiDrd();
  await AssetPage.selectReadyOption();
});

When("I enter {string} in Mô tả field", async function (moTa) {
  await AssetPage.typeToMoTaTtb(moTa);
});

When("I click the Thêm mới button on Thêm mới modal", async function () {
  await AssetPage.clickToThemMoiOnMoDal();
});

Then("I expect that toast {string} is displayed", async function (toast) {
  await AssetPage.verifyToastThemMoiSuccess(toast);
});
function initDriver() {
  throw new Error("Function not implemented.");
}

