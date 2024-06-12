import { By, Builder, until, WebDriver } from "selenium-webdriver";
import { BeforeAll, Given, Then, When } from "@cucumber/cucumber"
import CreateAsset from "@/pageObjects/CreateAsset";

When("I click on Thiết bị menu", async function () {
    await CreateAsset.clickToThietBiMenu();
});

When("I click on Tất cả submenu", async function () {
    await CreateAsset.clickToTatCaSubmenu();
});
When('I click on "Thêm mới" button', async function () {
    await CreateAsset.clickToThemMoiButton();
})
When('I type {string} for the "Thẻ tài sản" field', async function (theTaiSan) {
    await CreateAsset.typeTheTaiSan(theTaiSan);
})
When('I type {string} for the "Số Sê-ri" field', async function (soSeRi) {
    await CreateAsset.typeSoSeRi(soSeRi);
})
When('I click on "Kiểu tài sản" field', async function () {
    await CreateAsset.clickToKieuTaiSanField();
})
When('I select Headphone - DN Headphone - DN for "Kiểu tài sản" field', async function () {
    await CreateAsset.selectKieuTaiSan();
})
When('I click on "Văn phòng" field', async function () {
    await CreateAsset.clickToVanPhongField();
})
When('I select NCC DN for "Văn phòng" field', async function () {
    await CreateAsset.selectVanPhong();
})
When('I type {string} for "Bảo hành" field', async function (bHnumber) {
    await CreateAsset.typeBaoHanh(bHnumber);
})
When('I click on "Trạng thái" field', async function () {
    await CreateAsset.clickToTrangThaiField();
})
When('I select Ready to Deploy for "Trạng thái" field', async function () {
    await CreateAsset.selectTrangThai();
})
When('I type {string} for "Tên tài sản" field', async function (tenTaiSan) {
    await CreateAsset.typeTenTaiSan(tenTaiSan);
})
When('I type {string} for "Ngày nhập" field', async function (ngayNhap) {
    await CreateAsset.typeNgayNhap(ngayNhap);
})
When('I click on "Nhà cung cấp" field', async function () {
    await CreateAsset.clickToNhaCungCapField();
})
When('I select "Tiki" for "Nhà cung cấp" field', async function () {
    await CreateAsset.selectNhaCungCap();
})
When('I type {string} fot "Mã đơn hàng" field', async function (mdh) {
    await CreateAsset.typeMaDonHang(mdh);
})
When('I type {string} for "Chi phí mua hàng" field', async function (cost) {
    await CreateAsset.typeChiPhiMuaHang(cost);
})
When('I type {string} for "Mô tả" field', async function (moTa) {
    await CreateAsset.typeMoTa(moTa)
})
When('I click on "Thêm mới" button in modal', async function () {
    await CreateAsset.clickToThemMoiButtonSubmit();
})
Then('I expect that the successful message {string} will be displayed', async function (toast) {
    await CreateAsset.verifyToastSuccess(toast);
})