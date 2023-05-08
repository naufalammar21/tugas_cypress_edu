Feature: check payment method with bank transfer
    I want to make a transaction with Gopay on Midtrans
    Scenario: The user makes a purchase transaction with GoPay on Midtrans.
        Given I open the midtrans website #2
        When I click the buy now button and fill the form #2
        Then payment sucess with bank transfer