import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import DashboardPage from '@/pageObjects/DashboardPage';
import LoginPage from '@/pageObjects/LoginPage';
import AssetPage from '@/pageObjects/createNewAsset';
import SideBar from "@/pageObjects/components/SideBar";
import { TEST_DATA } from '@/data';
import { BusinessPage } from '@/pageObjects/BusinessPage';

Given('I login AMS page successfully', async function () {
    await LoginPage.go(true);
    let username = "";
    let password = "";
    username = TEST_DATA.adminUser[0].username;
    password = TEST_DATA.adminUser[0].password;
    await LoginPage.login(username, password);
});
When('I click to Thiết bị on menu', async function () {
    await AssetPage.clickThietbi();
});
When('I click to Tất cả on sub-menu', async function () {
    await AssetPage.clickTatcabutton();
} );
Then('I expect to see page title Tất cả tài sản', async function () {
    await AssetPage.getTatcathietbipagetitle('Tất cả tài sản');
})
When('I click on Thêm mới button', async function () {
    await AssetPage.clickThemmoi();
});
Then('I expect that the Tạo tài sản popup should display', async function () {
    const text = await AssetPage.getAssetPopupTitle();
    expect(text).to.equal("Tạo tài sản");
})
// Then('The popup should include fields with title {string} and its placeholder {string}', async function (Title, Placeholder) {
//     const getTitleField = await AssetPage.getFieldTitle();
//     expect(getTitleField).to.equal(Title);
//     const getPlaceholder = await AssetPage.getFieldPlaceholder();
//     expect(getPlaceholder).to.equal(Placeholder);
// })
// Then('I expect that field {string} should be highted with the red border {string} and error {string}', async function () {
    
// })

// Then('The popup should include fields with title Thẻ tài sản and its placeholder Thẻ tài sản', async function (title) {
//     const getTheTaiSanTitle= await AssetPage.theTaisanTitle();
//     expect(getTheTaiSanTitle).to.equal(title);
// })
// Then('The popup should include fields with title Tên tài sản and its placeholder Tên tài sản')
// Then('The popup should include fields with title Số Sê-ri and its placeholder Serial')
// Then('The popup should include fields with title Ngày nhập and its placeholder dd/mm/yyyy')
// Then('The popup should include fields with title Kiểu tài sản and its placeholder Lựa chọn một kiểu tài sản')
// Then('The popup should include fields with title Nhà cung cấp and its placeholder Lựa chọn nhà cung cấp')
// Then('The popup should include fields with title Văn phòng and its placeholder Lựa chọn một văn phòng')
// Then('The popup should include fields with title Mã đơn hàng and its placeholder Mã đơn hàng')
// Then('The popup should include fields with title Bảo hành and its placeholder Bảo hành')
// Then('The popup should include fields with title Chi phí mua hàng and its placeholder Chi phí mua hàng')
// Then('The popup should include fields with title Trạng thái and its placeholder Chọn trạng thái')
// Then('The popup should include fields with title Mô tả')
// Then('The popup should include fields with title Tải hình')

When('I click on Thêm mới button in the Asset popup', async function () {
    await AssetPage.clickThemmoibutton()
})
// Then('I should see required fields are highted with error Thẻ tài sản bắt buộc')
// Then('I should see required fields are highted with error Kiểu tài sản bắt buộc')
// Then('I should see required fields are highted with error Nhà cung cấp bắt buộc')
// Then('I should see required fields are highted with error Văn phòng bắt buộc')
// Then('I should see required fields are highted with error Bảo hành bắt buộc')
// Then('I should see required fields are highted with error Trạng thái bắt buộc')

When('I click on X button in the Asset popup', async function () {
    await AssetPage.clickXbutton()
})

Then('I expect that the Tạo tài sản popup is closed', async function () {
    await AssetPage.assetModalDisappeared()
})
When('I type Thẻ tài sản {string}', async function (text) {
    await AssetPage.typeThetaisan(text)
})
When('I type Tên tài sản {string}', async function (text) {
    await AssetPage.typeTentaisan(text)
})
When('I type Số Sê-ri {string}', async function (text) {
    await AssetPage.typeSoseri(text)
})
When('I type Ngày nhập {string}', async function (text) {
    await AssetPage.typeNgaynhap(text)
})
When('I select Kiểu tài sản PC - DN PC - DN', async function () {
    await AssetPage.selectKieutaisan()
})
When('I select Nhà cung cấp Shoppee', async function () {
    await AssetPage.selectNhacungcap()
})
When('I select Văn phòng NCC DN', async function () {
    await AssetPage.selectVanphong()
})
When('I type Mã đơn hàng', async function (text) {
    await AssetPage.typeMadonhang(text)
})
When('I type Bảo hành {string}', async function (text) {
    await AssetPage.typeBaohanh(text)
} )
When('I type Chi phí mua hàng {string}', async function (text) {
    await AssetPage.typeChiphimuahang(text)
})
When('I select Trạng thái Ready to Deploy', async function () {
    await AssetPage.selectTrangthai()
})
When('I type Mô tả {string}', async function (text) {
    await AssetPage.typeMota(text)
})
When('I updoad the PC image', async function () {
    let image = '/Users/vuthiphuongthao/Downloads/Study/7922058.jpg'
    await AssetPage.uploadPCimage(image)
})
Then('I expect that the new Tài sản should be displayed in the Tất cả tài sản table named {string}', async function (text) {
    await AssetPage.createTaisanSuccessfully(text)
})
Then('The successful toast should be displayed', async function () {
    await AssetPage.createSuccessfultoast()
})
