import { BasePage } from "./BasePage";
import assert from "assert";
import { waitElementVisible } from "@/features/Verrify/waitElemVisible";
import { verifyText } from "@/features/Verrify/verifyText";
import { HTMLElement } from "./components/controls/HtmlElement";
import { HtmlElementCollection } from "./components/controls/HtmlElementCollection";
import { WebElement } from "selenium-webdriver";

export class AssetPage extends BasePage {
    constructor() {
        super('/login')
    }

    // elements
    get thietBiMenu() {
        return HTMLElement.by("[data-test-id='menu'] > li:nth-child(2) > div:first-child");
    }

    get tatCaSubMenu() {
        return HTMLElement.by("li:nth-child(2) ul.ant-menu.ant-menu-sub.ant-menu-inline > li:first-child");
    }

    get themMoiBtn() {
        return HTMLElement.by('.ant-btn.ant-btn-default');
    }

    get theTaiSanTtb() {
        return HTMLElement.by('[placeholder="Thẻ tài sản"]');
    }

    get tenTaiSanTtb() {
        return HTMLElement.by('#name');
    }

    get soSeriTtb() {
        return HTMLElement.by('#serial');
    }

    get ngayNhapTtb() {
        return HTMLElement.by('#purchase_date');
    }

    get kieuTaiSanDrd() {
        return HTMLElement.by('#model');
    }

    get headPhoneOption() {
        return HTMLElement.by("[title='Headphone - HN1 Headphone - HN1']");
    }

    get nhaCungCapDrd() {
        return HTMLElement.by('#supplier');
    }

    get lazadaOption() {
        return HTMLElement.by("[title='Lazada']");
    }

    get vanPhongDrd() {
        return HTMLElement.by('#rtd_location');
    }

    get nccHN1Option() {
        return HTMLElement.by("[title='NCC HN1']");
    }

    get maDonHangTtb() {
        return HTMLElement.by('#order_number');
    }

    get baoHanhTtb() {
        return HTMLElement.by('#warranty_months');
    }

    get chiPhiMuaHangTtb() {
        return HTMLElement.by('#purchase_cost');
    }

    get trangThaiDrd() {
        return HTMLElement.by('#status_label');
    }

    get readyOption() {
        return HTMLElement.by("[title='Ready to Deploy']");
    }
    get moTaTtb() {
        return HTMLElement.by("[data-testid='text-area']");
    }

    get themMoi_Modal_Btn() {
        return HTMLElement.by("[type='submit']");
    }

    get themMoiSuccessToast() {
        return HTMLElement.by('.ant-notification-notice-description');
    }

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
        await this.theTaiSanTtb.type(theTaiSan);
    }

    async typeToTenTaiSanTtb(tenTaiSan: string) {
        await this.tenTaiSanTtb.type(tenTaiSan);
    }

    async typeToSoSeriTtb(soSeri: string) {
        await this.soSeriTtb.type(soSeri);
    }

    async typeToNgayNhapTtb(ngayNhap: string) {
        await this.ngayNhapTtb.type(ngayNhap);
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
        await this.maDonHangTtb.type(maDonHang);
    }

    async typeToChiPhiMuaHangTt(chiPhiMuaHang: string) {
        await this.chiPhiMuaHangTtb.type(chiPhiMuaHang);
    }

    async typeToBaoHanhTtb(baoHanh: string) {
        await this.baoHanhTtb.type(baoHanh);
    }

    async clickToTrangThaiDrd() {
        await this.trangThaiDrd.click();
    }

    async selectReadyOption() {
        await this.readyOption.click();
    }

    async typeToMoTaTtb(moTa: string) {
        await this.moTaTtb.type(moTa);
    }

    async clickToThemMoiOnMoDal() {
        await this.themMoi_Modal_Btn.click();
    }

    async verifyToastThemMoiSuccess(successMessage: string) {
         waitElementVisible(this.themMoiSuccessToast as unknown as WebElement, successMessage)
        verifyText(this.themMoiSuccessToast as unknown as WebElement, successMessage)
        
    }
}
export default new AssetPage();
