Feature: AMS Asset
    As an admin user in AMS dashboard
    I want to expand Asset dropdown
    So that I can see all asset information in each sub nav
    Background: Go to the AMS dashboard page
    Given I login in AMS successfully
    Scenario: View all assets
    When I click on Asset dropdown
    And I click on All asset sub nav
    Then I expect to see page title "Tất cả tài sản"
