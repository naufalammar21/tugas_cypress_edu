Feature: check feature payment with Alfa Mart payment method
    I want to make a transaction with Alfa Mart payment method on Midtrans
    Scenario: The user makes a purchase transaction with Alfa Mart on Midtrans.
        Given I open the midtrans website #5
        When I click the buy now button and fill the form #5
        Then payment sucess with Alfa Mart payment method