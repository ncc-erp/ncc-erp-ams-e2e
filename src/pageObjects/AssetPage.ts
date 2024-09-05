"use strict";
import { HTMLElement } from './components/controls/HtmlElement';
import { AppConfig } from '../app.config';
import { BasePage } from './BasePage';
import { HtmlElementCollection } from './components/controls/HtmlElementCollection';
const { By, Builder } = require("selenium-webdriver");
import { getDriver } from "../support/driver";


class AssetPage extends BasePage {
    //   // buttons
    //   buttons = HtmlElementCollection.by('button');
    // test
    errorModel = HTMLElement.by('.ant-notification-notice-message');
    // loading
    loading = HTMLElement.by('.ant-spin.ant-spin-spinning');
    pageTitle = HTMLElement.by('.ant-page-header-heading-left');

    //buttons:
    openModelBtn = HTMLElement.by("[aria-label='plus-square']");
    createNewBtn = HTMLElement.by('div.submit .ant-btn-primary');

    //modal
    assetPopupTitle = HTMLElement.by("#rcDialogTitle0");

    //errorMsg
    errorMessAssestTagElm = HTMLElement.by(".ant-form-item-explain-error:nth-child(1)");
    errorMessAssestTypeElm = HTMLElement.by(".ant-form-item-explain-error:nth-child(2)"); // loi o day
    errorMessOfficeText = HTMLElement.by(".ant-form-item-explain-error:nth-child(3)");
    errorMessWarrantyElm = HTMLElement.by(".ant-form-item-explain-error:nth-child(4)");
    errorMessStatusElm = HTMLElement.by(".ant-form-item-explain-error:nth-child(5)");
    errorMessProviderElm = HTMLElement.by(".ant-form-item-explain-error:nth-child(6)");

    constructor(path = '') {
        super(AppConfig.appUrl, path);
    }
    // override
    async waitPageRendered() {// todo implement each page
        await this.wait(async () => {
            return !(await this.loading.isDisplayedNoWait());
        }, `wait all component in pages loaded`)
    }

    // common functions for all page
    async getErrorMessage() {
        return await this.errorModel.getText();
    }
    async getPageTitle() {
        return await this.pageTitle.getText();
    }

    //   async clickButtonByName(name: string) {
    //     return await this.buttons.findElementByText(name).click();
    //   }

    //  actions
    async clickToOpenModalBtn() {
        await this.openModelBtn.click();
    }

    async getPopupTitleText() {
        await this.assetPopupTitle.waitVisible();
        return await this.assetPopupTitle.getText();
    }

    async clickToCreateNewBtn() {
        await this.createNewBtn.waitVisible();
        await this.createNewBtn.click();
    }

    async getErrorMessAssestTagElm() {
        await this.errorMessAssestTagElm.waitVisible();
        return await this.errorMessAssestTagElm.getText();
    }

    async getErrorMessAssestTypeElm() {
        // console.log("1111111111111", await this.errorMessAssestTypeElm);
        await this.errorMessAssestTypeElm.waitVisible();
        console.log("111: ", await this.errorMessAssestTypeElm.getText());
        return await this.errorMessAssestTypeElm.getText();
    }

    async getErrorProviderElm() {
        await this.errorMessProviderElm.waitVisible();
        return await this.errorMessProviderElm.getText();
    }

    async getErrorMessOfficeText() {
        await this.errorMessOfficeText.waitVisible();
        return await this.errorMessOfficeText.getText();
    }

    async getErrorWarrantyElm() {
        await this.errorMessWarrantyElm.waitVisible();
        return await this.errorMessWarrantyElm.getText();
    }

    async getErrorMessStatusElm() {
        await this.errorMessStatusElm.waitVisible();
        return await this.errorMessStatusElm.getText();
    }


};

export default new AssetPage('assets');
