/// <reference types="cypress" />
import "cypress-iframe";
describe("developing Test framework", function () {
  before(function () {});
  it("", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("input[name='name']:nth-child(2)").type("Bob");
    cy.get("select").select("Female");
  });
});
