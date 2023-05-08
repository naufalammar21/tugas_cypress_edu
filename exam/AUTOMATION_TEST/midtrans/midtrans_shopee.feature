Feature: check feature payment with shopee
    I want to make a transaction with shopee on Midtrans
    Scenario: The user makes a purchase transaction with shopee on Midtrans.
        Given I open the midtrans website #3
        When I click the buy now button and fill the form #3
        Then payment sucess with shopee