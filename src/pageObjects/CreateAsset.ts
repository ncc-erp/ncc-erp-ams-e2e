import assert from "assert";
import { By, until } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import { waitElementVisible } from "@/features/verrify/waitElemVisible";
import { verifyText } from "@/features/verrify/verifyText";

class createNewAsset extends BasePage {
    constructor() {
        super('/login')
    }
    // elements
    get thietBiMenu() {
        return this.driver.findElement(By.xpath("//span[text() = 'Thiết bị']"));
    }

    get tatCaSubMenu() {
        return this.driver.findElement(By.xpath("//*[@data-test-id='sub-menu-item' and text()='Tất cả']"));
    }

    get themMoiButton() {
        return this.driver.findElement(By.xpath("//span[@class = 'ant-page-header-heading-extra']//span[text() = 'Thêm mới']"))
    }

    get taoTaiSanModal() {
        return this.driver.findElement(By.xpath("//div[@class = 'ant-modal-content']"))
    }

    get theTaiSanField() {
        return this.driver.findElement(By.xpath("//input[@type = 'text' and @id='asset_tag']"))
    }

    get soSeRiField() {
        return this.driver.findElement(By.xpath("//input[@type = 'text' and @id='serial']"))
    }

    get kieuTaiSanField() {
        return this.driver.findElement(By.xpath("//input[@type = 'search' and @id='model']"))
    }

    get kieuTaiSanOption() {
        return this.driver.findElement(By.xpath("//div[text() = 'Headphone - DN Headphone - DN']"))
    }
    get vanPhongField() {
        return this.driver.findElement(By.xpath("//input[@type = 'search' and @id='rtd_location']"))
    }

    get vanPhongOption() {
        return this.driver.findElement(By.xpath("//div[@title = 'NCC DN']"))
    }
    get baoHanhField() {
        return this.driver.findElement(By.xpath("//input[@type = 'number' and @id='warranty_months']"))
    }

    get trangThaiField() {
        return this.driver.findElement(By.xpath("//input[@type = 'search' and @id='status_label']"))
    }

    get trangThaiOption() {
        return this.driver.findElement(By.xpath("//div[@title='Ready to Deploy']"))
    }

    get tenTaiSanField() {
        return this.driver.findElement(By.xpath("//input[@type = 'text' and @id='name' and @placeholder='Tên tài sản']"))
    }

    get nhaCungCapField() {
        return this.driver.findElement(By.xpath("//input[@type = 'search' and @id='supplier']"))
    }

    get nhaCungCapOption() {
        return this.driver.findElement(By.xpath("//div[@title= 'Tiki']"))
    }

    get maDonHangField() {
        return this.driver.findElement(By.xpath("//input[@type = 'text' and @id='order_number']"))
    }

    get chiPhiMuaHangField() {
        return this.driver.findElement(By.xpath("//input[@type = 'number' and @id='purchase_cost']"))
    }

    get themMoiButtonSubmit() {
        return this.driver.findElement(By.xpath("//button[@type='submit']//span[text() = 'Thêm mới']"))
    }
    get toastSuccess() {
        return this.driver.findElement(By.xpath("//div[@class='ant-notification-notice-description' and text() = 'Asset created successfully. :)']"))
    }


    // actions
    async clickToThietBiMenu() {
        await this.thietBiMenu.click();
    }

    async clickToTatCaSubmenu() {
        await this.tatCaSubMenu.click();
    }
    async clickToThemMoiButton() {
        await this.themMoiButton.click()
    }

    async typeTheTaiSan(theTaiSan: string) {
        await this.theTaiSanField.sendKeys(theTaiSan)
    }

    async typeSoSeRi(soSeRi: string) {
        await this.soSeRiField.sendKeys(soSeRi)
    }

    async clickToKieuTaiSanField() {
        await this.kieuTaiSanField.click()
    }

    async selectKieuTaiSan() {
        await this.kieuTaiSanOption.click()
    }

    async clickToVanPhongField() {
        await this.vanPhongField.click()
    }

    async selectVanPhong() {
        await this.vanPhongOption.click()
    }

    async typeBaoHanh(bHnumber: string) {
        await this.baoHanhField.sendKeys(bHnumber)
    }

    async clickToTrangThaiField() {
        await this.trangThaiField.click()
    }

    async selectTrangThai() {
        await this.trangThaiOption.click()
    }

    async typeTenTaiSan(tenTaiSan: string) {
        await this.tenTaiSanField.sendKeys(tenTaiSan)
    }

    async clickToNhaCungCapField() {
        await this.nhaCungCapField.click()
    }

    async selectNhaCungCap() {
        await this.nhaCungCapOption.click()
    }

    async typeMaDonHang(mdh: string) {
        await this.maDonHangField.sendKeys(mdh)
    }

    async typeChiPhiMuaHang(cost: string) {
        await this.chiPhiMuaHangField.sendKeys(cost)
    }

    async clickToThemMoiButtonSubmit() {
        await this.themMoiButtonSubmit.click()
    }

    async verifyToastSuccess(toast: string) {
        waitElementVisible(this.toastSuccess, toast)
        verifyText(this.toastSuccess, toast)
    }
}

export default new createNewAsset();



// get alertBlankTheTaiSan() {
//     return this.driver.findElement(By.xpath("//div[@role = 'alert' and text() = 'Thẻ tài sản bắt buộc']"))
// }

// get alertBlankKieuTaiSan() {
//     return this.driver.findElement(By.xpath("//div[@role = 'alert' and text() = 'Kiểu tài sản bắt buộc']"))
// }

// get alertBlankVanPhong() {
//     return this.driver.findElement(By.xpath("//div[@role = 'alert' and text() = 'Văn phòng bắt buộc']"))
// }
// get alertBlankBaoHanh() {
//     return this.driver.findElement(By.xpath("//div[@role = 'alert' and text() = 'Bảo hành bắt buộc']"))
// }
// get alertBlankTrangThai() {
//     return this.driver.findElement(By.xpath("//div[@role = 'alert' and text() = 'Trạng thái bắt buộc']"))
// }
// get alertBlankNhaCungCap() {
//     return this.driver.findElement(By.xpath("//div[@role = 'alert' and text() = 'Nhà cung cấp bắt buộc']"))
// }


// async verifyAlertBlankTheTaiSan(errorMessage: string) {
//     await verifyText(this.alertBlankTheTaiSan, errorMessage)
// }

// async verifyAlertBlankKieuTaiSan(errorMessage: string) {
//     await verifyText(this.alertBlankKieuTaiSan, errorMessage)
// }

// async verifyAlertBlankVanPhong(errorMessage: string) {
//     await verifyText(this.alertBlankVanPhong, errorMessage)
// }
// async verifyAlertBlankBaoHanh(errorMessage: string) {
//     await verifyText(this.alertBlankBaoHanh, errorMessage)
// }
// async verifyAlertBlankTrangThai(errorMessage: string) {
//     await verifyText(this.alertBlankTrangThai, errorMessage)
// }
// async verifyAlertBlankNhaCungCap(errorMessage: string) {
//     await verifyText(this.alertBlankNhaCungCap, errorMessage)
// }