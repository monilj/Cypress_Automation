/// <reference types="cypress" />
import "cypress-iframe";
describe("developing Test framework", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Building Framework", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(2) > .nav-link").click();
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
  });
});
