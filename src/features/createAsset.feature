Feature: Asset
    As an user, I want to be able to add new asset
    Scenario: Verify that user can create new asset successfully
        Given I go to the login page successfully
        When I enter email as "adminUser[0].username" in config
        And I enter password as "adminUser[0].password" in config
        And I attempt to login
        And I click on Thiết bị menu
        And I click on Tất cả submenu
        And I click on "Thêm mới" button
        And I type "abc123" for the "Thẻ tài sản" field
        And I type "145ad" for the "Số Sê-ri" field
        And I click on "Kiểu tài sản" field
        And I select Headphone - DN Headphone - DN for "Kiểu tài sản" field
        And I click on "Văn phòng" field
        And I select NCC DN for "Văn phòng" field
        And I type "3" for "Bảo hành" field
        And I click on "Trạng thái" field
        And I select Ready to Deploy for "Trạng thái" field
        And I type "Chi asset" for "Tên tài sản" field
        # And I select "30/3/2024" for "Ngày nhập" field
        And I click on "Nhà cung cấp" field
        And I select "Tiki" for "Nhà cung cấp" field
        And I type "MDH01" fot "Mã đơn hàng" field
        And I type "100000" for "Chi phí mua hàng" field
        And I click on "Thêm mới" button in modal
        Then I expect that the successful message "Asset created successfully. :)" will be displayed