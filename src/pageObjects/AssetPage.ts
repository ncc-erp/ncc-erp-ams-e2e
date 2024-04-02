import { By, until } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import assert from "assert";
import { waitElementVisible } from "@/features/Verrify/waitElemVisible";
import { verifyText } from "@/features/Verrify/verifyText";

export class AssetPage extends BasePage {
    constructor() {
        super('/login')
    }
    
    // elements
    get thietBiMenu() {
        return this.driver.findElement(By.css("[data-test-id='menu'] > li:nth-child(2) > div:first-child"));
    }

    get tatCaSubMenu() {
        return this.driver.findElement(By.css("li:nth-child(2) ul.ant-menu.ant-menu-sub.ant-menu-inline > li:first-child"));
    }

    get themMoiBtn() {
        return this.driver.findElement(By.className('ant-btn ant-btn-default'));
    }

    get theTaiSanTtb() {
        return this.driver.findElement(By.css('[placeholder="Thẻ tài sản"]'));
    }

    get tenTaiSanTtb() {
        return this.driver.findElement(By.id('name'));
    }

    get soSeriTtb() {
        return this.driver.findElement(By.id('serial'));
    }

    get ngayNhapTtb() {
        return this.driver.findElement(By.id('purchase_date'));
    }

    get kieuTaiSanDrd() {
        return this.driver.findElement(By.id('model'));
    }

    get headPhoneOption() {
        return this.driver.findElement(By.css("[title='Headphone - HN1 Headphone - HN1']"));
    }

    get nhaCungCapDrd() {
        return this.driver.findElement(By.id('supplier'));
    }

    get lazadaOption() {
        return this.driver.findElement(By.css("[title='Lazada']"));
    }

    get vanPhongDrd() {
        return this.driver.findElement(By.id('rtd_location'));
    }

    get nccHN1Option() {
        return this.driver.findElement(By.css("[title='NCC HN1']"));
    }

    get maDonHangTtb() {
        return this.driver.findElement(By.id('order_number'));
    }

    get baoHanhTtb() {
        return this.driver.findElement(By.id('warranty_months'));
    }

    get chiPhiMuaHangTtb() {
        return this.driver.findElement(By.id('purchase_cost'));
    }

    get trangThaiDrd() {
        return this.driver.findElement(By.id('status_label'));
    }

    get readyOption() {
        return this.driver.findElement(By.css("[title='Ready to Deploy']"));
    }
    get moTaTtb() {
        return this.driver.findElement(By.css("[data-testid='text-area']"));
    }

    get themMoi_Modal_Btn() {
        return this.driver.findElement(By.css("[type='submit']"));
    }

    get themMoiSuccessToast() {
        return this.driver.findElement(By.className('ant-notification-notice-description'));
    };

    // get columnTenTaiSan() {
    //     return this.driver.findElement(By.css())
    // }
    // for (let i = 0; i <= 22; i++) {
    //     let column[[i]]='';
    //     get column[i]() {
    //         return this.driver.findElement(By.css(`tr:nth-child(2) td:nth-child(${i + 3})`));
    //     }
    // }
    //action
    // async verifyNewAssetOnTable(tenTaiSan: string, hinhAnh: string, theTaiSan: string, soSeri: string, kieuTaiSan: string, theLoai: string, trangThai: string, capPhatDen: string, viTri:string, vanPhong:string, kho:string, nhaCungCap: string, ngayNhap: string, chiPhiMuaHang: string, maDonHang: string, baoHanh: string, ngayHetHan: string, ghiChu: string, soLanCapPhat: string, soLanThuHoi: string, yeuCau: string, xacNhan: string, ngayCapPhat: string ){
    //     let column = [];
    //     //let result_located = [];
    //     //let result_elem =[];
    //     //let exp_result = ["Tên tài sản auto", "", "Thẻ tài sản test_auto", "11111", "Headphone - HN1", "Headphone", "Trong kho", "", "NCC HN1", "NCC HN1", "HN1", "Lazada", "", "1,000,000", "001", "6 months", "", "mô tả test", "0", "0", "0", "Chưa checkout", ""];
    //     for (let i = 0; i <= 22; i++) {
    //       //result_located[i] = By.css(`tr:nth-child(2) td:nth-child(${i + 3})`);
    //       //await driver.wait(until.elementsLocated(result_located[i]), 1000);
    //       //result_elem[i]= await driver.findElement(result_located[i]);
    //       get column[i](){
    // return this.driver.findElement(By.css(`tr:nth-child(2) td:nth-child(${i + 3})`))
    //       }
    //       await driver.wait(until.elementIsVisible(result_elem[i]), 1000)
    //       act_result[i] = await result_elem[i].getText();
    //       assert.equal(act_result[i], exp_result[i]);

    // }

    async clickToThietBiMenu() {
        await this.thietBiMenu.click();
    }

    async clickToTatCaSubmenu() {
        await this.tatCaSubMenu.click();
    }
    
    async clickToThemMoiBtn() {
        await this.themMoiBtn.click();
    }

