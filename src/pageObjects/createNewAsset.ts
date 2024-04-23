import { BusinessPage } from "./BusinessPage";
import { HTMLElement } from "./components/controls/HtmlElement";
import { HtmlElementCollection } from "./components/controls/HtmlElementCollection";
import {expect} from "chai";

export class AssetPage extends BusinessPage {
    thietBiButton = HTMLElement.byXpath('//*[@data-test-id="menu-item" and text()="Thiết bị"]')
    tatCaButton = HTMLElement.byXpath('//*[@data-test-id="sub-menu-item" and text()="Tất cả"]')
    themMoi = HTMLElement.byXpath('//button[@type="button"]//span[contains(text(), "Thêm mới")]')
    assetPopuptitle = HTMLElement.by("#rcDialogTitle0");
    theTaisanTitle = HTMLElement.byXpath("//[@class='ant-form-item-required' and title='Thẻ tài sản'")
    tenTaiSanTitle = HTMLElement.by("[title='Tên tài sản']")
    themMoiButton = HTMLElement.by("[type='submit']")
    xButton = HTMLElement.by('.ant-modal-close')
    theTaiSan = HTMLElement.by('#asset_tag')
    tenTaiSan = HTMLElement.by('#name')
    soSeri = HTMLElement.by('#serial')
    ngayNhap = HTMLElement.by('#purchase_date')
    kieuTaiSan = HTMLElement.by('#model')
    kieuTaiSanPC = HTMLElement.by('[title="PC - DN PC - DN"]')
    nhaCungCap = HTMLElement.by('#supplier')
    nhaCungCapShoppee = HTMLElement.by('[title="Shoppe"]')
    vanPhong = HTMLElement.by('#rtd_location')
    vanPhongDN = HTMLElement.by('[title="NCC DN"]')
    maDonHang = HTMLElement.by('#order_number')
    baoHanh = HTMLElement.by('#warranty_months')
    chiPhiMuaHang = HTMLElement.by('#purchase_cost')
    trangThai = HTMLElement.by('#status_label')
    trangThaiReady = HTMLElement.by('[title="Ready to Deploy"]')
    moTa = HTMLElement.by('[data-testid="text-area"]')
    pcImage = HTMLElement.by('.ant-image')
    notiCreatedsuccessfully = HTMLElement.by('.ant-notification-notice-description')
    tenTaiSanCreated = HTMLElement.byXpath('//*[@class="ant-table-tbody"]/tbody/tr[1]/td[3]')
    

    constructor() {
        super('/');
    }
    // actions
    async clickThietbi() {
        await this.thietBiButton.click()
    }
    async clickTatcabutton() {
        await this.tatCaButton.click()
    }
    async clickThemmoi() {
        await this.themMoi.click()
    }
    async assetPopupTitle() {
        return await this.assetPopuptitle.getText();
    }
    async getTheTaisanTitle() {
        return await this.theTaisanTitle.getText();
    }
    async getTenTaiSanTitle() {
        return await this.tenTaiSanTitle.getText();
    }
    async clickThemmoibutton() {
        await this.themMoiButton.click()
    }
    async clickXbutton() {
        await this.xButton.click()
    }
    // async assetModalDisappeared() {
    //     expect(await this.assetPopupTitle.isDisplayed()).to.equal(true)
    // }
    async typeThetaisan(text) {
        await this.theTaiSan.type(text)
    }
    async typeTentaisan(text) {
        await this.tenTaiSan.type(text)
    }
    async typeSoseri(text) {
        await this.soSeri.type(text)
    }
    async typeNgaynhap(text) {
        await this.ngayNhap.type(text)
    }
    async selectKieutaisan() {
        await this.kieuTaiSan.type('PC')
        await this.kieuTaiSanPC.click()
    }
    async selectNhacungcap() {
        await this.nhaCungCap.click()
        await this.nhaCungCapShoppee.click()
    }    
    async selectVanphong() {
        await this.vanPhong.click()
        await this.vanPhongDN.click()
    }
    async typeMadonhang(text) {
        await this.maDonHang.type(text)
    }
    async typeBaohanh(text) {
        await this.baoHanh.type(text)
    }
    async typeChiphimuahang(text) {
        await this.chiPhiMuaHang.type(text)
    }
    async selectTrangthai() {
        await this.trangThai.click()
        await this.trangThaiReady.click()
    }
    async typeMota(text) {
        await this.moTa.type(text)
    }
    // async uploadPCimage(file) {
    //     await this.pcImage.u(file)
        
    //     // await this.pcImage.upload(file)
    // }
    async tenTaisanaftercreatedSuccessfully(text) {
        let TenTaiSanCreated = await this.tenTaiSanCreated.getText()
        expect(TenTaiSanCreated).to.equal(text)
    }
    async successfulcreatedtoast() {
        await this.notiCreatedsuccessfully.waitVisible()
        let CreatedSuccessfullToast = await this.notiCreatedsuccessfully.getText()
        expect(CreatedSuccessfullToast).to.equal('Asset created successfully. :)')
    }
};
export default new AssetPage();