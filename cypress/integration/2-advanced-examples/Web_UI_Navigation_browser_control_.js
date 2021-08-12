/// <reference types="cypress" />
describe("Execution on Web Control", function () {
  it("Web Control for Browser Navigations", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "qaclickacademy");
    cy.go("back");
  });
});
