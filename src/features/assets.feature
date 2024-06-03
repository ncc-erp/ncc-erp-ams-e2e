Feature: Assets page
    Rule: Tes the Assets page
        Background: log in sucessfully
            Given Log in Ams successfully as "admin" user

        Scenario: Verify user can filter tai san by van phong
            When I click on the "Thiết bị" item on the menu
            And I navigated to the page tất cả tài sản
            And I filter by Văn phòng "NCC DN"
            Then I expect to see data from Kiểu tài sản inludes "DN"

        Scenario: Verify user can search tai san by the loai
            When I enter the text "Mouse" into the search bar
            Then I expect to see data from Thế Loại displays only "Mouse"

         Scenario: Verify user can search tai san by tim kiem nang cao
            When I click on tim kiem nang cao icon
            And I enter the text "DN-C23" into the "Tên tài sản"
            And I enter the text "Mouse-DN" into the "Kiểu tài sản"
            And I click on Tien Kiem button
            Then I expect to see data from Thế Loại displays only "Mouse"
            And I expect to see data from Kiểu tài sản inludes "Mouse-DN"

        Scenario: Verify user no data shown after input an invalid text to search bar
            And I clear the current inputted text on the search bar
            When I enter the text "Invalid data" into the search bar
            Then I expect to see "No Data" text shows on the middle of the table
           

    # Scenario: Verify user can refresh the page by clicking on refresh icon // loi FE

