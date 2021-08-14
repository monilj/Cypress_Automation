/// <reference types="cypress" />
import HomePage from "./pageObjects/HomePage";
import ProductPage from "./pageObjects/ProductPage";
import ProductListPage from "./pageObjects/ProductListPage";
import "cypress-iframe";

describe("developing Test framework", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Building Framework", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const productListPage = new ProductListPage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopTab().click();
    // cy.pause();
    // cy.debug();
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    productPage.getCheckOutButton().click();
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
});
