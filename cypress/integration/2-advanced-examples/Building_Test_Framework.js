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
    cy.get("input[name='name']:nth-child(2)").type("this.data.name");
    cy.get("select").select("this.data.gender");
  });
});
