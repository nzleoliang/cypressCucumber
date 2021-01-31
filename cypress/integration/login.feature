Feature: login functionality

    As a user I can login the system successfully

    Scenario: a user can login sucessfully with correct credential
      Given I am at login page
      When I input username "standard_user" and password "secret_sauce"
      And Click the submit button
      Then I should be able to load main page successfully

    @focus
    Scenario: a bad performance user can login sucessfully with long latency
      Given I am at login page
      When I input username "performance_glitch_user" and password "secret_sauce"
      And Click the submit button
      Then I should be able to load main page successfully