Feature: Create new asset

    As the AMS user
    I would like to add new asset into Tất cả thiết bị page
    So that I know that more assets has added in my company

    Background: Login AMS successfully
        Given I login AMS page successfully
        When I click to Thiết bị on menu
        And I click to Tất cả on sub-menu
        Then I expect to see page title Tất cả tài sản
        When I click on Thêm mới button

    # Scenario: Check UI "Tạo tài sản" page
    #     Then I expect that the Tạo tài sản popup should display
    #     And  The popup should include fields with title Thẻ tài sản and its placeholder Thẻ tài sản
    #     And The popup should include fields with title Tên tài sản and its placeholder Tên tài sản
    #     And The popup should include fields with title Số Sê-ri and its placeholder Serial
    #     And The popup should include fields with title Ngày nhập and its placeholder dd/mm/yyyy
    #     And The popup should include fields with title Kiểu tài sản and its placeholder Lựa chọn một kiểu tài sản
    #     And The popup should include fields with title Nhà cung cấp and its placeholder Lựa chọn nhà cung cấp
    #     And The popup should include fields with title Văn phòng and its placeholder Lựa chọn một văn phòng
    #     And The popup should include fields with title Mã đơn hàng and its placeholder Mã đơn hàng
    #     And The popup should include fields with title Bảo hành and its placeholder Bảo hành
    #     And The popup should include fields with title Chi phí mua hàng and its placeholder Chi phí mua hàng
    #     And The popup should include fields with title Trạng thái and its placeholder Chọn trạng thái
    #     And The popup should include fields with title Mô tả
    #     And The popup should include fields with title Tải hình

            # | Title            | Placeholder               |
            # | Thẻ tài sản      | Thẻ tài sản               |
            # | Tên tài sản      | Tên tài sản               |
            # | Số Sê-ri         | Serial                    |
            # | Ngày nhập        | dd/mm/yyyy                |
            # | Kiểu tài sản     | Lựa chọn một kiểu tài sản |
            # | Nhà cung cấp     | Lựa chọn nhà cung cấp     |
            # | Văn phòng        | Lựa chọn một văn phòng    |
            # | Mã đơn hàng      | Mã đơn hàng               |
            # | Bảo hành         | Bảo hành                  |
            # | Chi phí mua hàng | Chi phí mua hàng          |
            # | Trạng thái       | Chọn trạng thái           |
            # | Mô tả            |                           |
            # | Tải hình         |                           |

    # Scenario: Check required field
    #     And I click on Thêm mới button in the Asset poppup
    #     Then I should see required fields are highted with error Thẻ tài sản bắt buộc
    #     And I should see required fields are highted with error Kiểu tài sản bắt buộc
    #     And I should see required fields are highted with error Nhà cung cấp bắt buộc
    #     And I should see required fields are highted with error Văn phòng bắt buộc
    #     And I should see required fields are highted with error Bảo hành bắt buộc
    #     And I should see required fields are highted with error Trạng thái bắt buộc


    Scenario: Click X button to close the "Tạo tài sản" page
        And I click on X button in the Asset popup
        Then I expect that the Tạo tài sản popup is closed

    Scenario: Add new asset successfully
        And I type Thẻ tài sản "PC DN" 
        And I type Tên tài sản "Thao PC"
        And I type Số Sê-ri "123456"
        And I type Ngày nhập "30/04/2024"
        And I select Kiểu tài sản PC - DN PC - DN
        And I select Nhà cung cấp Shoppee
        And I select Văn phòng NCC DN
        And I type Mã đơn hàng "123456" 
        And I type Bảo hành "12"
        And I type Chi phí mua hàng "10.000.000"
        And I select Trạng thái Ready to Deploy
        And I type Mô tả "Working with customer"
        And I updoad the PC image
        And I click on Thêm mới button in the Asset popup
        Then I expect that the new Tài sản should be displayed in the Tất cả tài sản table named "Thao PC"
        And The successful toast should be displayed