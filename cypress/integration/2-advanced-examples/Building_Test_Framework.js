/// <reference types="cypress" />
import "cypress-iframe";

import HomePage from "../pageObject/HomePage";
describe("developing Test framework", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Building Framework", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    const homePage = new HomePage();
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    cy.get("input[name='name']:nth-child(2)").should(
      "have.attr",
      "minlength",
      2
    );
    homePage.getEntrepreneur().should("be.disabled");
  });
});
