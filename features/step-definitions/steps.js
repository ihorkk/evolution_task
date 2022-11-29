const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^I am on the main page$/, async () => {
  await browser.url("/");
});

Given(/^I close the promo banner if it appears$/, async () => {
  const promoBanner = $('div[class="modal-content"]');
  const closePromoBanner = $('button[class="close"]');
  try {
    await promoBanner.waitForExist({ timeout: 3000 });
    await closePromoBanner.click();
  } catch {
    await console.log("Promo banner is not displayed");
  }
});

// Search bar
When(/^I enter (\w+) in the search bar$/, async (word) => {
  const searchInput = $('input[type="search"]');
  await searchInput.setValue(word);
});

When(/^I click on search button$/, async () => {
  const searchBtn = $('button[class="ico ico-search"]');
  await searchBtn.click();
});

Then(/^I should see at least one item appears$/, async () => {
  const productsList = $('div[class*="item-cells-wrap"]');
  await expect(productsList).toHaveChildren({ gte: 1 });
});

// Internet shop logo button
When(/^I open Today Best Deals tab$/, async () => {
  const todaysBestDealsTab = $(`//span[text()="Today's Best Deals"]`);
  await todaysBestDealsTab.click();
});

When(/^I click on the Internet shop logo$/, async () => {
  const mainLogo = $('div[class="header2021-logo"]');
  await mainLogo.click();
});

Then(/^I should be redirected to the main page$/, async () => {
  await expect(browser).toHaveUrl("https://www.newegg.com/");
});
