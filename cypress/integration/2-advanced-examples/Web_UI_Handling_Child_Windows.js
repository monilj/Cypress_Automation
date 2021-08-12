/// <reference types="cypress" />
describe("Execution on Web Control", function () {
  it("Web Control for Handling Child window", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      cy.get(url);
    });
  });
});
