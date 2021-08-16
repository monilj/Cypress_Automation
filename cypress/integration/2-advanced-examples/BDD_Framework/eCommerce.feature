Feature: End to End ECommerce Validation

    Application regression
    Scenario: ECommerce Product Delivery
    Given I open ECommerce Page
    When I add items to Cart
    And Validate the total prices 
    Then Select country submit and Verify Thank you