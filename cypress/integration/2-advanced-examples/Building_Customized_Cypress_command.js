/// <reference types="cypress" />
import HomePage from "./pageObjects/HomePage";
import ProductPage from "./pageObjects/ProductPage";
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
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopTab().click();
    cy.pause();
    cy.debug();
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    productPage.getCheckOutButton().click();
  });
});
