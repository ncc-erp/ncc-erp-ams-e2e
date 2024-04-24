Feature: Create new asset

    As the AMS user
    I would like to add new asset into Tất cả thiết bị page
    So that I know that more assets has added in my company

    Scenario: Click on Thêm mới button to see Tạo tài sản popup
        Given I login AMS page successfully
        When I click to Thiết bị on menu
        And I click to Tất cả on sub-menu
        And I click on Thêm mới button
        Then I expect that the Tạo tài sản popup should display

    # Scenario: Check required field
    #     Given I am in the Tạo tài sản popup
    #     When I click on Thêm mới button in the Asset popup
    #     Then I should see required fields are highted with error Thẻ tài sản bắt buộc

    # Scenario: Click X button to close the "Tạo tài sản" page
    #     When I click on X button in the Asset popup
    #     Then I expect that the Tạo tài sản popup is closed

    Scenario: Add new asset successfully
        # Given I am in the Tạo tài sản popup
        When I type Thẻ tài sản "PC DN 07"
        And I type Tên tài sản "Thao PC 07"
        And I type Số Sê-ri "123456"
        # And I type Ngày nhập "30042024"
        And I select Kiểu tài sản PC - DN PC - DN
        And I select Nhà cung cấp Shoppee
        And I select Văn phòng NCC DN
        And I type Mã đơn hàng "123456"
        And I type Bảo hành "12"
        And I type Chi phí mua hàng "10.000.000"
        And I select Trạng thái Ready to Deploy
        And I type Mô tả "Working with customer"
        # And I updoad the PC image
        And I click on Thêm mới button in the Asset popup
        # Then I expect that the new Tài sản should be displayed in the Tất cả tài sản table named "Thao PC"
        And The successful toast should be displayed