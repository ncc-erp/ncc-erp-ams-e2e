Feature: Asset
    As an user, I want to be able to add new asset
    Scenario: Verify that I'm able to add new asset successfully
        Given I go to the Log in page
        When I click on Thêm mới button
        And I enter in Thẻ tài sản field
        And I enter in Tên tài sản field
        And I enter in Ngày nhập field
        And I select option on Kiểu tài sản field
        And I select option on Nhà cung cấp field
        And I select option on Văn phòng field
        And I enter in Mã đơn hàng field
        And I enter in Bảo hành field
        And I enter in Chi phí mua hàng field
        And I select option on Trạng thái field
        And I enter in Mô tả field
        And I click the Thêm mới button on Thêm mới modal
        Then I expect that toast "Asset created successfully. :)" is displayed
        And the asset is created successfully