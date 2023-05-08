Feature: check feature payment with indomaret payment method
    I want to make a transaction with indomaret payment method on Midtrans
    Scenario: The user makes a purchase transaction with indomart on Midtrans.
        Given I open the midtrans website #4
        When I click the buy now button and fill the form #4
        Then payment sucess with indomaret payment method