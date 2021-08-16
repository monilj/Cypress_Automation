import HomePage from "../../../../support/pageObjects/HomePage";
import ProductPage from "../../../../support/pageObjects/ProductPage";
import ProductListPage from "../../../../support/pageObjects/ProductListPage";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const homePage = new HomePage();
const productPage = new ProductPage();
const productListPage = new ProductListPage();
let name;
Given("I open ECommerce Page", () => {
  cy.visit(Cypress.env("url"));
});

When("I add items to Cart", function () {
  homePage.getShopTab().click();
  // cy.pause();
  // cy.debug();
  this.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });
  productPage.getCheckOutButton().click();
});

And("Validate the total prices ", () => {
  var sum = 0;
  cy.get("tr td:nth-child(4) strong")
    .each(($el, index, $list) => {
      cy.log($el.text());
      const actualAmount = $el.text();
      var res = actualAmount.split(" ");
      res = res[1].trim();
      sum = Number(sum) + Number(res);
    })
    .then(function () {
      cy.log(sum);
    });
  cy.get("h3 strong").then(function (element) {
    const amount = element.text();
    var res = amount.split(" ");
    var total = res[1].trim();
    expect(Number(total)).to.equal(sum);
  });
});

Then("Then Select country submit and Verify Thank you", () => {
  productListPage.getFinalCheckOutButton().click();
  cy.get("#country").type("India");
  cy.get(".suggestions > ul > li > a", { timeout: 6000 }).click();
  cy.get("#checkbox2").click({ force: true });
  cy.get(".ng-untouched > .btn").click();
  cy.get(".alert").then(function (element) {
    const actualText = element.text();
    expect(actualText.includes("Success")).to.be.true;
  });
});

When("I fill the form details", function (dataTable) {
  // [bobz , male   ]
  name = dataTable.rawTable[1][0];
  homePage.getEditBox().type(dataTable.rawTable[1][0]);
  homePage.getGender().select(dataTable.rawTable[1][1]);
});
// Then validate the forms behaviour
Then("validate the forms behaviour", function () {
  homePage.getTwoWayDataBinding().should("have.value", name);
  homePage.getEditBox().should("have.attr", "minlength", "2");
  homePage.getEntrepreneaur().should("be.disabled");
  Cypress.config("defaultCommandTimeout", 8000);
});
// And select the Shop Page
And("select the Shop Page", () => {
  homePage.getShopTab().click();
});
