Feature: check error message when user not fill the form
    I want to check error message when user not fill the form
    Scenario: The user clear several form and system appear erroe message
        Given I open the midtrans website #7
        When I click the buy now button and clear several form #7
        Then checked error message