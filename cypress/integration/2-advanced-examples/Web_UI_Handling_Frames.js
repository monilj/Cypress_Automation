/// <reference types="cypress" />
import "cypress-iframe";
describe("Execution on Web Control", function () {
  it("Web Control for Handling Child tab with combination of Cypress and JQuery ", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
