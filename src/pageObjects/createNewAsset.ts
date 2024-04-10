import { BusinessPage } from "./BusinessPage";
import { HTMLElement } from "./components/controls/HtmlElement";
import { HtmlElementCollection } from "./components/controls/HtmlElementCollection";
import {expect} from "chai";


export class AssetPage extends BusinessPage {
    thietBiButton = HTMLElement.by('data-menu-id="rc-menu-uuid-25689-1-asset"')
    tatCaButton = HTMLElement.byXpath('//*[@data-test-id="sub-menu-item" and text()="Tất cả"')
    tatCaTaiSanTanTitle = HTMLElement.by('class="ant-page-header-heading-title" title="Tất cả tài sản"')
    themMoi = HTMLElement.byXpath('//button[@type="button"]//span[contains(text), "Thêm mới")]')
    assetPopupTitle = HTMLElement.by("#rcDialogTitle0");
    theTaisanTitle = HTMLElement.by(".ant-form-item-required title='Thẻ tài sản'")
    tenTaiSanTitle = HTMLElement.by("title='Tên tài sản'")
    themMoiButton = HTMLElement.by("type='submit'")
    xButton = HTMLElement.by('class="ant-modal-close"')
    theTaiSan = HTMLElement.by('id="asset_tag"')
    tenTaiSan = HTMLElement.by('id="name"')
    soSeri = HTMLElement.by('id="serial"')
    ngayNhap = HTMLElement.by('id="purchase_date"')
    kieuTaiSan = HTMLElement.by('id="model"')
    kieuTaiSanPC = HTMLElement.by('class="ant-select-selection-item" title="PC - DN PC - DN"')
    nhaCungCap = HTMLElement.by('id="supplier"')
    nhaCungCapShoppee = HTMLElement.by('class="ant-select-selection-item" title="Shoppe"')
    vanPhong = HTMLElement.by('id="rtd_location"')
    vanPhongDN = HTMLElement.by('class="ant-select-selection-item" title="NCC DN"')
    maDonHang = HTMLElement.by('id="order_number"')
    baoHanh = HTMLElement.by('id="warranty_months"')
    chiPhiMuaHang = HTMLElement.by('id="purchase_cost"')
    trangThai = HTMLElement.by('id="status_label"')
    trangThaiReady = HTMLElement.by('class="ant-select-selection-item" title="Ready to Deploy"')
    moTa = HTMLElement.by('data-testid="text-area"')
    pcImage = HTMLElement.by('class="ant-image"')
    notiCreatedsuccessfully = HTMLElement.by('ant-notification-notice-message')
    tenTaiSanCreated = HTMLElement.byXpath('//*[class="ant-table-tbody"]/tbody/tr[1]/td[3]')
    

    constructor() {
        super('assets');
    }
    // actions
    async clickThietbi() {
        await this.thietBiButton.click()
    }
    async clickTatcabutton() {
        await this.tatCaButton.click()
    }
    async getTatcathietbipagetitle(text) {
        let tatcathietbititle = await this.tatCaTaiSanTanTitle.getText()
        expect(text).to.equal(tatcathietbititle)
    }
    async clickThemmoi() {
        await this.themMoi.click()
    }
    async getAssetPopupTitle() {
        await this.assetPopupTitle.getText();
    }
    async getTheTaisanTitle() {
        await this.theTaisanTitle.getText();
    }
    async getTenTaiSanTitle() {
        await this.tenTaiSanTitle.getText();
    }
    //   async getFieldPlaceholder() {
    //     await this.getAttribute()
    //   }
    async clickThemmoibutton() {
        await this.themMoiButton.click()
    }
    async clickXbutton() {
        await this.xButton.click()
    }
    async assetModalDisappeared() {
        expect(await this.assetPopupTitle.isDisplayed()).to.equal(true)
    }
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
        await this.kieuTaiSanPC.isDisplayed()
        await this.kieuTaiSanPC.click()
    }
    async selectNhacungcap() {
        await this.nhaCungCap.click()
        await this.nhaCungCapShoppee.click()
    }    
    async selectVanphong() {
        await this.vanPhong.click()
        await this.vanPhongDN.isDisplayed()
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
        await this.trangThaiReady.isDisplayed()
        await this.trangThaiReady.click()
    }
    async typeMota(text) {
        await this.moTa.type(text)
    }
    async uploadPCimage(file) {
        await this.pcImage.upload(file)
    }
    async createTaisanSuccessfully(text) {
        let TenTaiSanCreated = await this.tenTaiSanCreated.getText()
        expect(TenTaiSanCreated).to.equal(text)
    }
    async createSuccessfultoast() {
        let CreatedSuccessfullToast = await this.notiCreatedsuccessfully.getText()
        expect(CreatedSuccessfullToast).to.equal('Asset created successfully. :)')
    }
};
export default new AssetPage();