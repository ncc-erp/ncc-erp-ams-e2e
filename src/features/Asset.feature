Feature: Asset
    As an user, I want to be able to add new asset
    Scenario: Verify that I'm able to add new asset successfully
        Given I go to the login page successfully
        When I click on Thiết bị menu
        And I click on Tất cả submenu
        And I click on Thêm mới button
        And I enter "tv the tai san" in Thẻ tài sản field
        And I enter "tv ten tai san" in Tên tài sản field
        And I select option on Kiểu tài sản field
        And I select option on Nhà cung cấp field
        And I select option on Văn phòng field
        And I enter "1111" in Mã đơn hàng field
        And I enter "6" in Bảo hành field
        And I enter "1000000" in Chi phí mua hàng field
        And I select option on Trạng thái field
        And I enter "tv mo ta" in Mô tả field
        And I click the Thêm mới button on Thêm mới modal
        Then I expect that toast "Asset created successfully. :)" is displayed
      