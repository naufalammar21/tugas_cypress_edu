Feature: check feature payment with Debit/Credit payment method
    I want to make a transaction with Debit/credit payment method on Midtrans
    Scenario: The user makes a purchase transaction with Debit/credit on Midtrans.
        Given I open the midtrans website #6
        When I click the buy now button and fill the form #6
        Then payment sucessfully