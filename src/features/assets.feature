Feature: AMS Assets

    Background: Navigate to Assets page after logging in with admin account
        Given Log in Ams successfully as "admin" user
        And I click to "Thiết bị" on menu
        And I click to "Tất cả" on sub-menu

    Scenario Outline: Check the ascending sorting of columns in Assets table
        When I sort "<Column Name>" column in "ascending" order
        Then I expect "<Column Name>" column to be sorted in "ascending" order

        Examples:
            | Column Name  |
            | Tên tài sản  |
            | Hình ảnh     |
            | Kiểu tài sản |
            | Thể loại     |
            | Trạng thái   |
            | Cấp phát đến |
            | Xác nhận     |

    Scenario Outline: Check the descending sorting of columns in Assets table
        When I sort "<Column Name>" column in "descending" order
        Then I expect "<Column Name>" column to be sorted in "descending" order

        Examples:
            | Column Name  |
            | Tên tài sản  |
            | Hình ảnh     |
            | Kiểu tài sản |
            | Thể loại     |
            | Trạng thái   |
            | Xác nhận     |