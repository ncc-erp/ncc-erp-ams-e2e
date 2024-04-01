Feature: Create an asset

	Background: Go to the "Tất cả tài sản" page
        Given I am on the "Tất cả tài sản" page

    Scenario: Verify successful to open the "Tạo tài sản" popup

        When I click on "Thêm mới" button
        Then I expect to see the "Tạo tài sản" popup

    Scenario: Verify the error message for required fields
        When I let all the required fields empty
        And I click on "Thêm mới" button at "Tạo tài sản" popup
        Then I expect to see the error message "Thẻ tài sản bắt buộc"
        Then I expect to see the error message "Kiểu tài sản bắt buộc"
        Then I expect to see the error message "Nhà cung cấp bắt buộc"
        Then I expect to see the error message "Văn phòng bắt buộc"
        Then I expect to see the error message "Bảo hành bắt buộc"
        Then I expect to see the error message "Trạng thái bắt buộc"

    Scenario: Verify successful asset creation by filling in all the required fields
        When I enter "1111" at Thẻ tài sản field
        And I select "Headphone - DN Headphone - DN" at Kiểu tài sản dropdown list
        And I select "Lazada" at "Nhà cung cấp" dropdown list
        And I select "NCC DN" at "Văn phòng" at dropdown list
        And I enter "6" at Bảo hành field
        And I select "Ready to Deploy" at Trạng thái dropdown list
        And I click on "Thêm mới" button
        Then I expect to see the toast message "Asset created successfully."
    



    