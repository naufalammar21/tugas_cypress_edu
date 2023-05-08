Feature: check checkout button
    I want to make a transaction with Gopay on Midtrans
    Scenario: The user makes a purchase transaction with GoPay on Midtrans.
        Given I open the midtrans website
        When I click the buy now button and fill the form
        Then payment sucess