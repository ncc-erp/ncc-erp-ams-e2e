import { BusinessPage } from "../BusinessPage";
import { HTMLElement } from "./controls/HtmlElement";
import { HtmlElementCollection } from "./controls/HtmlElementCollection";
import { expect } from 'chai';


export class AssetsPage extends BusinessPage {
    menuItems = HtmlElementCollection.by('[data-test-id="menu-item"]');
    subMenuItems = HtmlElementCollection.by('[data-test-id="sub-menu-item"]');
    vanPhongFilter = HTMLElement.byXpath('//span[text()="Tất cả"]');
    vanPhongOption = HtmlElementCollection.by('[class="ant-select-item ant-select-item-option"]');
    tableTitles = HtmlElementCollection.by('tr > th > div > span.ant-table-column-title');
    searchBar = HTMLElement.by('[id="search"]');
    noDataText = HTMLElement.by('.ant-empty-description');
    deviceNumber = HTMLElement.by('.sum-assets');
    tenTaiSanField = HTMLElement.by('[placeholder="Tên tài sản"]');
    kieuTaiSanField = HTMLElement.by('[placeholder="Lựa chọn một kiểu tài sản"]');
    itemLabels = HtmlElementCollection.by('[class="ant-modal-body"] [class="ant-col ant-form-item-label"]');
    fileSearch = HTMLElement.by('[data-icon="file-search"]');
    timKiemBtn = HTMLElement.by('[type="submit"]');

    constructor() {
        super('/');
    }
    // actions
    async clickOnMenuItems(menuItem: string) {
        await this.menuItems.findElementByText(menuItem).click();
    }
    async navigateToTatCaTaiSanScreen() {
        await this.subMenuItems.findElementByText('Tất cả').click();
    }
    async filterByVanPhong(text: string) {
        await this.vanPhongFilter.click();
        await this.vanPhongOption.findElementByText(text).click();
    }
    async verifyKieuTaiSanDataByVanPhong(text: string) {
        for (let i = 2; i < 10; i++) {
            const typeOfProperty = await HTMLElement.by(('table > tbody > tr:nth-child(' + i + ') > td:nth-child(5) > span')).getText();
           expect(typeOfProperty.includes(text))
        }
    }
    async enterTextIntoSearchBar(text: string) {
        await this.searchBar.type(text);
    }

    async verifyTheLoaiData(text: string) {
        for (let i = 2; i < 10; i++) {
            const typeOfProperty = await HTMLElement.by(('table > tbody > tr:nth-child(' + i + ') > td:nth-child(6) > span')).getText();
           expect(typeOfProperty.includes(text))
        }
    }

    async verifyNoDataAfterFiltering(expectedText: string) {
        expect(await this.noDataText.getText()).to.equal(expectedText);
    }

    async clearTextOnSearchBar() {
        await this.searchBar.clear();
    }

    async verifyTheNumBerOfDevices(expectedText: string) {
        expect(await this.deviceNumber.getText()).to.equal(expectedText);
    }
    async inputTextToTiemKiemNangCao(text: string, label: string) {
        switch (label) {
            case 'Tên tài sản':
                await this.tenTaiSanField.type(text);
              break;
            case 'Kiểu tài sản':
              await this.kieuTaiSanField.type(text);
              break;
        }
             
          
    }

    async clickOnTimKiemNangCaoIcon() {
        await this.fileSearch.click();
    }

    async clickOnTimKiemButton() {
        await this.timKiemBtn.click();
    }

}

export default new AssetsPage();
