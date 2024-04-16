import assert from "assert";
import { By, until } from "selenium-webdriver";
import { BasePage } from "./BasePage";

class createNewAsset extends BasePage {
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

    get themMoiButton() {
        return this.driver.findElement(By.xpath("//span[@class = 'ant-page-header-heading-extra']//span[text() = 'Thêm mới']"))
    }

    get taoTaiSanModal() {
        return this.driver.findElement(By.xpath("//div[@class = 'ant-modal-content']"))
    }

    get theTaiSanField() {
        return this.driver.findElement(By.xpath("//input[@placeholder ='Thẻ tài sản']"))
    }

    get soSeRiField() {
        return this.driver.findElement(By.xpath("//input[@placeholder ='Serial']"))
    }

    get kieuTaiSanField() {
        return this.driver.findElement(By.xpath("//span[text() = 'Lựa chọn một kiểu tài sản']"))
    }

    get kieuTaiSanOption() {
        return this.driver.findElement(By.xpath("//div[text() = 'Monitor - DN Monitor - DN']"))
    }
    get vanPhongField() {
        return this.driver.findElement(By.xpath("//span[text() = 'Lựa chọn một văn phòng']"))
    }

    get vanPhongOption() {
        return this.driver.findElement(By.xpath("//div[@title = 'NCC DN']"))
    }
    get baoHanhField() {
        return this.driver.findElement(By.xpath("//span[text() = 'Bảo hành']"))
    }

    get trangThaiField() {
        return this.driver.findElement(By.xpath("//span[text() = 'Chọn tình trạng']"))
    }

    get trangThaiOption() {
        return this.driver.findElement(By.xpath("//div[@title='Ready to Deploy']"))
    }

    get tenTaiSanField() {
        return this.driver.findElement(By.xpath("//input[@placeholder ='Tên tài sản']"))
    }

    get nhaCungCapField() {
        return this.driver.findElement(By.xpath("//span[text() = 'Lựa chọn nhà cung cấp']"))
    }

    get nhaCungCapOption() {
        return this.driver.findElement(By.xpath("//div[@title= 'Tiki']"))
    }

    get maDonHangField() {
        return this.driver.findElement(By.xpath("//input[@placeholder ='Mã đơn hàng']"))
    }

    get chiPhiMuaHangField() {
        return this.driver.findElement(By.xpath("//input[@placeholder ='Chi phí mua hàng']"))
    }

    get themMoiButtonSubmit() {
        return this.driver.findElement(By.xpath("//button[@type='submit']//span[text() = 'Thêm mới']"))
    }
    get toastSuccess() {
        return this.driver.findElement(By.xpath("//div[@class='ant-notification-notice-description' and text() = 'Asset created successfully. :)']"))
    }

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
    

    // actions
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

    async typeBaoHanh(bHnumber: number) {
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

    async typeChiPhiMuaHang(cost: number) {
        await this.chiPhiMuaHangField.sendKeys(cost)
    }

    async clickToThemMoiButtonSubmit() {
        await this.themMoiButtonSubmit.click()
    }

    async verifyToastSuccess(toast: string) {
        await verifyText(this.toastSuccess, toast)
    } 
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
}



export default new createNewAsset();

function verifyText(toastSuccess: any, toast: string) {
    throw new Error("Function not implemented.");
}
