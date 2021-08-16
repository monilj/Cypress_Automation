Feature: End to End ECommerce Validation

    Application regression

    @Regression
    Scenario: ECommerce Product Delivery
    Given I open ECommerce Page
    When I add items to Cart
    And Validate the total prices
    Then Select country submit and Verify Thank you

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page
    When I fill the form details
    |name | gender |
    |bobz | Male   |

    Then validate the forms behaviour
    And select the Shop Page
