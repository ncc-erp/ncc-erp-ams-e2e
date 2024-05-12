import assert from "assert";
import { BasePage } from "./BasePage";
import { HTMLElement } from "./components/controls/HtmlElement";

class createNewAsset extends BasePage {
    constructor() {
        super('/login')
    }
    // elements
    get thietBiMenu() {
        return HTMLElement.byXpath("//span[text() = 'Thiết bị']");
    }

    get tatCaSubMenu() {
        return HTMLElement.byXpath("//*[@data-test-id='sub-menu-item' and text()='Tất cả']");
    }

    get themMoiButton() {
        return HTMLElement.byXpath("//span[@class = 'ant-page-header-heading-extra']//span[text() = 'Thêm mới']")
    }

    get taoTaiSanModal() {
        return HTMLElement.byXpath("//div[@class = 'ant-modal-content']")
    }

    get theTaiSanField() {
        return HTMLElement.byXpath("//input[@type = 'text' and @id='asset_tag']")
    }

    get soSeRiField() {
        return HTMLElement.byXpath("//input[@type = 'text' and @id='serial']")
    }

    get kieuTaiSanField() {
        return HTMLElement.byXpath("//input[@type = 'search' and @id='model']")
    }
    
    get kieuTaiSanOption() {
        return HTMLElement.byXpath("//div[text() = 'Headphone - DN Headphone - DN']")
    }
    get vanPhongField() {
        return HTMLElement.byXpath("//input[@type = 'search' and @id='rtd_location']")
    }

    get vanPhongOption() {
        return HTMLElement.byXpath("//div[@title = 'NCC DN']")
    }
    get baoHanhField() {
        return HTMLElement.byXpath("//input[@type = 'number' and @id='warranty_months']")
    }

    get trangThaiField() {
        return HTMLElement.byXpath("//input[@type = 'search' and @id='status_label']")
    }

    get trangThaiOption() {
        return HTMLElement.byXpath("//div[@title='Ready to Deploy']")
    }

    get tenTaiSanField() {
        return HTMLElement.byXpath("//input[@type = 'text' and @id='name' and @placeholder='Tên tài sản']")
    }

    get nhaCungCapField() {
        return HTMLElement.byXpath("//input[@type = 'search' and @id='supplier']")
    }

    get nhaCungCapOption() {
        return HTMLElement.byXpath("//div[@title= 'Tiki']")
    }

    get maDonHangField() {
        return HTMLElement.byXpath("//input[@type = 'text' and @id='order_number']")
    }

    get chiPhiMuaHangField() {
        return HTMLElement.byXpath("//input[@type = 'number' and @id='purchase_cost']")
    }

    get themMoiButtonSubmit() {
        return HTMLElement.byXpath("//button[@type='submit']//span[text() = 'Thêm mới']")
    }
    get toastSuccess() {
        return HTMLElement.byXpath("//div[@class='ant-notification-notice-description' and text() = 'Asset created successfully. :)']")
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
        await this.theTaiSanField.type(theTaiSan)
    }

    async typeSoSeRi(soSeRi: string) {
        await this.soSeRiField.type(soSeRi)
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
        await this.baoHanhField.type(bHnumber)
    }

    async clickToTrangThaiField() {
        await this.trangThaiField.click()
    }

    async selectTrangThai() {
        await this.trangThaiOption.click()
    }

    async typeTenTaiSan(tenTaiSan: string) {
        await this.tenTaiSanField.type(tenTaiSan)
    }

    async clickToNhaCungCapField() {
        await this.nhaCungCapField.click()
    }

    async selectNhaCungCap() {
        await this.nhaCungCapOption.click()
    }

    async typeMaDonHang(mdh: string) {
        await this.maDonHangField.type(mdh)
    }

    async typeChiPhiMuaHang(cost: string) {
        await this.chiPhiMuaHangField.type(cost)
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
function waitElementVisible(_toastSuccess: any, _toast: string) {
    throw new Error("Function not implemented.");
}

function verifyText(_toastSuccess: any, _toast: string) {
    throw new Error("Function not implemented.");
}




    // get alertBlankTheTaiSan() {
    //     return HTMLElement.byXpath("//div[@role = 'alert' and text() = 'Thẻ tài sản bắt buộc']"))
    // }

    // get alertBlankKieuTaiSan() {
    //     return HTMLElement.byXpath("//div[@role = 'alert' and text() = 'Kiểu tài sản bắt buộc']"))
    // }

    // get alertBlankVanPhong() {
    //     return HTMLElement.byXpath("//div[@role = 'alert' and text() = 'Văn phòng bắt buộc']"))
    // }
    // get alertBlankBaoHanh() {
    //     return HTMLElement.byXpath("//div[@role = 'alert' and text() = 'Bảo hành bắt buộc']"))
    // }
    // get alertBlankTrangThai() {
    //     return HTMLElement.byXpath("//div[@role = 'alert' and text() = 'Trạng thái bắt buộc']"))
    // }
    // get alertBlankNhaCungCap() {
    //     return HTMLElement.byXpath("//div[@role = 'alert' and text() = 'Nhà cung cấp bắt buộc']"))
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