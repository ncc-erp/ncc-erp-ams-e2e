"use strict";
import { BusinessPage } from './BusinessPage';
import { HTMLElement } from "./components/controls/HtmlElement";
// class DashboardPage extends BusinessPage {
//   constructor() {
//     super('dashboard');
//   }
// }

// export default new DashboardPage();

export class DashboardPage extends BusinessPage {
  assetDropdown = HTMLElement.by('[data-test-id="menu"] > li:nth-child(2) .ant-menu-title-content');
  allAssetsSubNav = HTMLElement.by('[data-test-id="menu"] > li:nth-child(2) > ul [data-test-id="sub-menu-item"]');

  constructor() {
    super('dashboard');  
  }

  // actions
  // Click vao 'Thiet bi'
  async clickAssetDropdown() {
    const dropdown = await this.assetDropdown;  // Lấy phần tử và nhấp vào
    await dropdown.click();
  }

  // Click vao 'Tat ca'
  async clickAllAssetsSubNav() {
    await this.allAssetsSubNav.click();
  }
}
// Xuất một instance của DashboardPage
export default new DashboardPage();
