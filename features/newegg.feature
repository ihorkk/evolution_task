Feature: Newegg shop

  Background:
    Given I am on the main page
    Given I close the promo banner if it appears

  @search_bar
  Scenario: Search bar
    When I enter Windows in the search bar
    When I click on search button
    Then I should see at least one item appears

  @logo_button
  Scenario: Internet shop logo button
    When I open Today Best Deals tab
    When I click on the Internet shop logo
    Then I should be redirected to the main page