    async typeToTheTaiSanTtb(theTaiSan: string) {
        await this.theTaiSanTtb.sendKeys(theTaiSan);
    }

    async typeToTenTaiSanTtb(tenTaiSan: string) {
        await this.tenTaiSanTtb.sendKeys(tenTaiSan);
    }

    async typeToSoSeriTtb(soSeri: string) {
        await this.soSeriTtb.sendKeys(soSeri);
    }

    async typeToNgayNhapTtb(ngayNhap: string) {
        await this.ngayNhapTtb.sendKeys(ngayNhap);
    }

    async clickToKieuTaiSanDrd() {
        await this.kieuTaiSanDrd.click();
    }

    async selectHeadphoneOption() {
        await this.headPhoneOption.click();
    }

    async clickToNhaCungCapDrd() {
        await this.nhaCungCapDrd.click();
    }

    async selectLazadaOption() {
        await this.lazadaOption.click();
    }

    async clickToVanPhongDrd() {
        await this.vanPhongDrd.click();
    }

    async selectHN1Option() {
        await this.nccHN1Option.click();
    }

    async typeToMaDonHangTtb(maDonHang: string) {
        await this.maDonHangTtb.sendKeys(maDonHang);
    }

    async typeToChiPhiMuaHangTt(chiPhiMuaHang: string) {
        await this.chiPhiMuaHangTtb.sendKeys(chiPhiMuaHang);
    }

    async typeToBaoHanhTtb(baoHanh: string) {
        await this.baoHanhTtb.sendKeys(baoHanh);
    }

    async clickToTrangThaiDrd() {
        await this.trangThaiDrd.click();
    }

    async selectReadyOption() {
        await this.readyOption.click();
    }

    async typeToMoTaTtb(moTa: string) {
        await this.moTaTtb.sendKeys(moTa);
    }

    async clickToThemMoiOnMoDal() {
        await this.themMoi_Modal_Btn.click();
    }

    async verifyToastThemMoiSuccess(successMessage: string) {
        waitElementVisible(this.themMoiSuccessToast, successMessage)
        verifyText(this.themMoiSuccessToast, successMessage)
    }


    //     async verifyMessagePassword(errorMessage: string) {
    //         await this.driver.wait(until.elementIsVisible(this.alertPassword), 1000);
    //         let alertText = await this.alertPassword.getText();
    //         assert.equal(alertText, errorMessage);
    //     }

    //     async verifyMessageUserName(errorMessage: string) {
    //         await this.driver.wait(until.elementIsVisible(this.alertUserName), 1000);
    //         let alertText = await this.alertUserName.getText();
    //         assert.equal(alertText, errorMessage);
    //     }

    //     async verifyAlert(errorMessage: string) {
    //         await this.driver.wait(until.elementIsVisible(this.alert), 1000);
    //         const alertText = await this.alert.getText();
    //         assert.equal(alertText, errorMessage);
    //     }

    //     async verifyCurrentPage(end_URL: any, URL: string) {
    //         await this.driver.wait(until.urlIs(URL));
    //         assert((await this.currentURL).endsWith(end_URL));
    //     }
    // }

    // export default new LoginPage();
    // it("Verify that I'm able to add new asset successfully", async function () {
    //     // Scenario: Verify that I'm able to add new asset successfully
    //     // When I click the "Thêm mới" button
    //     const themMoiLocated = By.className('ant-btn ant-btn-default');
    //     await driver.wait(until.elementLocated(themMoiLocated), 3000);
    //     const themMoi = await driver.findElement(themMoiLocated);
    //     await driver.wait(until.elementIsVisible(themMoi), 6000);
    //     themMoi.click();

    //     // And I enter in "Thẻ tài sản" field 
    //     const theTaiSanLocated = By.css('[placeholder="Thẻ tài sản"]');
    //     await driver.wait(until.elementsLocated(theTaiSanLocated), 3000);
    //     const theTaiSan = await driver.findElement(theTaiSanLocated);
    //     await driver.wait(until.elementIsVisible(theTaiSan), 1000);
    //     theTaiSan.sendKeys("Thẻ tài sản test_auto");

    //     // And I enter in "Tên tài sản" field
    //     const tenTaiSan = await driver.findElement(By.id('name'));
    //     await driver.wait(until.elementIsVisible(tenTaiSan), 1000);
    //     tenTaiSan.sendKeys("Tên tài sản auto");

    //     // And I enter in "Số sê-ri" field
    //     const soSeri = await driver.findElement(By.id('serial'));
    //     await driver.wait(until.elementIsVisible(soSeri), 1000);
    //     soSeri.sendKeys("11111");

    //     // And I enter in "Ngày nhập" field
    //     // const ngayNhap = await driver.findElement(By.id('purchase_date'));
    //     // await driver.wait(until.elementIsVisible(ngayNhap), 1000);
    //     // ngayNhap.sendKeys('02192024');

    //     // And I select option on "Kiểu tài sản" field
    //     const kieuTaiSan = await driver.findElement(By.id('model'));
    //     await driver.wait(until.elementIsVisible(kieuTaiSan), 1000);
    //     kieuTaiSan.click();

    //     const headPhoneLocated = By.css("[title='Headphone - HN1 Headphone - HN1']");
    //     await driver.wait(until.elementLocated(headPhoneLocated), 3000);
    //     const headPhone = await driver.findElement(headPhoneLocated);
    //     await driver.wait(until.elementIsVisible(headPhone), 1000);
    //     headPhone.click();

    //     // And I select option on "Nhà cung cấp" field
    //     const nhaCungCap = await driver.findElement(By.id('supplier'));
    //     await driver.wait(until.elementIsVisible(nhaCungCap), 1000);
    //     nhaCungCap.click();

    //     const lazadaLocated = By.css("[title='Lazada']");
    //     await driver.wait(until.elementLocated(lazadaLocated), 3000);
    //     const lazada = await driver.findElement(lazadaLocated);
    //     await driver.wait(until.elementIsVisible(lazada), 1000);
    //     lazada.click();

    //     // And I select option on "Văn phòng" field 
    //     const vanPhong = await driver.findElement(By.id('rtd_location'));
    //     await driver.wait(until.elementIsVisible(vanPhong), 1000);
    //     vanPhong.click();

    //     const vanPhongNccHN1Located = By.css("[title='NCC HN1']");
    //     await driver.wait(until.elementLocated(vanPhongNccHN1Located), 3000);
    //     const vanPhong_nccHN1 = await driver.findElement(vanPhongNccHN1Located);
    //     await driver.wait(until.elementIsVisible(vanPhong_nccHN1), 1000);
    //     vanPhong_nccHN1.click();

    //     // And I enter in "Mã đơn hàng" field
    //     const maDonHang = await driver.findElement(By.id('order_number'));
    //     await driver.wait(until.elementIsVisible(maDonHang), 1000);
    //     maDonHang.sendKeys('001');

    //     // And I enter in "Bảo hành" field
    //     const baoHanh = await driver.findElement(By.id('warranty_months'));
    //     await driver.wait(until.elementIsVisible(baoHanh), 1000);
    //     baoHanh.sendKeys('6');

    //     // And I enter in "Chi phí mua hàng" field
    //     const chiPhiMuaHang = await driver.findElement(By.id('purchase_cost'));
    //     await driver.wait(until.elementIsVisible(chiPhiMuaHang), 1000);
    //     chiPhiMuaHang.sendKeys('1000000');

    //     // And I select option on "Trạng thái" field 
    //     const trangThai = await driver.findElement(By.id('status_label'));
    //     await driver.wait(until.elementIsVisible(trangThai), 1000);
    //     trangThai.click();

    //     const readyLocated = By.css("[title='Ready to Deploy']");
    //     await driver.wait(until.elementLocated(readyLocated), 3000);
    //     const ready = await driver.findElement(readyLocated);
    //     await driver.wait(until.elementIsVisible(ready), 1000);
    //     ready.click();

    //     // And I enter in "Mô tả" field
    //     const moTa = await driver.findElement(By.css("[data-testid='text-area']"));
    //     await driver.wait(until.elementIsVisible(moTa), 1000);
    //     moTa.sendKeys('mô tả test');

    //     // When I click the "Thêm mới" button on "Thêm mới" modal
    //     const themMoi_modal = await driver.findElement(By.css("[type='submit']"));
    //     await driver.executeScript("arguments[0].scrollIntoView(true);", themMoi_modal);
    //     //await driver.wait(until.elementIsVisible(themMoi_modal), 1000);
    //     await themMoi_modal.click();

    //     // Then I expect that toast "Asset created successfully. :)" is displayed
    //     const themMoiToastLocated = By.className('ant-notification-notice-description');
    //     await driver.wait(until.elementLocated(themMoiToastLocated), 3000);
    //     const themMoi_toast = await driver.findElement(themMoiToastLocated);
    //     await driver.wait(until.elementIsVisible(themMoi_toast), 1000);
    //     const themMoi_toast_text = await themMoi_toast.getText();
    //     console.log("đây là toast", themMoi_toast_text);
    //     assert.equal(themMoi_toast_text, 'Asset created successfully. :)');

    //     // And the asset is created successfully 

    //     let act_result = [];
    //     let result_located = [];
    //     let result_elem =[];
    //     let exp_result = ["Tên tài sản auto", "", "Thẻ tài sản test_auto", "11111", "Headphone - HN1", "Headphone", "Trong kho", "", "NCC HN1", "NCC HN1", "HN1", "Lazada", "", "1,000,000", "001", "6 months", "", "mô tả test", "0", "0", "0", "Chưa checkout", ""];
    //     for (let i = 0; i <= 22; i++) {
    //       result_located[i] = By.css(`tr:nth-child(2) td:nth-child(${i + 3})`);
    //       await driver.wait(until.elementsLocated(result_located[i]), 1000);
    //       result_elem[i]= await driver.findElement(result_located[i]);
    //       await driver.wait(until.elementIsVisible(result_elem[i]), 1000)
    //       act_result[i] = await result_elem[i].getText();
    //       assert.equal(act_result[i], exp_result[i]);
    //     };
}
export default new AssetPage();
